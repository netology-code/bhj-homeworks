const dropdown__list = document.getElementsByClassName('dropdown__list');
const dropdown__item = document.getElementsByClassName('dropdown__item');
const dropdown__link = document.getElementsByClassName('dropdown__link');

const arr = Array.from(dropdown__item);

function dropdown__list_active() {
    dropdown__list.className = 'dropdown__list_active';
}
dropdown__list.addEventListener(keypress, dropdown__list_active);
dropdown__list.removeEventListener(keypress, dropdown__list_active);

function dropdown__value() {
    dropdown__item.item(indexOf(arr).className = 'dropdown__value';
}
dropdown__item.addEventListener(keypress, dropdown__value);

function preventDefault() {
    dropdown__link.preventDefault();
}
dropdown__link.addEventListener(click, preventDefault);
