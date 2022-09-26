const clickCookie = document.getElementById('cookie');
let countClick = 0;
let timeFirstClick = Date.now();

clickCookie.onclick = function() {
    countClick++;
    if (countClick % 2 !== 0) {
        clickCookie.width = 250;
    } else {
        clickCookie.width = 200;
    }
    document.getElementById('clicker__counter').textContent = countClick;
    let timeNextClick = Date.now();
    const avgClick = 1/((timeNextClick - timeFirstClick)/1000);
    document.getElementById('clicker_speed').textContent = avgClick.toFixed(2);
    timeFirstClick = timeNextClick;
}
