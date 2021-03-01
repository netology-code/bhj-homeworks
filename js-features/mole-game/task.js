let holes = document.querySelectorAll(".hole");
let counterWin = document.getElementById("dead");
let counterLose =document.getElementById("lost");

console.log(holes);


for (i = 1 ; i < holes.length ; i++) {
  let classNameHole = holes[i].className;
  holes[i].onclick = function() {
    if(classNameHole.includes("hole_has-mole")) {
      counterWin.textContent + 1;
      if(counterWin.textContent = 10) {
        alert("Вы победили!");
      }
      }
    if(classNameHole.includes("hole_has-mole")!= true) {
      counterLose.textContent + 1;
      if(counterLose.textContent = 5) {
        alert("Вы проиграли!");
      }
    }
  };
};
