let holes = document.querySelectorAll(".hole");
let counterWin = document.getElementById("dead");
let counterLose =document.getElementById("lost");


console.log(holes);


for (i = 0 ; i < holes.length ; i++) {
  holes[i].onclick = function() {
    if(this.className.includes("hole_has-mole")) {
      counterWin.textContent = +counterWin.textContent + 1;
      if(counterWin.textContent == 10) {
        alert("Вы победили!");
      }
      }
    if(this.className.includes("hole_has-mole")!= true) {
      counterLose.textContent = +counterLose.textContent + 1;
      if(counterLose.text == 5) {
        alert("Вы проиграли!");
      }
    }
  };
};
