const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let dead_count = Number(dead.textContent);
let lost_count = Number(lost.textContent);

let index = Math.floor( 1 + Math.random() * 9 )
let getHole = index => hole = document.getElementById('hole' + index);
let arr_getHole = Array.from(getHole(index));
for(let elem of arr_getHole) {
    elem.onclick = function() {
        if(elem.classList.contains('hole_has-mole')) {
            dead_count += 1;
            if(dead_count === 10) {
                alert('Победа!');
            }
        }
        else if(!elem.classList.contains('hole_has-mole')) {
                lost_count += 1;
                if(lost_count === 5) {
                alert('Поражение!');
            }
            }

    }
    }
