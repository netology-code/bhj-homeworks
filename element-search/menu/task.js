const menu_sub = document.getElementsByClassName('menu_sub');
let arr_sub = Array.from(menu_sub);


for(let sub of arr_sub) {
    const link = sub.closest('li').querySelector('a');
    const openedSubMenu = arr_sub.find(elem => elem.classList.contains('menu_active'));
        link.onclick = function() {
            if(openedSubMenu) {
                openedSubMenu.classList.remove('menu_active');
                return false;
            }
            else if(openedSubMenu !== sub) {
                sub.classList.add('menu_active');
                return false;
            }
        }
}

