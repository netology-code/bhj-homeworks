const reveal = document.querySelectorAll('.reveal');
const revealArray = Array.from(reveal);

window.addEventListener('scroll', () => {
    revealArray.forEach(elem => {
        const { top, bottom } = elem.getBoundingClientRect();
        if (bottom < 0) {
            elem.classList.remove('reveal_active');
        } if (top > window.innerHeight) {
            elem.classList.remove('reveal_active');
        } else {
            elem.classList.add('reveal_active');
        }
    })
})