let score = 0;
let fails = 0;
let scoreDisplay = document.getElementById('score');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function startGame() {
    score = 0;
    fails = 0;
    scoreDisplay.textContent = score;

    for (let i = 1; i <= 9; i++) {
        getHole(i).addEventListener('click', onHoleClick);
    }

    setInterval(showMole, 1000);
}

function onHoleClick(event) {
    if (event.target.classList.contains('hole_has-mole')) {
        score++;
        scoreDisplay.textContent = score;

        if (score === 10) {
            alert('Вы выиграли!');
            endGame();
        }
    } else {
        fails++;

        if (fails === 5) {
            alert('Игра завершена. Вы проиграли.');
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
