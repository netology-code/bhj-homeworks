const cookie = document.querySelector("#cookie");
const clickerCounter = document.querySelector("#clicker__counter");
let clicks = 0;

cookie.addEventListener("click", () => {
    clicks++;
    clickerCounter.innerText = clicks;
    cookie.style.width = `250px`
    setTimeout(() => {
        cookie.style.width = `200px`
    }, 100);   
})