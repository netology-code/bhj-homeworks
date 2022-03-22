const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const hole = document.getElementsByClassName('hole');

const dead_count = 0;
const lost_count = 0;

const arr_hole = Array.from(hole);
for(const elem of arr_hole) {
    elem.onclick = function() {
        if(elem.classList.contains('hole_has-mole')) {
            dead_count += 1;
            Number(dead.textContent) === dead_count;
            if(dead_count === 10) {
                alert('Победа!');
            }
        }
        else if(!elem.classList.contains('hole_has-mole')) {
                lost_count += 1;
                Number(lost.textContent) === lost_count;
                if(lost_count === 5) {
                alert('Поражение!');
            }
            }

    }
    }
