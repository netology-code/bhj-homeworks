const p = document.getElementById('timer');
const interval = setInterval(() => {
    p.textContent = Number(p.textContent) - 1
    if (Number(timer.textContent) == 0){
        alert('Вы победили в конкурсе!');
        clearInterval(interval);
    }
}, 1000)