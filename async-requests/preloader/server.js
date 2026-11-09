/**
 * Данные о курсах НЕ запрашиваются у ЦБ РФ: сервер генерирует их сам,
 * случайно варьируя курсы вокруг уровней, близких к текущим курсам ЦБ.
 * Подсказка: если нужны НАСТОЯЩИЕ данные ЦБ — см. закомментированную
 * функцию fetchCoursesFromCB ниже и комментарий в handleCourses.
 *
 * Запуск:              npm start  (или: node server.js)
 * Порт:                PORT=3333 (по умолчанию)
 * Задержка ответа:     DELAY_MS=3000 (по умолчанию, миллисекунды)
 *
 * Дополнительно раздаёт статические файлы репозитория homeworks,
 * поэтому страница задания доступна по адресу:
 *   http://localhost:3333/async-requests/preloader/task.html
 */

import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PORT = Number(process.env.PORT ?? 3333);
const DELAY_MS = Number(process.env.DELAY_MS ?? 3000);

const COURSES_PATHS = new Set(['/slow-get-courses', '/nestjs-backend/slow-get-courses']);

const STATIC_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const SITE_ROOT = '/async-requests/preloader';

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

/**
 * Шаблон справочника валют: CharCode, ID, NumCode, Nominal, Name, базовый курс (руб.).
 * Структура и уровни соответствуют формату daily_json.js ЦБ РФ (54 валюты).
 */
const CURRENCIES = [
  ['AUD', 'R01010', '036', 1, 'Австралийский доллар', 56.6756],
  ['AZN', 'R01020A', '944', 1, 'Азербайджанский манат', 48.3168],
  ['DZD', 'R01030', '012', 100, 'Алжирских динаров', 60.3482],
  ['GBP', 'R01035', '826', 1, 'Фунт стерлингов', 110.69],
  ['AMD', 'R01060', '051', 100, 'Армянских драмов', 22.7947],
  ['BHD', 'R01080', '048', 1, 'Бахрейнский динар', 218.4065],
  ['BYN', 'R01090B', '933', 1, 'Белорусский рубль', 27.4518],
  ['BOB', 'R01105', '068', 10, 'Боливиано', 69.0821],
  ['BRL', 'R01115', '986', 1, 'Бразильский реал', 15.0387],
  ['HUF', 'R01135', '348', 100, 'Форинтов', 25.2145],
  ['VND', 'R01150', '704', 10000, 'Донгов', 32.0666],
  ['HKD', 'R01200', '344', 1, 'Гонконгский доллар', 10.4782],
  ['GEL', 'R01210', '981', 1, 'Лари', 31.6465],
  ['DKK', 'R01215', '208', 1, 'Датская крона', 12.3339],
  ['AED', 'R01230', '784', 1, 'Дирхам ОАЭ', 22.3659],
  ['USD', 'R01235', '840', 1, 'Доллар США', 82.1386],
  ['EUR', 'R01239', '978', 1, 'Евро', 92.1924],
  ['EGP', 'R01240', '818', 10, 'Египетских фунтов', 15.2271],
  ['INR', 'R01270', '356', 100, 'Индийских рупий', 87.2514],
  ['IDR', 'R01280', '360', 10000, 'Рупий', 45.3955],
  ['IRR', 'R01300', '364', 1000000, 'Иранских риалов', 43.6455],
  ['KZT', 'R01335', '398', 100, 'Тенге', 18.1775],
  ['CAD', 'R01350', '124', 1, 'Канадский доллар', 58.7166],
  ['QAR', 'R01355', '634', 1, 'Катарский риал', 22.5655],
  ['KGS', 'R01370', '417', 100, 'Сомов', 93.9287],
  ['CNY', 'R01375', '156', 1, 'Юань', 12.2651],
  ['CUP', 'R01395', '192', 10, 'Кубинских песо', 34.2244],
  ['MDL', 'R01500', '498', 10, 'Молдавских леев', 45.8363],
  ['MNT', 'R01503', '496', 1000, 'Тугриков', 22.8135],
  ['NGN', 'R01520', '566', 1000, 'Найр', 60.9002],
  ['NZD', 'R01530', '554', 1, 'Новозеландский доллар', 45.9648],
  ['NOK', 'R01535', '578', 10, 'Норвежских крон', 88.3363],
  ['OMR', 'R01540', '512', 1, 'Оманский риал', 213.6244],
  ['PLN', 'R01565', '985', 1, 'Злотый', 20.8892],
  ['SAR', 'R01580', '682', 1, 'Саудовский риял', 21.9036],
  ['RON', 'R01585F', '946', 1, 'Румынский лей', 17.1856],
  ['XDR', 'R01589', '960', 1, 'СДР (специальные права заимствования)', 111.4095],
  ['SGD', 'R01625', '702', 1, 'Сингапурский доллар', 64.1608],
  ['TJS', 'R01670', '972', 10, 'Сомони', 89.1967],
  ['THB', 'R01675', '764', 10, 'Батов', 24.5168],
  ['BDT', 'R01685', '050', 100, 'Так', 65.9087],
  ['TRY', 'R01700J', '949', 10, 'Турецких лир', 16.4264],
  ['TMT', 'R01710A', '934', 1, 'Новый туркменский манат', 23.4682],
  ['UZS', 'R01717', '860', 10000, 'Узбекских сумов', 68.6004],
  ['UAH', 'R01720', '980', 10, 'Гривен', 18.075],
  ['CZK', 'R01760', '203', 10, 'Чешских крон', 37.9463],
  ['SEK', 'R01770', '752', 10, 'Шведских крон', 83.9295],
  ['CHF', 'R01775', '756', 1, 'Швейцарский франк', 100.3526],
  ['ETB', 'R01800', '230', 100, 'Эфиопских быров', 51.0185],
  ['RSD', 'R01805F', '941', 100, 'Сербских динаров', 78.2214],
  ['ZAR', 'R01810', '710', 10, 'Рэндов', 49.7689],
  ['KRW', 'R01815', '410', 1000, 'Вон', 61.2061],
  ['JPY', 'R01820', '392', 100, 'Иен', 52.0887],
  ['MMK', 'R02005', '104', 1000, 'Кьятов', 39.1136],
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const pad = (value) => String(value).padStart(2, '0');

const moscowNow = () => new Date(Date.now() + 3 * 60 * 60 * 1000);

function formatStamp(date) {
  return [
    date.getUTCFullYear(),
    pad(date.getUTCMonth() + 1),
    pad(date.getUTCDate()),
  ].join('-') + ' ' + [
    pad(date.getUTCHours()),
    pad(date.getUTCMinutes()),
    pad(date.getUTCSeconds()),
  ].join(':');
}

function formatIso(date) {
  return formatStamp(date).replace(' ', 'T') + '+03:00';
}

function atPublicationTime(date) {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 11, 30, 0));
}

