let timer = document.getElementById('timer');
const intervalID = setInterval(output, 100);

function output() {
    const currentValue = Number(timer.textContent) - 1;
    timer.textContent = currentValue;

    if (currentValue === 0) {
        clearInterval(intervalID);
        alert('Вы победили в конкурсе!');
    }
}

