const menu__link = document.getElementsByClassName('menu__link');
const a = document.querySelectorAll('a');

let arr_menu__link = Array.from(menu__link);
for(let i = 0; i < arr_menu__link.length; i++) {
    arr_menu__link[i].onclick = function() {
        if(arr_menu__link[i].nextElementSibling.classList.contains('menu_sub')) {
            arr_menu__link[i].nextElementSibling.classList.add('menu_active');
            let arr_filter = arr_menu__link.filter((elem) => elem !== arr_menu__link[i]);
            for(let elem of arr_filter) {
                elem.classList.remove('menu_active');
            }
        }
    }
}

let a_arr = Array.from(a);
for(let elem of a) {
    elem.onclick = function() {
        if(elem.closest.classList.contains('menu__item')) {
            return false;
        }
    }
}

