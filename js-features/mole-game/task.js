let lost = document.querySelector('#lost');
let dead = document.querySelector('#dead');
let holes = document.querySelectorAll('.hole')

holes.forEach(element => {

    element.addEventListener('click', function() {
        if (element.classList.contains('hole_has-mole')){
            dead.textContent = Number(dead.textContent) + 1;
        } else {
            lost.textContent = Number(lost.textContent) + 1;
        }

    })
    
});