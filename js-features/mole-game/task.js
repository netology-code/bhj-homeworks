let score = 0;
let fails = 0;
let scoreDisplay = document.getElementById('score');
let failsDisplay = document.getElementById('fails'); // Переменная для отображения количества промахов

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function startGame() {
    score = 0;
    fails = 0;
    scoreDisplay.textContent = score;
    failsDisplay.textContent = fails; // Отображение количества промахов

    for (let i = 1; i <= 9; i++) {
        getHole(i).addEventListener('click', onHoleClick);
    }
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
        failsDisplay.textContent = fails; // Обновляем отображение количества промахов
        if (fails === 5) {
            alert('Игра завершена. Вы проиграли.');
            endGame();
        }
    }
}

function endGame() {
    for (let i = 1; i <= 9; i++) {
        getHole(i).removeEventListener('click', onHoleClick);
    }
}

window.onload = startGame;
