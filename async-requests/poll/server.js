/**
 * Локальный сервер для ДЗ «Опрос с выбором результатов».
 *
 * Эндпоинты:
 *   GET  /poll — случайный опрос: { id, data: { title, answers: [...] } }
 *   POST /poll — голосование: тело vote=<id_опроса>&answer=<индекс_ответа>
 *                с заголовком Content-type: application/x-www-form-urlencoded,
 *                ответ: { stat: [{ answer, votes }, ...] }
 *
 * Голоса учитываются в памяти процесса: при перезапуске сервера
 * счётчики сбрасываются к случайным стартовым значениям.
 *
 * Запуск:  npm start  (или: node server.js)
 * Порт:    PORT=3333 (по умолчанию)
 *
 * Дополнительно раздаёт статические файлы репозитория homeworks.
 * Страница задания доступна по любому из адресов:
 *   http://localhost:3333/            (документ по умолчанию — task.html)
 *   http://localhost:3333/index.html
 *   http://localhost:3333/async-requests/poll/task.html
 */

import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PORT = Number(process.env.PORT ?? 3333);

const POLL_PATHS = new Set(['/poll', '/nestjs-backend/poll']);

const STATIC_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const SITE_ROOT = '/async-requests/poll';

const MIME_TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

/** Шаблоны опросов: заголовок и варианты ответа. */
const POLL_TEMPLATES = [
  {
    title: 'Ваш любимый герой?',
    answers: ['Мистер Чеснок', 'Принцесса Дыня'],
  },
  {
    title: 'Как вы относитесь к собакам?',
    answers: ['Хорошо', 'Отлично', 'Я люблю собак', 'Кто тут?'],
  },
  {
    title: 'Как вы предпочитаете учиться?',
    answers: ['Видеоуроки', 'Книги', 'Интерактивные курсы', 'Только практика'],
  },
  {
    title: 'Когда вам удобнее заниматься?',
    answers: ['Утром', 'Днём', 'Вечером', 'Ночью'],
  },
  {
    title: 'Что понятнее всего объясняет асинхронность?',
    answers: ['Колбэки', 'Промисы', 'async/await', 'Event loop'],
  },
];

/** Опросы: id -> { title, answers, votes }. Стартовые голоса случайные. */
const polls = new Map(POLL_TEMPLATES.map((template, index) => [index + 1, {
  ...template,
  votes: template.answers.map(() => Math.floor(Math.random() * 40) + 1),
}]));

/** Читает тело запроса (не больше limitBytes), при превышении возвращает null. */
async function readBody(req, limitBytes = 1_000_000) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > limitBytes) {
      return null;
    }
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf-8');
}

function setCORS(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
}

function sendJSON(res, statusCode, data) {
  const body = JSON.stringify(data);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  res.end(body);
}

function handleGetPoll(res) {
  const ids = [...polls.keys()];
  const id = ids[Math.floor(Math.random() * ids.length)];
  const poll = polls.get(id);

  sendJSON(res, 200, {
    id,
    data: {
      title: poll.title,
      answers: poll.answers,
    },
  });
}

async function handleVote(req, res) {
  const body = await readBody(req);
  if (body === null) {
    sendJSON(res, 413, { error: 'Request Entity Too Large' });
    return;
  }

  const params = new URLSearchParams(body);
  const vote = Number(params.get('vote'));
  const answer = Number(params.get('answer'));
  const poll = polls.get(vote);

  if (poll === undefined
    || !Number.isInteger(answer)
    || answer < 0
    || answer >= poll.answers.length) {
    sendJSON(res, 400, { error: 'Bad Request' });
    return;
  }

  poll.votes[answer] += 1;

  sendJSON(res, 200, {
    stat: poll.answers.map((name, index) => ({ answer: name, votes: poll.votes[index] })),
  });
}

/** Документы по умолчанию для каталогов: сначала index.html, затем task.html. */
const DEFAULT_DOCS = ['index.html', 'task.html'];

/** Пути-кандидаты для запроса в порядке приоритета; null при некорректном URL. */
function buildCandidates(pathname) {
  // Корень сайта — папка текущего задания: страница доступна по адресам
  // /, /index.html и по пути к каталогу задания без указания документа.
  if (pathname === '/' || pathname === '/index.html') {
    return [path.join(STATIC_ROOT, SITE_ROOT)];
  }

  let relative;
  try {
    relative = decodeURIComponent(pathname);
  } catch (error) {
    return null;
  }

  return [
    // Сначала путь в корне репозитория,
    path.normalize(path.join(STATIC_ROOT, relative)),
    // затем тот же путь в папке задания: благодаря этому относительные
    // ссылки страницы (task.css, task.js, main.js) работают и при её
    // открытии по адресу / или /index.html
    path.normalize(path.join(STATIC_ROOT, SITE_ROOT, relative)),
  ];
}

/** По кандидатам находит файл; для каталога — документ по умолчанию. */
async function resolveFile(candidates) {
  for (const candidate of candidates) {
    const stat = await fs.stat(candidate).catch(() => null);
    if (!stat) {
      continue;
    }
    if (stat.isFile()) {
      return candidate;
    }
    if (stat.isDirectory()) {
      for (const doc of DEFAULT_DOCS) {
        const docPath = path.join(candidate, doc);
        if ((await fs.stat(docPath).catch(() => null))?.isFile()) {
          return docPath;
        }
      }
    }
  }
  return null;
}

async function handleStatic(req, res, pathname) {
  const candidates = buildCandidates(pathname);
  if (candidates === null) {
    res.writeHead(400);
    res.end('Bad Request');
    return;
  }

  if (candidates.some((filePath) => !filePath.startsWith(STATIC_ROOT + path.sep))) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  const filePath = await resolveFile(candidates);
  if (filePath === null) {
    res.writeHead(404);
    res.end('Not Found');
    return;
  }

  try {
    const content = await fs.readFile(filePath);
    res.writeHead(200, {
      'Content-Type': MIME_TYPES[path.extname(filePath).toLowerCase()] ?? 'application/octet-stream',
    });
    res.end(content);
  } catch (error) {
    res.writeHead(404);
    res.end('Not Found');
  }
}

const server = http.createServer(async (req, res) => {
  const startedAt = Date.now();
  const { pathname } = new URL(req.url, `http://${req.headers.host ?? 'localhost'}`);

  setCORS(res);
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  try {
    if (POLL_PATHS.has(pathname)) {
      if (req.method === 'GET') {
        handleGetPoll(res);
      } else if (req.method === 'POST') {
        await handleVote(req, res);
      } else {
        sendJSON(res, 405, { error: 'Method Not Allowed' });
      }
    } else if (req.method === 'GET' || req.method === 'HEAD') {
      await handleStatic(req, res, pathname);
    } else {
      sendJSON(res, 405, { error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error(error);
    if (!res.headersSent) {
      sendJSON(res, 500, { error: 'Internal Server Error' });
    } else {
      res.end();
    }
  } finally {
    console.log(`${new Date().toISOString()} ${req.method} ${req.url} -> ${res.statusCode} (${Date.now() - startedAt} ms)`);
  }
});

server.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}/poll`);
  console.log(`Страница задания: http://localhost:${PORT}/ (также /index.html и ${SITE_ROOT}/task.html)`);
  console.log(`Статика из: ${STATIC_ROOT}`);
});

const shutdown = () => {
  console.log('\nОстановка сервера');
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(0), 2000).unref();
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
