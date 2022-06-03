const countClick = document.getElementById('clicker__counter');
const speedCount = document.getElementById('speed__counter');

let lastClickOnCookie = 0;
let arrSpeedClick = [];

const clickOnCookie = document.getElementById('cookie').onclick = function () {
    cookie.width = 200;
    if (countClick.innerHTML % 2 !== 0) {
        cookie.width = 250;
    }
    countClick.innerHTML++;
    //доп. задание
    let startClickOnCookie = new Date().getTime() / 1000;
    let difTime =  startClickOnCookie - lastClickOnCookie;
    let clickSpeed = 1 / difTime;
    arrSpeedClick.push(clickSpeed);
    speedCount.innerHTML = (arrSpeedClick.map(i=>x+=i, x=0).reverse()[0] / arrSpeedClick.length).toFixed(2);
    lastClickOnCookie = startClickOnCookie;
}