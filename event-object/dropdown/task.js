const dropdownLink = document.querySelectorAll('.dropdown__link');
const dropdownLinkArray = Array.from(dropdownLink);
const dropdownList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value');

dropdownValue.addEventListener('click', function(event) {
    if (dropdownValue.nextElementSibling === dropdownList) {
        dropdownList.classList.toggle('dropdown__list_active');
    }
})

dropdownLinkArray.forEach(link => link.addEventListener('click', function(event) {
    event.preventDefault();
    dropdownValue.textContent = this.textContent;
    dropdownList.classList.remove('dropdown__list_active');
}))
    