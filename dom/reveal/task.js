const revealElem = Array.from(document.querySelectorAll('.reveal'));

setInterval(() => {
    revealElem.forEach(elem => {
        if (elem.getBoundingClientRect().top < window.innerHeight) {
            elem.classList.add('reveal_active');
        }
        if (elem.getBoundingClientRect().bottom < 0) {
            elem.classList.remove('reveal_active');
        }
    })
}, 1000)


