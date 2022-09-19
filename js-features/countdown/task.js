let timer = 59;
const countdownTimer = setInterval(() => {
    document.getElementById('timer').textContent = timer;
    timer--;
    if (timer < 0) {
        clearInterval(countdownTimer);
        alert('Вы победили в конкурсе!')
    }
}, 1000)
