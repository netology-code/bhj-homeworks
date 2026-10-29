const API_BASE = 'https://racion.app';

const statusEl  = document.getElementById('status');
const listEl    = document.getElementById('list');
const detailsEl = document.getElementById('details');
const backBtn   = document.getElementById('backBtn');

function setStatus(text, isError = false) {
  statusEl.textContent = text;
  statusEl.classList.toggle('error', isError);
  statusEl.classList.remove('hidden');
}

function clearStatus() {
  statusEl.classList.add('hidden');
  statusEl.textContent = '';
}

function esc(str) {
  return String(str ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function imgUrl(path) {
  if (!path) {
    return PLACEHOLDER;
  }

  if (/^https?:\/\//.test(path)) {
    return path;
  }
  return API_BASE + path;
}

const PLACEHOLDER =
  'data:image/svg+xml;utf8,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
       <rect width="200" height="200" fill="#0f172a"/>
       <text x="50%" y="50%" fill="#475569" font-size="18"
             text-anchor="middle" dominant-baseline="middle">no image</text>
     </svg>`
  );

async function loadRecipes() {

}

function renderRecipes(recipes) {

}

async function loadRecipeById(id) {

}

function renderRecipeDetails(recipe) {

}

loadRecipes();