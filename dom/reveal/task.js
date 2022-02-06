const reveal = document.getElementsByClassName('reveal');

const div = document.querySelector('div');

reveal.addEventListener(onscroll, function() {
    reveal.getBoundingClientRect();
});

const viewportHeight = window.innerHeight;
const revealTop = reveal.getBoundingClientRect().top;
const revealBottom = reveal.getBoundingClientRect().bottom;

function isInViewport() {
    if((revealTop < viewportHeight)&&(revealBottom > viewportHeight)) {
        reveal.className = 'reveal_active';
    }
}