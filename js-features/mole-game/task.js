let score = 0;
let fails = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function startGame() {
    score = 0;
    fails = 0;

    for (let i = 1; i <= 9; i++) {
        getHole(i).addEventListener('click', onHoleClick);
    }

    setInterval(showMole, 1000);
}

function onHoleClick(event) {
    if (event.target.classList.contains('hole_has-mole')) {
        score++;
        console.log('Победа! Счет: ' + score);

        if (score === 10) {
            console.log('Вы выиграли!');
            endGame();
        }
    } else {
        fails++;
        console.log('Поражение! Попыток: ' + fails);

        if (fails === 5) {
            console.log('Игра завершена. Вы проиграли.');
            endGame();
        }
    }
}

function showMole() {
    for (let i = 1; i <= 9; i++) {
        getHole(i).classList.remove('hole_has-mole');
    }

    const randomIndex = Math.floor(Math.random() * 9) + 1;
    getHole(randomIndex).classList.add('hole_has-mole');
}

function endGame() {
    for (let i = 1; i <= 9; i++) {
        getHole(i).removeEventListener('click', onHoleClick);
    }

    score = 0;
    fails = 0;
}

window.onload = startGame;
