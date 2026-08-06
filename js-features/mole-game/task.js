(() => {
    let playing = true,
        deadCount = 0,
        lostCount = 0,
        activeHole = 1;
    
    const deadCounter = document.getElementById('dead');
    const lostCounter = document.getElementById('lost');
    const status = document.getElementById('status');
    
    const stop = () => {
        playing = false;
        alert("Игра окончена!");
        resetGame();
    };
    
    const getHole = index => document.getElementById('hole${index}');
    const deactivateHole = index => getHole(index).className = 'hole';
    const activateHole = index => getHole(index).className = 'hole hole_has-mole';
    
    const next = () => setTimeout(() => {
        if (!playing) {
            return;
        }
        deactivateHole(activateHole);
        activeHole = Math.floor(1 + Math.random() * 9);
        activateHole(activeHole);
        next();
    }, 800);
    
    const resetGame = () => {
        deadCount = 0;
        lostCount = 0;
        deadCounter.textContent = deadCount;
        lostCounter.textContent = lostCount;
        playing = true;
        next();
    };(() => {
        let playing = true,
            deadCount = 0,
            lostCount = 0,
            activeHole = 1;
    
        const deadCounter = document.getElementById('dead');
        const lostCounter = document.getElementById('lost');
        const status = document.getElementById('status');
    
        const stop = () => {
            playing = false;
            alert("Игра окончена!");
            resetGame();
        };
    
        const getHole = index => document.getElementById(`hole${index}`);
        const deactivateHole = index => getHole(index).className = 'hole';
        const activateHole = index => getHole(index).className = 'hole hole_has-mole';
    
        const next = () => setTimeout(() => {
            if (!playing) {
                return;
            }
            deactivateHole(activeHole);
            activeHole = Math.floor(1 + Math.random() * 9);
            activateHole(activeHole);
            next();
        }, 800);
    
        const resetGame = () => {
            deadCount = 0;
            lostCount = 0;
            deadCounter.textContent = deadCount;
            lostCounter.textContent = lostCount;
            playing = true;
            next();
        };
    
        for (let i = 1; i <= 9; i++) {
            getHole(i).onclick = function() {
                if (this.className.includes('hole_has-mole')) {
                    deadCount++;
                    deadCounter.textContent = deadCount;
    
                    if (deadCount === 10) {
                        alert("Поздравляем! Вы убили 10 кротов и выиграли!");
                        stop();
                    }
                } else {
                    lostCount++;
                    lostCounter.textContent = lostCount;
    
                    if (lostCount === 5) {
                        alert("Вы промахнулись 5 раз. Игра окончена!");
                        stop();
                    }
                }
                deactivateHole(activeHole);
                activeHole = Math.floor(1 + Math.random() * 9);
                activateHole(activeHole);
            };
        }
        next();
    })();
    
    
    for (let i = 1; i <= 9; i++) {
        getHole(i).onclick = function() {
            if (this.className.includes('hole_has-mole')) {
                deadCount++;
                deadCounter.textContent = deadCount;
    
                if (deadCount === 10) {
                    alert("Поздравляем! Вы убили 10 кротов и выиграли!");
                    stop();
                }
            } else {
                lostCount++;
                lostCounter.textContent = lostCount;
    
              if (lostCount === 5) {
                alert("Вы промахнулись 5 раз. Игра окончена!");
                stop();
              }
            }
            deactivateHole(activeHole);
            activeHole = Math.floor(1 + Math.random() * 9);
            activateHole(activeHole);
        };
    }
    next();
    })();