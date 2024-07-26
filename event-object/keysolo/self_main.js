let key = document.querySelectorAll('.symbol')
const wordsArray = new Array('мама', 'мыла', 'раму', 'красный', 'машина', 'cat', 'dog', 'goverment', 'kitty');

document.addEventListener('keydown', function(event) {
    key.forEach(function(element){
        if (event.key == element.innerText){
            element.classList.add('symbol_correct')
        }
    })
  });