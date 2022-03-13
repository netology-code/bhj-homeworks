const tab = document.getElementsByClassName('tab');
const tab__content = document.getElementsByClassName('tab__content');

const tab_arr = Array.from(tab);
const content_arr = Array.from(tab__content);

for(let tab_elem of tab_arr) {
    tab_elem.addEventListener('click', function() {
        tab_elem.classList.add('tab_active');
        let index = tab_arr.indexOf(tab_elem);
        tab__content[index].classList.add('tab__content_active');
    });
}


