const timer = document.getElementById('timer');
const url = document.createElement('a');
const count = Number(timer.textContent);

const output = function() {
    count--;
}

setInterval(output, 1000);

if(count === 0) {
    clearInterval(output);
    alert('Вы победили в конкурсе!');
};
