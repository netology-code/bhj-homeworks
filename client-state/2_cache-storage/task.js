const CACHE_NAME = 'posts-v1';
const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
const LS_KEY = 'posts:cache'; // fallback, если Cache API недоступен

const supportsCache = 'caches' in window;

const postsEl    = document.getElementById('posts');
const statusEl   = document.getElementById('status');
const errorEl    = document.getElementById('error');
const loadingEl  = document.getElementById('loading');
const refreshBtn = document.getElementById('refresh');

let busy = false;

function formatDate(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? '—' : d.toLocaleString('ru-RU');
}

function showLoading(on) {
  loadingEl.hidden = !on;
  refreshBtn.disabled = on;
  busy = on;
}

function showError(msg) {
  if (msg) {
    errorEl.textContent = msg;
  }

  errorEl.hidden = !msg;
}

function setStatus(savedAt, source) {
  const label = source === 'network' ? 'из сети' : 'из кэша';
  statusEl.textContent = `Источник: ${label} · обновлено: ${formatDate(savedAt)}`;
}

async function readCache() {
  
}

async function writeCache(data) {
  
}

function render(posts) {
  
}

async function load({ forceRefresh = false } = {}) {
  
}

refreshBtn.addEventListener('click', () => {});