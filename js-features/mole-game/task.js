const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let holes = [];

getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i < 10; i++) {
    getHole(i).onclick = function () {
        if (getHole(i).classList.contains('hole_has-mole')) {
            dead.textContent = +dead.textContent + 1;
            return;
        } 
        lost.textContent = +lost.textContent + 1;
    };
}