const dropdown__list = document.getElementsByClassName('dropdown__list');
const dropdown__item = document.getElementsByClassName('dropdown__item');
const dropdown__value = document.querySelector('.dropdown__value');

const arr_item = Array.from(dropdown__item);
const arr_list = Array.from(dropdown__list);
const arr_value = Array.from(dropdown__value);

for(let list of arr_list) {
    list.addEventListener('click', function() {
        list.classList.toggle('dropdown__list_active');
    });
    for(let item of arr_item) {
        item.addEventListener('click', function() {
            list.classList.remove('dropdown__list_active');
            dropdown__value.textContent = item.querySelector('a').textContent;
            item.preventDefault();
        });
    } 
}
