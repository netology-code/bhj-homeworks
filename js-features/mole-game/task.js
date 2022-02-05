for(let i = 1; i++; i < 10) {
    const hole = document.getElementById('hole' + i);
}

if(hole.className.includes( 'hole_has-mole' )) {
    const dead = document.getElementById('dead');
    dead.onclick = function() {
    dead += 1;
    }
    const lost = document.getElementById('lost');
    lost.onclick = function() {
    lost += 1;
    }
}