const loader = document.querySelector('#loader');
const items = document.querySelector('#items');
const url = 'https://netology-slow-rest.herokuapp.com/';
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        loader.classList.remove('loader_active');
        const json = JSON.parse(xhr.response);
        const valutes = json.response["Valute"];
        for (let i in valutes) {
            createItem(valutes[i].CharCode, valutes[i].Value);
        };
    };
};

let createItem = function(code, value) {
    const item = document.createElement('div');
    item.classList.add('item');
    const itemCode = document.createElement('div');
    itemCode.classList.add('item__code');
    const itemValue = document.createElement('div');
    itemValue.classList.add('item__value');
    itemCode.textContent = code;
    itemValue.textContent = value;
    item.appendChild(itemCode);
    item.appendChild(itemValue);
    items.appendChild(item);
};