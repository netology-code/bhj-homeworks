const scoreClicks = document.getElementById(`clicker__counter`);
const cookie = document.getElementById(`cookie`);
let score = 0;

function touchCoocie() {
  score += 1;
  scoreClicks.textContent = score;
  cookie.width = 180;
  setTimeout(() => {cookie.width = 200;}, 50);
}

cookie.onclick = touchCoocie;