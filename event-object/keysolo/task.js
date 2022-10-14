class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.game = container.querySelector('#game')

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    const keyUp = (e) => {
      const currentSymbol = document.querySelector('.symbol_current');
      this.currentSymbol = currentSymbol;
      if (this.currentSymbol.textContent === e.key) {
        this.success();
        currentSymbol.classList.remove('symbol_current');
        if (currentSymbol.nextElementSibling === null) {
          return
        } else {
          currentSymbol.nextElementSibling.classList.add('symbol_current');
        }
      } else {
          this.fail();
      }
    }
    window.addEventListener('keyup', keyUp);
  }

  countdownTimer() {
    const symbol = document.querySelectorAll('.symbol');
    const symbolArray = Array.from(symbol); 
    let timer = symbolArray.length;
    const countdown = setInterval(() => {
      document.querySelector('.timer').textContent = timer;
      timer--;
      if (timer < 0 && (symbolArray.some(el => el.classList.contains('symbol_correct')) || symbolArray.every(el => !el.classList.contains('symbol_correct')))) {
        this.fail();
        clearInterval(countdown);
      } if (symbolArray.every(el => el.classList.contains('symbol_correct'))) {
        clearInterval(countdown);
      }
    }, 1000);
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
    this.countdownTimer();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
    // this.countdownTimer();
  }

  setNewWord() {
    const word = this.getWord();
    this.renderWord(word);
    this.countdownTimer();
  }

  getWord() {
    const words = [
      'bob',
      'awesome',
      'netology',
      'hello',
      'kitty',
      'rock',
      'youtube',
      'popcorn',
      'cinema',
      'love',
      'javascript'
    ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'));


