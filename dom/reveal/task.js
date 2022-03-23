const reveal = document.querySelector('.reveal');
const viewportHeight = window.innerHeight;

const revealTop = reveal.getBoundingClientRect().top;
const revealBottom = reveal.getBoundingClientRect().bottom;

document.addEventListener('scroll', function() {
    if((revealTop < viewportHeight)&&(revealBottom > viewportHeight)) {            
        reveal.classList.add('reveal_active');
    }
});

