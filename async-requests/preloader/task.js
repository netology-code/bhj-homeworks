const items = document.querySelector("#items");
const loader = document.querySelector(".loader");
const itemCode = document.querySelectorAll(".item__code");
const itemValue = document.querySelectorAll(".item__value");
const xhr = new XMLHttpRequest();
const newCurrency = document.createElement('div');

newCurrency.innerHTML = `<div class="item__code">USD</div>
     <div class="item__value">32</div>
     <div class="item__currency">руб.</div>`

let codeArr = Array.from(itemCode);
let valueArr = Array.from(itemValue);

xhr.open("GET", "https://netology-slow-rest.herokuapp.com");

xhr.addEventListener("readystatechange", function() {
    if (xhr.readyState === xhr.DONE) {
        const responseObject = JSON.parse(xhr.responseText);
        console.log(responseObject);

        const responseElemArr = Object.values(responseObject.response.Valute);
        console.log(responseElemArr);

        for (const elem of responseElemArr) {
            const currency = newCurrency.cloneNode(true);
            currency.classList.add('item');
            currency.querySelector('.item__code').textContent = elem.CharCode;
            currency.querySelector('.item__value').textContent = elem.Value;
            items.appendChild(currency);
        }

        loader.classList.remove('loader_active');
    }
});

xhr.send();
