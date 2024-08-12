const killMole = document.getElementById(`dead`);
const missClick = document.getElementById(`lost`);
let killed = parseInt(killMole.textContent);
let missed = parseInt(missClick.textContent);
let getHole = index => document.getElementById(`hole${index}`);


for (let i = 1; i <= 9; i++) {
  getHole(i).onclick = function() {
    if (this.className.includes(`hole_has-mole`)) {
      killed += 1;
      killMole.textContent = killed;
    } else {
      missed += 1;
      missClick.textContent = missed;
    }
    checkWinner();
  }
}

function checkWinner() {
  if (killed === 10) {
    alert(`Ты выиграл`);
    clearScore();
  } else if (missed === 5) {
    alert(`Ты проиграл`);
    clearScore();
  }
}

function clearScore() {
  killMole.textContent = 0;
  killed = 0;
  missClick.textContent = 0;
  missed = 0;
}