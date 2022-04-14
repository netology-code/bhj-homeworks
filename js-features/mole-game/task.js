const rigthOnTarget = document.getElementById('dead');
const missAttack = document.getElementById('lost');

function game() {
    for (let index = 1; index <= 9; index++) {
        const getHole = document.getElementById(`hole${index}`);
        getHole.onclick = function () {
            if (getHole.classList.contains('hole_has-mole')) {
                rigthOnTarget.innerHTML++;
                checkGameStatus()
            } else {
                if (getHole.classList.contains('hole')) {
                    missAttack.innerHTML++;
                    checkGameStatus();
                }
            }

            function checkGameStatus() {
                if (rigthOnTarget.innerHTML === '10') {
                    alert('You win!');
                    rigthOnTarget.innerHTML = 0;
                    missAttack.innerHTML = 0;
                }
                if (missAttack.innerHTML === '5') {
                    alert('You lost!');
                    rigthOnTarget.innerHTML = 0;
                    missAttack.innerHTML = 0;
                }
            }
        }
    }
}
game();