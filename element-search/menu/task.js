let menuLink = Array.from(document.querySelectorAll('.menu__link'));
menuLink.forEach(item => item.addEventListener('click', function (event) {
        if ((item.parentElement.querySelectorAll('.menu_sub').length === 1)) {
            event.preventDefault();
            let menuSub = Array.from(item.parentElement.querySelectorAll('.menu_sub'));
            menuSub.forEach(sub => sub.classList.toggle('menu_active'));
        }
    }
));