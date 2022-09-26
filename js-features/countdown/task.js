let timer = 59;
const countdownTimer = setInterval(() => {
    document.getElementById('timer').textContent = timer;
    timer--;
    if (timer < 0) {
        clearInterval(countdownTimer);
        alert('Вы победили в конкурсе!')
        document.getElementById('download').click();
    }
}, 1000)

const endTime = new Date('2022-09-20 18:30');
let timerId = null;
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

function countdownExtendedTimer() {
    const differTime = endTime - new Date();
    if (differTime <= 0) {
        clearInterval(timerId);
    }

    const countHours = differTime > 0 ? Math.floor(differTime / 1000 / 60 / 60) % 24 : 0;
    const countMinutes = differTime > 0 ? Math.floor(differTime / 1000 / 60) % 60 : 0;
    const countSeconds = differTime > 0 ? Math.floor(differTime / 1000) % 60 : 0;

    hours.textContent = countHours < 10 ? '0' + countHours : countHours;
    minutes.textContent = countMinutes < 10 ? '0' + countMinutes : countMinutes;
    seconds.textContent = countSeconds < 10 ? '0' + countSeconds : countSeconds;
}

countdownExtendedTimer();

timerId = setInterval(countdownExtendedTimer, 1000);