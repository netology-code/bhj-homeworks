let timer = document.getElementById('timer');
let interval = setInterval(countTimer, 1000);

function countTimer() {
    if (Number(timer.textContent)) {
        timer.textContent = Number(timer.textContent) - 1;
    }
    else {
        clearInterval(interval);
        alert('Вы победили в конкурсе!');
    }
}