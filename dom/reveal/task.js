const reveal = document.getElementsByClassName('reveal');
const viewportHeight = window.innerHeight;
const revealTop = reveal.getBoundingClientRect().top;
const revealBottom = reveal.getBoundingClientRect().bottom;

function isInViewport() {
    if((revealTop < viewportHeight)&&(revealBottom > viewportHeight)) {
        reveal.className = 'reveal_active';
    }
}
reveal.addEventListener(onscroll, isInViewport);