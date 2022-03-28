const clicker__counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
const clicker__velocity = document.getElementById('clicker__velocity');
const time_1 = +new Date();
let clicker_timer = 0;

cookie.onclick = function() {
    clicker_timer++;
    clicker__counter.textContent = clicker_timer;
    
    if(clicker_timer % 2 === 0) {
        cookie.width += 100;
    }
    else {
        cookie.width -= 100;
    }

    const time_2 = +new Date();
    const interval = time_2 - time_1;
    const velocity = Math.round(interval/clicker_timer);
    clicker__velocity.textContent = velocity;
}



