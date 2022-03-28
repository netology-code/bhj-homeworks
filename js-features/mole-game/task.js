const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const holes = document.getElementsByClassName('hole');

let dead_count = 0;
let lost_count = 0;

for (const elem of Array.from(holes)) {
    elem.onclick = function() {
        if (elem.classList.contains('hole_has-mole')) {
            dead_count += 1;
            dead.textContent = dead_count;
            if (dead_count === 10) {
                alert('Победа!');
                reset();
            }
        } else {
            lost_count += 1;
            lost.textContent = lost_count;
            if (lost_count === 5) {
                alert('Поражение!');
                reset();
            }
        }
    }
}

function reset() {
    dead_count = 0;
    dead.textContent = 0;
    lost_count = 0;
    lost.textContent = 0;
}
