const reveals = document.getElementsByClassName('reveal');
const viewportHeight = window.innerHeight;
let revealTop = 0;
let revealBottom = 0;

let reveals_arr = Array.from(reveals);

document.addEventListener('scroll', function() {
    for(let i = 0; i < reveals_arr.length - 1; i++) {
        revealTop = reveals_arr[i].getBoundingClientRect().top;
        revealBottom = reveals_arr[i].getBoundingClientRect().bottom;
        if ((revealTop < viewportHeight) && (revealBottom > viewportHeight)) {
            reveals_arr[i].classList.add('reveal_active');
        }
    }
});
