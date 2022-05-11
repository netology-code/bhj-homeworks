let content = Array.from(document.querySelectorAll('.tab__content'));
let tab = Array.from(document.querySelectorAll('.tab'));

tab.forEach((item, index) => {
    item.addEventListener('click', function () {
        tab.forEach(item => item.classList.remove('tab_active'));
        item.classList.add('tab_active');
        content.forEach(item => item.classList.remove('tab__content_active'));
        content[index].classList.add('tab__content_active');
    });
});