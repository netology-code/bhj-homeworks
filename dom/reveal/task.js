const reveal = document.getElementsByClassName('reveal');
const viewportHeight = window.innerHeight;

let reveal_arr = Array.from(reveal);

for(let elem of reveal_arr) { 
    const revealTop = elem.getBoundingClientRect().top;
    const revealBottom = elem.getBoundingClientRect().bottom;
    document.addEventListener('scroll', function() {
        if((revealTop < viewportHeight)&&(revealBottom > viewportHeight)) {
            elem.classList.add('reveal_active');
        }
    });
}
