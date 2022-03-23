const editor = document.getElementById('editor');

editor.addEventListener('input', function() {
    localStorage.setItem('editor_text', editor.textContent);
})

editor.value = localStorage.getItem('editor_text');
console.log(editor.value);