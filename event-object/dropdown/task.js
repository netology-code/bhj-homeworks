const dropdown__list = document.getElementsByClassName('dropdown__list');
const dropdown__item = document.getElementsByClassName('dropdown__item');
const dropdown__link = document.getElementsByClassName('dropdown__link');
const dropdown__value = document.getElementsByClassName('dropdown__value');

const arr_item = Array.from(dropdown__item);
const arr_list = Array.from(dropdown__list);
const arr_link = Array.from(dropdown__link);
const arr_value = Array.from(dropdown__value);


for(let list of arr_list) {
    for(let link of arr_link) {
    link.addEventListener('click', function() {
        list.classList.toggle('dropdown__list_active');
        link.preventDefault();
        for(let value of arr_value) {
            value.textContent = link.textContent;

        }
    })
}
}
