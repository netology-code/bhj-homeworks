let holes = document.getElementsByClassName("hole");
let counterWin = document.getElementById("dead");
let counterLose =document.getElementById("lost");




for (i = 1 ; i < holes.lenght ; i++) {
  holes[i].onclick = function(e) {
    if(holes[i].className.includes("hole_has-mole")) {
      counterWin.textContent + 1;
      if(counterWin.textContent = 10) {
        alert("Вы победили!");
      }
      }
    else {
      counterLose.textContent + 1;
      if(counterLose.textContent = 5) {
        alert("Вы проиграли!");
      }
    }
  };
};
