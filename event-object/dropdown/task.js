const dropdown__list = document.getElementsByClassName('dropdown__list');
const dropdown__item = document.getElementsByClassName('dropdown__item');
const dropdown__link = document.getElementsByClassName('dropdown__link');

const arr_item = Array.from(dropdown__item);
const arr_list = Array.from(dropdown__list);

for(let list of arr_list) {
    list.addEventListener(click, function() {
        list.classList.add('dropdown__list_active');
    })
}

for(item of arr_item) {
    item.addEventListener(click, function() {
        arr_list.find((elem) => elem.classList.contains('dropdown__list_active')).remove('dropdown__list_active');
        item.classList.add('dropdown__value');
    });
}

function preventDefault() {
    dropdown__link.preventDefault();
}
dropdown__link.addEventListener(click, preventDefault);
