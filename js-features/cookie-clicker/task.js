const clicker__counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
clicker__counter.onclick = function() {
    clicker__counter.textContent += 1;
}
cookie.onclick = function() {
    cookie.width += 100;
    cookie.onclick = null;
}
cookie.onclick = function() {
    cookie.width += 100;
    cookie.onclick = null;
}
