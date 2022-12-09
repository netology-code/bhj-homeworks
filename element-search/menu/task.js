const menu_sub = document.getElementsByClassName('menu_sub');
let arr_sub = Array.from(menu_sub);


for(let sub of arr_sub) {
    const link = sub.closest('li').querySelector('a');
        link.onclick = function() {
            const openedSubMenu = arr_sub.find(elem => elem.classList.contains('menu_active'));
            if(openedSubMenu && openedSubMenu !== sub) {
                openedSubMenu.classList.remove('menu_active');
            }
            sub.classList.toggle('menu_active');
            return false;
        }
}

