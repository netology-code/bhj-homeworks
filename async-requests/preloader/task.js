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

/*
const formData = new FormData();
for (const code of codeArr) {
    formData.append('code', 'code.textContent');
}
for (const value of valueArr) {
    formData.append('value', 'value.textContent');
}
xhr.send(formData);
*/

xhr.open("GET", "https://netology-slow-rest.herokuapp.com");

xhr.addEventListener("readystatechange", function() {
    if (xhr.readyState === xhr.DONE) {
        const responseObject = JSON.parse(xhr.responseText);
        console.log(responseObject);

        const responseElemArr = Object.values(responseObject.response.Valute);
        console.log(responseElemArr);
        const currency = newCurrency.cloneNode(true);
        items.appendChild(currency);
        currency.classList.add('item');
        currency.querySelector('.item__code').textContent = responseElemArr[2].CharCode;
        currency.querySelector('.item__value').textContent = responseElemArr[2].Value;
        for (let i = 0; i < responseElemArr.lengh - 1; i++) {
        }
        loader.classList.remove('loader_active');
    }
});

xhr.send();