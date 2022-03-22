let timer = document.getElementById('timer');
let count = 0;

function output() {
    count = Number(timer.textContent) - 1;
    Number(timer.textContent) === count;
}


if(Number(timer.textContent) === 0) {
    clearInterval(output);
    alert('Вы победили в конкурсе!');
};

setInterval(output, 1000);
