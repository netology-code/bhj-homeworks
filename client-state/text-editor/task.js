let editor = document.getElementById('editor');
let resetBtn = document.getElementById('resetBtn');

window.addEventListener('load', function() {
    let text = localStorage.getItem('textEditor');
    editor.value = text;
});

window.addEventListener('beforeunload', function() {
    localStorage.setItem('textEditor', editor.value);
});

resetBtn.addEventListener('click', function() {
    editor.value = '';
    localStorage.setItem('textEditor', '');
});