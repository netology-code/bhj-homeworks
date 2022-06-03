let drop = document.querySelector('.dropdown');
let dropList = document.querySelector('.dropdown__list');
let dropItem = Array.from(document.querySelectorAll('.dropdown__item'))
let value = document.querySelector('.dropdown__value')

drop.addEventListener('click', function () {
    dropList.classList.toggle('dropdown__list_active');
});

dropItem.forEach(item => item.addEventListener('click', function (event) {
    event.preventDefault(); // discuss
    value.textContent = item.textContent;
}));