const API_BASE = 'https://wizard-world-api.herokuapp.com';

const statusEl  = document.getElementById('status');
const listEl    = document.getElementById('houses');
const detailsEl = document.getElementById('house');
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

async function loadHouses() {

}

function renderHouses(houses) {

}

async function loadHouseById(id) {

}

function renderHouseDetails(house) {

}

loadHouses();