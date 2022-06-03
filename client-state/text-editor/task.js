const editor = document.querySelector('#editor');
const text = localStorage.getItem('text');
if (text) {
    editor.value = text;
}

window.addEventListener('beforeunload', (evt) => {
    localStorage.setItem('text', editor.value);
});