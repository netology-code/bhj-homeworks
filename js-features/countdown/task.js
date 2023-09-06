const timer = document.querySelector("#timer");
let time = timer.innerHTML;

const timerInterval = setInterval(() => {
  if (time > 0) {
    timer.innerText = time--;
  } else {
    timer.innerText = 0;
    alert("Вы победили в конкурсе!");
    clearInterval(timerInterval);
  }
}, 1000);
