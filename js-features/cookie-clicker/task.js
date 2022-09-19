const clickCookie = document.getElementById('cookie');
let countClick = 0;

clickCookie.onclick = function() {
    countClick++;
    if (countClick % 2 !== 0) {
        clickCookie.width = 250;
    } else {
        clickCookie.width = 200;
    }
    
    document.getElementById('clicker__counter').textContent = countClick;
}
