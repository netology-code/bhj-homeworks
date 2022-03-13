const menu_sub = document.getElementsByClassName('menu_sub');
let arr_sub = Array.from(menu_sub);


for(let sub of arr_sub) {
    const link = sub.closest('li').querySelector('a');
        link.onclick = function() {
            if(sub.classList.contains('menu_active')) {
                sub.classList.remove('menu_active');
                return false;
            }
            else if(arr_sub.some(elem => elem.classList.contains('menu_active'))) {
                arr_sub[findIndex(elem => elem.classList.contains('menu_active'))].remove('menu_active');
                return false;
            }
            else {
                sub.classList.add('menu_active');
                return false;
            }
        }
}

