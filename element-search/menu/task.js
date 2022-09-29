const menuActive = event => {
    const menuSub = document.querySelectorAll('.menu_sub');
    const menuSubCollection = Array.from(menuSub);
    const target = event.target.nextElementSibling;
    target.classList.toggle('menu_active');
    event.preventDefault();

    menuSubCollection.forEach(menu => {
        if (menu !== target) {
            menu.classList.remove('menu_active');
        }
    })
  }
  const menuLink = document.querySelectorAll('.menu__link');
  const menuLinkCollection = Array.from(menuLink);
  menuLinkCollection.forEach(link => {
    link.addEventListener('click', menuActive);
  })


 