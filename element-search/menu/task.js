const menuLinks = Array.from(document.getElementsByClassName('menu__link'));
let closestElem = undefined;

menuLinks.forEach(elem => elem.onclick = function () {
    if (closestElem !== undefined) {
        closestElem.classList.remove('menu_active');
    }
    closestElem = (elem.closest('li').querySelector('.menu_sub')) ? elem.closest('li').querySelector('.menu_sub') : undefined;
    if (closestElem) {
        closestElem.classList.add('menu_active');
        return false;
    }

});