class Game {
    constructor() {

        this.gameblock = document.getElementById("gameblock");
        this.wordField = document.getElementById("word");
        this.timeField = document.getElementById("time");
        this.successCount = document.getElementById("success");
        this.failCount = document.getElementById("fail");
        this.words = [
            "marshmallow", "javascript", "computer", "cookie",
            "love", "thought", "iridescent", "world", "huntress",
            "радость joy"
        ]
        this.timerId = null;

        this.init();

        this.registerEvent();
    }

    init() {
        this.setNewWord();
        this.successCount.textContent = 0;
        this.failCount.textContent = 0;
    }

    setNewWord() {
        let currentWord = this.getWord();
        this.setTimer(currentWord.length);
        this.renderWord(currentWord);
    }

    setTimer(time) {
        let timeMod = time * 2;
        this.timeField.textContent = timeMod;
        this.timerId = setInterval(() => {
           timeMod -= 1; 
           this.timeField.textContent = timeMod;
            
            if(timeMod === -1) {
                clearInterval(this.timerId);
                this.fail();
            }
        }, 1000)
    }

    getWord() {
        let index = Math.floor(Math.random() * this.words.length);
        return this.words[index];
    }

    renderWord(word) {
        for (let i in word) {
            let newSpan = document.createElement("span");
            newSpan.appendChild(document.createTextNode(word[i]));
            newSpan.classList.add('symbol');

            if (i == 0) {
                newSpan.classList.add('symbol_current');
                this.currentSymbol = newSpan;
            }

            this.wordField.appendChild(newSpan);
        }
        
    }

    registerEvent() {
        document.addEventListener("keydown", (event) => {

        if (!(event.code.toLowerCase().startsWith('key') || event.code.toLowerCase().startsWith('space'))) {
            return;
        }
            if (event.key.toLowerCase() === this.currentSymbol.textContent) {
                this.success();
                return;
            }
            this.fail();
        })
    }

    success() {
        this.currentSymbol.classList.add('symbol_correct');
        this.currentSymbol.classList.remove('symbol_current');
        this.currentSymbol = this.currentSymbol.nextElementSibling;
        if (this.currentSymbol !== null) {
            this.currentSymbol.classList.add('symbol_current');
            return;
        }
        this.clearWordField();
        clearInterval(this.timerId);
        if (++this.successCount.textContent == 5){
            alert("Вы победили!");
            this.init();
            return;   
        }
        this.setNewWord();
    }

    fail() {
        this.clearWordField();
        clearInterval(this.timerId);
        if (++this.failCount.textContent == 5) {
            alert("Вы проиграли");
            this.init();
            return;
        }
        this.setNewWord();
    }

    clearWordField() {
        while(this.wordField.firstChild){
            this.wordField.removeChild(this.wordField.firstChild);
        }
    }

}

let game = new Game();
