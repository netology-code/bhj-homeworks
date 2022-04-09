const reveals = document.getElementsByClassName('reveal');
const viewportHeight = window.innerHeight;

document.addEventListener('scroll', function() {
    for(const reveal of Array.from(reveals)) {
        let revealTop = reveal.getBoundingClientRect().top;
        let revealBottom = reveal.getBoundingClientRect().bottom;
        if ((revealTop > window.scrollX) && (revealBottom < (window.scrollX + window.innerHeight))) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    }
});
