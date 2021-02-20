let time = document.getElementById("timer");
let count = function() {
  time.textContent -= 1;
};
setInterval(count,1000);
