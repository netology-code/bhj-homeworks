let lost = document.querySelector('#lost');
let dead = document.querySelector('#dead');
let holes = document.querySelectorAll('.hole')

holes.forEach(element => {
    element.addEventListener('click', function() {
        if (element.classList.contains('hole_has-mole')){
            dead.textContent = Number(dead.textContent) + 1;
            element.classList.remove('hole_has-mole');
            if (dead.textContent == 10){
                alert("Победа!");
                restartGame();
            }    
        } else {
            lost.textContent = Number(lost.textContent) + 1;
            if (lost.textContent == 5){
                alert("Вы проиграли!");
                restartGame();
            }
        }
    })
});

function restartGame(){
    lost.textContent = 0;
    dead.textContent = 0;
}