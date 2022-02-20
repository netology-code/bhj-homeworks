const clicker__counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
let clicker_timer = Number(clicker__counter.textContent);

const clicker__velocity = document.getElementsByClassName('clicker__velocity');
let time_1 = Number(new Date());
let velocity = Number(clicker__velocity.textContent);
let interval = 0;
cookie.onclick = function() {
    clicker_timer++;
    if(clicker_timer % 2 === 0) {
        cookie.width += 100;
    }
    else if(clicker_timer % 2 !== 0) {
        cookie.width -= 100;
    }
    let time_2 = Number(new Date());
    interval = time_2 - time_1;
    velocity = interval/clicker_timer;
}



