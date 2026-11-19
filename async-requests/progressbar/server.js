/**
 * Локальный сервер для ДЗ «Загрузка больших файлов» (индикатор загрузки).
 *
 * Эндпоинт:
 *   POST /upload (или /nestjs-backend/upload) — принимает файл, отправленный
 *   через FormData (multipart/form-data, поле «file»), и отвечает
 *   { "status": "ok", "size": <получено байт> }.
 *
 * Файл нигде не сохраняется: сервер принимает данные, чтобы событие
 * upload.onprogress в браузере отрабатывало как при настоящей загрузке.
 * Если запрос оформлен неверно (не multipart/form-data или без файла),
 * сервер отвечает ошибкой — как и настоящий сервис.
 *
 * Запуск:  npm start  (или: node server.js)
 * Порт:    PORT=3333 (по умолчанию)
 *
 * Дополнительно раздаёт статические файлы репозитория homeworks.
 * Страница задания доступна по любому из адресов:
 *   http://localhost:3333/            (документ по умолчанию — task.html)
 *   http://localhost:3333/index.html
 *   http://localhost:3333/async-requests/progressbar/task.html
 */

import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PORT = Number(process.env.PORT ?? 3333);

const UPLOAD_PATHS = new Set(['/upload', '/nestjs-backend/upload']);

const STATIC_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const SITE_ROOT = '/async-requests/progressbar';

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

/** Первые 64 КиБ тела запроса, где лежат заголовки multipart-частей. */
const HEAD_LIMIT = 65536;

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

async function handleUpload(req, res) {
  const contentType = (req.headers['content-type'] ?? '').toLowerCase();
  if (!contentType.startsWith('multipart/form-data')) {
    sendJSON(res, 400, {
      error: 'Ожидается multipart/form-data: отправьте форму через AJAX с помощью FormData',
    });
    return;
  }

  let received = 0;
  let head = '';
  await new Promise((resolve, reject) => {
    req.on('data', (chunk) => {
      received += chunk.length;
      if (head.length < HEAD_LIMIT) {
        head += chunk.toString('latin1');
      }
    });
    req.on('end', resolve);
    req.on('error', reject);
  });

  // В multipart-части файла присутствует name="file" и непустой filename.
  if (!/name="file"/i.test(head) || !/filename="[^"]+"/i.test(head)) {
    sendJSON(res, 400, { error: 'В запросе отсутствует файл (поле "file")' });
    return;
  }

  sendJSON(res, 200, { status: 'ok', size: received });
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
    if (UPLOAD_PATHS.has(pathname)) {
      if (req.method === 'POST') {
        await handleUpload(req, res);
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
  console.log(`Сервер запущен: http://localhost:${PORT}/upload`);
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
