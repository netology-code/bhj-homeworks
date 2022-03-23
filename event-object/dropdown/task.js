const dropdown = document.querySelector('.dropdown');
const dropdown__list = document.querySelector('.dropdown__list');
const dropdown__item = document.getElementsByClassName('dropdown__item');
const dropdown__value = document.querySelector('.dropdown__value');

const arr_item = Array.from(dropdown__item);

dropdown.addEventListener('click', function() {
    dropdown__list.classList.add('dropdown__list_active');
});

if(dropdown__list.classList.contains('dropdown__list_active')) {
    for(const item of arr_item) {
        item.addEventListener('click', function(e) {
            dropdown__list.classList.remove('dropdown__list_active');
            dropdown__value.textContent === item.querySelector('.dropdown__link').textContent;
            e.preventDefault();
        })
    }
}
