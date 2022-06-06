const countdown = function() {
    const timer = document.getElementById("timer");
    if (timer.textContent > 0) {
        timer.textContent -= 1;
        return;
    }
    alert("Вы победили в конкурсе!");
    
    const locationDL = "demo.rar";
    location.href = locationDL;

    clearInterval(countTimer);
}
let countTimer = setInterval(countdown, 1000);