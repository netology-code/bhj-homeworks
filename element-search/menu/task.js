const menuItem = document.querySelectorAll('.menu__item');
const menuItemArray = Array.from(menuItem);

const menuLink = document.querySelectorAll('.menu__link');
const menuLinkArray = Array.from(menuLink);

menuLinkArray.forEach(link => link.addEventListener('click', function(event) {
    const parent = this.closest('.menu_main');
    const menuSub = parent.querySelectorAll('.menu_sub');
    const menuSubArray = Array.from(menuSub);
    for (let i = 0; i < menuSubArray.length; i++) {
        if (this.nextElementSibling === menuSubArray[i]) {
            menuSubArray[i].classList.toggle('menu_active');
            event.preventDefault();
        } else {
            menuSubArray[i].classList.remove('menu_active');
        }
    }
}))



