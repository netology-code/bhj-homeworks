const dd = document.querySelector('.dropdown');

dd.addEventListener('click', (event) => {
    ddValue = event.target.className.split('__');
    if (!ddValue[1]) return;
    const ddList = document.querySelector('.dropdown__list');
    ddList.classList.add('dropdown__list_active');
    if (ddValue[1] === 'link') {
        document.querySelector('.dropdown__value').textContent = event.target.textContent;
        ddList.classList.remove('dropdown__list_active');
        event.preventDefault();
    }
})