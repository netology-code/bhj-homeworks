// document.querySelector('.tab__navigation').addEventListener('click', (event) => {
//     console.log(event.target.className);
//     if (event.target.className === 'tab__navigation') return;

// })

const tabsList = Array.from(document.querySelectorAll('.tab'));
const contentList = Array.from(document.querySelectorAll('.tab__content'));
let tabActive = null;
let contentActive = null;
for (let i in tabsList) {
    if (tabsList[i].classList.contains('tab_active')) {
        tabActive = tabsList[i];
        contentActive = contentList[i];
    }
    tabsList[i].addEventListener('click', (event) => {
        if (event.target.className.includes('active')) return;
        tabActive.classList.remove('tab_active');
        tabActive = tabsList[i];
        tabsList[i].classList.add('tab_active');
        contentActive.classList.remove('tab__content_active');
        contentActive = contentList[i];
        contentList[i].classList.add('tab__content_active');
    })
}