const tab = document.getElementsByClassName('tab');
const tab__content = document.getElementsByClassName('tab__content');

const tab_arr = Array.from(tab);
const content_arr = Array.from(tab__content);

for(const tab_elem of tab_arr) {
    tab_elem.addEventListener('click', function() {
        tab_elem.classList.add('tab_active');
        let index = tab_arr.indexOf(tab_elem);
        tab__content[index].classList.add('tab__content_active');
        for(const tab_active of tab_arr) {
            if(tab_active !== tab_elem) {
                tab_active.classList.remove('tab_active');
                let index_active = tab_arr.indexOf(tab_active);
                tab__content[index_active].classList.remove('tab__content_active');
            }
        }
    });
}


