const input = document.getElementById('metro-input');
const suggestionsEl = document.getElementById('suggestions');
const spinner = document.getElementById('spinner');
const errorEl = document.getElementById('error');
const detailsEl = document.getElementById('details');

let debounceTimer = null;
let currentController = null; // для отмены устаревших запросов

let suggestions = [];
let activeIndex = -1;

function debounce(fn, delay = 250) {
  return function (...args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function showError(message) {
  errorEl.textContent = message;
  errorEl.classList.add('visible');
  setTimeout(() => errorEl.classList.remove('visible'), 5000);
}

function hideSuggestions() {
  suggestionsEl.classList.remove('visible');
  suggestionsEl.innerHTML = '';
}

const debouncedFetch = debounce((value) => fetchSuggestions(value), 300);

async function fetchSuggestions(query) {
  
}

function renderSuggestions(items) {

}

function selectSuggestion(item) {

}

input.addEventListener('input', (e) => {
  
})

document.addEventListener('click', (e) => {
  
})

input.addEventListener('keydown', (e) => {
  
})