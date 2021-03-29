let holes = document.querySelectorAll(".hole");
let counterWin = document.getElementById("dead");
let counterLose =document.getElementById("lost");
let numberWin = counterWin.textContent;
let numberLose = counterLose.textContent;
let newNumberWin = parseInt(numberWin);
let newNumberLose = parseInt(numberLose);

console.log(holes);


for (i = 1 ; i < holes.length ; i++) {
  let classNameHole = holes[i].className;
  holes[i].onclick = function() {
    if(classNameHole.includes("hole_has-mole")) {
      newNumberWin = newNumberWin + 1;
      numberWin = newNumberWin;
      if(numberWin == 10) {
        alert("Вы победили!");
      }
      }
    if(classNameHole.includes("hole_has-mole")!= true) {
      newNumberLose = newNumberLose + 1;
      numberLose = newNumberLose;
      if(numberLose == 5) {
        alert("Вы проиграли!");
      }
    }
  };
};
