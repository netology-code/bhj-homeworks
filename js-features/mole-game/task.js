const lost = document.getElementById("lost");
let time = 1000;
let place = 1;
let counterDead = 0;
let counterLost = 0;

getHole = (index) => document.getElementById(`hole${index}`);
for (holeIndex = 1; holeIndex < 10; holeIndex++) {
  let hole = getHole(holeIndex);

  hole.addEventListener("click", function () {
    if (hole.classList.contains("hole_has-mole")) {
      counterDead++;
      dead.textContent = counterDead;
    } else {
      counterLost++;
      lost.textContent = counterLost;
    }

    if (counterDead == 10) {
      alert("Вы победили!");
      counterDead = 0;
      counterLost = 0;
      dead.textContent = counterDead;
      lost.innerHTML = counterLost;
    } else if (counterLost == 5) {
      alert("Вы проиграли!");
      counterLost = 0;
      counterDead = 0;
      dead.textContent = counterDead;
      lost.innerHTML = counterLost;
    }
  });
}
