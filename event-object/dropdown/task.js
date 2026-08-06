document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const listElement = dropdown.querySelector('.dropdown__list');

        valueElement.addEventListener('click', function() {
            listElement.classList.toggle('dropdown__list_active');
        });

        const items = listElement.querySelectorAll('.dropdown__item');
        items.forEach(function(item) {
            item.addEventListener('click', function(event) {
                event.preventDefault(); // Предотвращаем переход по ссылке

                const newValue = item.querySelector('.dropdown__link').textContent;
                valueElement.textContent = newValue;
                listElement.classList.remove('dropdown__list_active');
            });
        });
    });
});
