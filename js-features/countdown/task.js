let timer = document.getElementById('timer');
let count = 0;

function output() {
    count = Number(timer.textContent) - 1;
}

setInterval(output, 1000);

if(Number(timer.textContent) === 0) {
    clearInterval(output);
    alert('Вы победили в конкурсе!');
};
