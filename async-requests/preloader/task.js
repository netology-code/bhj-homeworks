const items = document.getElementById('items');
const loader = document.getElementsByClassName('loader');
const item__code = document.getElementsByClassName('item__code');
const item__value = document.getElementsByClassName('item__value');
const xhr = new XMLHttpRequest();

let code_arr = Array.from(item__code);
let value_arr = Array.from(item__value);

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.addEventListener('readyStateChange', function() {

    if(xhr.readyState === xhr.OPENED) {
        items.children = xhr.responseText;
        for(let elem of code_arr) {
            elem.innerHTML = JSON.parse(xhr.responseText).responseText.Valute.AUD.CharCode;
            elem.innerHTML = JSON.parse(xhr.responseText).responseText.Valute.AZN.CharCode;
        }
    
        for(let elem of value_arr) {
            elem.innerHTML = JSON.parse(xhr.responseText).responseText.Valute.AUD.Value;
            elem.innerHTML = JSON.parse(xhr.responseText).responseText.Valute.AZN.Value;
        }
    }

    else if(xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');
    }

})
