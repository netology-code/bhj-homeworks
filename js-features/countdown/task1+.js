const countdown2 = function() {
    const timer2 = document.getElementById("timer2");
    const time = timer2.textContent.split(":");
    if (time[2] > 0) {
        time[2] = getSubtractedTime(time[2]);
    } else {
        if (time[1] > 0) {
            time[2] = 59;
            time[1] = getSubtractedTime(time[1]);
        } else {
            if (time[0] > 0) {
                time[2] = 59;
                time[1] = 59;
                time[0] = getSubtractedTime(time[0]);
            } else {
                alert("Вы победили в конкурсе!");
                clearInterval(countTimer2);
            }
        }
    }
    timer2.textContent = time.join(":");   
    
    function getSubtractedTime(time) {
        return (time <= 10) ? '0' + (time - 1) : (time - 1);
    }
}


let countTimer2 = setInterval(countdown2, 1000);