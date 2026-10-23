const CONFIG = {
  url: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
  count: 8,          // сколько подсказок запрашивать
  debounceMs: 250,   // задержка дебаунса для ручного ввода
  minLength: 2       // минимальная длина запроса
};

const input = document.getElementById('address');
const listEl = document.getElementById('suggestions');
const spinner = document.querySelector('.autocomplete__spinner');
const resultEl = document.getElementById('result');

let suggestions = [];
let activeIndex = -1;
let abortCtrl   = null;
let debounceId  = null;

const escapeHtml = (str = '') =>
  str.replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[ch]);

function highlight(text, query) {
  const safeText  = escapeHtml(text);
  const safeQuery = escapeHtml(query.trim());
  if (!safeQuery) return safeText;

  const idx = safeText.toLowerCase().indexOf(safeQuery.toLowerCase());
  if (idx === -1) return safeText;

  return (
    safeText.slice(0, idx) +
    '<mark>' + safeText.slice(idx, idx + safeQuery.length) + '</mark>' +
    safeText.slice(idx + safeQuery.length)
  );
}

async function requestSuggestions(query) {

}

function renderList(items, query) {

}

function closeList() {

}

function setActive(index) {

}

async function fetchAndRender(query, immediate = false) {

}

function handleInput() {
  fetchAndRender(input.value.trim(), false);
}

function selectSuggestion(index) {

}

input.addEventListener('input', handleInput);
