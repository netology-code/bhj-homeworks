const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker__speed");

let date = new Date();
let prevClick = 0;

function cookieClicked() {
    if (prevClick !== 0) {
        clickerSpeed.textContent = (1000 / (new Date() - prevClick)).toFixed(2);
    }
    clickerCounter.textContent = +clickerCounter.textContent + 1;
    cookie.width = 150;
    setTimeout(() => cookie.width = 200, 50);
    prevClick = new Date();
}
cookie.onclick = cookieClicked;