document.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;

        if (revealTop < windowHeight && revealTop >= 0) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    });
});
