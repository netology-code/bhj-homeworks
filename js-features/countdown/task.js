const timer = document.getElementById('timer');
const output = function() {
    timer += 1;
}
setInterval(output, 1000);
alert('Вы победили в конкурсе!');