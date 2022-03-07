const timer = document.getElementById('timer');
const url = document.createElement('a');
const output = function() {
    const timerToString = timer.textContent -= 1;
    timerToString.toString({
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    if((timerToString.toString.hour === 0)&&(timerToString.toString.minute === 0)&&(timerToString.toString.second === 0)) {
        clearInterval(output);
        alert('Вы победили в конкурсе!');
        url.href = 'http://hello.kitty';
    };
    
}

setInterval(output, 1000);
