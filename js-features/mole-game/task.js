const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let index = Math.floor( 1 + Math.random() * 9 )
getHole = index => hole = document.getElementById('hole' + index);

    if(getHole(index).className.includes('hole_has-mole')) {
    getHole(index).onclick = function() {
    dead.textContent += 1;
    }
    getHole(!index).onclick = function() {
    lost.textContent += 1;
    }
    if(lost.textContent === 5) {
        alert('Поражение!');
    }
    else if(dead.textContent === 10) {
        alert('Победа!');
    }
}

}
