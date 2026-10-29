const KEY = 'feedbackForm:draft';
const formEl = document.getElementById('form');
const statusEl = document.getElementById('status');
const outEl = document.getElementById('out');

function showStatus(text) {
  statusEl.textContent = text;
  statusEl.style.display = 'block';
}

function getData() {
  return {
    name: formEl.elements.name.value,
    email: formEl.elements.email.value,
    message: formEl.elements.message.value
  };
}

let timer;
function saveDebounced() {
  clearTimeout(timer);
  timer = setTimeout(save, 500);
}

function save() {
  
}

form.addEventListener('input', () => {
  
});

form.addEventListener('submit', (e) => {
  
});

document.getElementById('clear').addEventListener('click', () => {
  
});

// TODO: Восстановление при загрузке