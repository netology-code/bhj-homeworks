const menu__link = document.getElements.ByClassName('menu__link');
menu__link.onclick = function() {
    menu__link.closest('ul').className = 'menu_active';
}

const menu_sub = document.getElements.ByClassName('menu_sub');
menu_sub.onclick = function() {
    return false;
}