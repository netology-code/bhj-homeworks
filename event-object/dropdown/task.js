const dropdown = document.querySelector('.dropdown');
const dropdown__list = document.querySelector('.dropdown__list');
const dropdown__item = document.getElementsByClassName('dropdown__item');
const dropdown__value = document.querySelector('.dropdown__value');

dropdown.addEventListener('click', function() {
    dropdown__list.classList.toggle('dropdown__list_active');
    for(const item of Array.from(dropdown__item)) {
        item.addEventListener('click', function(e) {
            dropdown__value.textContent = item.querySelector('.dropdown__link').textContent;
            dropdown__list.classList.remove('dropdown__list_active');
            e.preventDefault();
        })
    }
});

