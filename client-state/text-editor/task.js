const editor = document.getElementById('editor');
localStorage.setItem('editor_text', editor.textContent);

const editor_text = localStorage.getItem('editor_text');
console.log(editor_text);