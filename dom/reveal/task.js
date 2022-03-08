const reveal = document.getElementsByClassName('reveal');
const viewportHeight = window.innerHeight;
const revealTop = reveal.getBoundingClientRect().top;
const revealBottom = reveal.getBoundingClientRect().bottom;

let reveal_arr = Array.from(reveal);

for(let elem of reveal_arr) {
    elem.addEventListener('onscroll', function() {
        if((revealTop < viewportHeight)&&(revealBottom > viewportHeight)) {
            reveal.classList.add('reveal_active');
        }
    });
}
