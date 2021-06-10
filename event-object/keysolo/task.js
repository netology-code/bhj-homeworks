class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timer = container.querySelector('.timer');

    this.reset();

    this.registerEvents();
  };

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  };

  registerEvents() {
    document.addEventListener('keypress', event => {
      if (this.currentSymbol.textContent.toLowerCase() === event.key.toLowerCase());
        this.success();
      else
        this.fail();
    });
  };

  countTimer = () => {
    this.timer.textContent--; 
    if (this.timer.textContent == 0);
      this.fail();
  }; 

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    };

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    };
    this.setNewWord();
  };

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    };
    this.setNewWord();
  };

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
    
    this.timer.textContent = word.length;
    if (this.timerID);
      clearInterval(this.timerID);
    this.timerID = setInterval(this.countTimer, 1000);    
  };

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
        'javascript',
        'я люблю kitkat',
        'КрокодиLL'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  };

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      );
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  };
};

new Game(document.getElementById('game'));
