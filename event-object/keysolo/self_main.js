const wordList = new Array('мама', 'Мыла', 'раму', 'Красный', 'машина', 'Cat', 'dog', 'goverment', 'kitty', 'Коля');
let timer = document.getElementById('timer');
let statusLoss = document.querySelector('.status__loss');
let statusWins = document.querySelector('.status__wins');
let word = document.querySelector('.word');
let countingInterval;
let keyCounter = 0;
let startGame = document.querySelector('.startGame');

startGame.addEventListener('click', function(){
    word.removeChild(word.firstChild);
    changeWord();
})

document.addEventListener('keydown', function(event) {
    let symbol = document.querySelectorAll('.symbol');
    if (event.ctrlKey || event.shiftKey || event.altKey || event.metaKey){
        return;
    } else {
        if (event.key.toLowerCase() == symbol[keyCounter].innerText.toLowerCase()) {
            symbol[keyCounter].classList.add('symbol_correct');
            keyCounter++;
            if (symbol[symbol.length] == symbol[keyCounter]){
                statusWins.innerText = Number(statusWins.innerText) + 1;
            }
        } else {
            symbol[keyCounter].classList.add('word_incorrect')
            statusLoss.innerText = Number(statusLoss.innerText) + 1;
            keyCounter = 0;
            setTimeout(()=>changeWord(), 50);
        }
        if (keyCounter == symbol.length){
            keyCounter = 0;
            setTimeout(()=>changeWord(), 50);
        }
    }
});

function changeWord() {
    let wordCount = getRandomIntInclusive(1, 3);
    while (word.firstChild) {
        word.removeChild(word.firstChild);
    }
    for (let i = 0; i < wordCount; i++) {
        let randomWord = wordList[getRandomIntInclusive(0, wordList.length - 1)];
        let randomWordAsArray = Array.from(randomWord);
        randomWordAsArray.forEach(function(element) {
            let newSpan = document.createElement('span');
            newSpan.classList.add('symbol');
            newSpan.innerHTML = element;
            word.appendChild(newSpan);
        });
        if (i < wordCount - 1) {
            let spaceSpan = document.createElement('span');
            spaceSpan.classList.add('symbol');
            spaceSpan.innerHTML = ' ';
            word.appendChild(spaceSpan);
        }
        startTimer(word.innerText.length);
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function startTimer(wordsLenght) {
  let currentTime = wordsLenght;
  if (countingInterval) {
    clearInterval(countingInterval);
  }
  countingInterval = setInterval(() => {
    if (timer.textContent === '00') {
      clearInterval(countingInterval);
      alert('Игра окончена!' + '\nКоличество правлиьно введенных комбинайций слов: ' + statusWins.innerText + '\nКоличество неправильно введенных комбинайций слов: ' + statusLoss.innerText);
      location.reload();
    }
    const seconds = currentTime % 60;
    timer.textContent = String(seconds).padStart(2, "0");
    currentTime = +currentTime - 1;
  }, 1000);
}