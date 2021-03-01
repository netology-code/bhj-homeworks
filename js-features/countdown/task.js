let time = document.getElementById("timer");
let count = function() {
  time.textContent -= 1;
  if (time.textContent == 0) {
    alert("Вы победили!")
    clearInterval(timerId);
  }
};
let timerId = setInterval(count,1000);
