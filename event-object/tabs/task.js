const tab = document.querySelectorAll('.tab');
const tabArray = Array.from(tab);
const tabContent = document.querySelectorAll('.tab__content');
const tabContentArray = Array.from(tabContent);
const tabs = document.querySelector('.tabs');

tabs.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('tab')) {
        tabArray.forEach(tab => tab.classList.remove('tab_active'));
        tabContentArray.forEach(text => text.classList.remove('tab__content_active'));
        target.classList.add('tab_active');
    }
    for (let i = 0; i < tabArray.length; i++) {
        if (tabArray[i].classList.contains('tab_active')) {
            tabContentArray[i].classList.add('tab__content_active');
        }
    }
})