/** Случайный курс вокруг базового уровня: отклонение до ±1%, 4 знака после запятой. */
function randomRate(base) {
  const jitter = 1 + (Math.random() - 0.5) * 0.02;
  return Math.round(base * jitter * 10000) / 10000;
}

// ============================================================================
// ПОДСКАЗКА: НАСТОЯЩИЕ ДАННЫЕ ЦБ РФ
//
// По умолчанию сервер генерирует случайные курсы (см. buildCourses ниже) и
// никуда не обращается. Если нужны настоящие данные — раскомментируйте
// функцию fetchCoursesFromCB и выполните замену в handleCourses
// (там есть помеченная строка).
// ============================================================================

// async function fetchCoursesFromCB() {
//   const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js', {
//     signal: AbortSignal.timeout(10_000),
//   });
//   if (!response.ok) {
//     throw new Error(`ЦБ РФ ответил со статусом ${response.status}`);
//   }
//   return response.json(); // структура та же: { Date, PreviousDate, ..., Valute }
// }

/** Структура полностью повторяет daily_json.js ЦБ РФ. */
function buildCourses() {
  const now = moscowNow();
  const published = now.getUTCHours() >= 11 && now.getUTCMinutes() >= 30
    ? now
    : new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const date = atPublicationTime(published);
  const previousDate = new Date(date.getTime() - 24 * 60 * 60 * 1000);
  const timestamp = new Date(Date.UTC(
    now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), 0, 0,
  ));

  const archivePath = [
    previousDate.getUTCFullYear(),
    pad(previousDate.getUTCMonth() + 1),
    pad(previousDate.getUTCDate()),
  ].join('/');

  const Valute = {};
  for (const [charCode, id, numCode, nominal, name, base] of CURRENCIES) {
    Valute[charCode] = {
      ID: id,
      NumCode: numCode,
      CharCode: charCode,
      Nominal: nominal,
      Name: name,
      Value: randomRate(base),
      Previous: randomRate(base),
    };
  }

  return {
    Date: formatIso(date),
    PreviousDate: formatIso(previousDate),
    PreviousURL: `//www.cbr-xml-daily.ru/archive/${archivePath}/daily_json.js`,
    Timestamp: formatIso(timestamp),
    Valute,
  };
}

function setCORS(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
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

async function handleCourses(req, res) {
  const courses = buildCourses();

  // Подсказка: для НАСТОЯЩИХ данных ЦБ РФ
  // 1) раскомментируйте функцию fetchCoursesFromCB выше;
  // 2) замените предыдущую строку на:
  //      const courses = await fetchCoursesFromCB();

  await delay(DELAY_MS);
  sendJSON(res, 200, {
    date: formatStamp(new Date()),
    response: courses,
  });
}

async function handleStatic(req, res, pathname) {
  if (pathname === '/') {
    res.writeHead(302, { Location: `${SITE_ROOT}/task.html` });
    res.end();
    return;
  }

  let filePath;
  try {
    filePath = path.normalize(path.join(STATIC_ROOT, decodeURIComponent(pathname)));
  } catch (error) {
    res.writeHead(400);
    res.end('Bad Request');
    return;
  }

  if (filePath !== STATIC_ROOT && !filePath.startsWith(STATIC_ROOT + path.sep)) {
    res.writeHead(403);
    res.end('Forbidden');
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
    if (req.method === 'GET' && COURSES_PATHS.has(pathname)) {
      await handleCourses(req, res);
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
  console.log(`Сервер запущен: http://localhost:${PORT}/slow-get-courses`);
  console.log(`Страница задания:                   http://localhost:${PORT}${SITE_ROOT}/task.html`);
  console.log(`Статика из: ${STATIC_ROOT}`);
  console.log(`Задержка ответа: ${DELAY_MS} мс (изменить: DELAY_MS=...)`);
});

const shutdown = () => {
  console.log('\nОстановка сервера');
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(0), 2000).unref();
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
