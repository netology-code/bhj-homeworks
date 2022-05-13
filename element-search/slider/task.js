let sliderArrows = Array.from(document.querySelectorAll('.slider__arrow'));
let sliderItems = Array.from(document.querySelectorAll('.slider__item'));

function showSlide() {
    let index = sliderItems.findIndex(item => item.className.includes('slider__item_active'));
    let elementNext = sliderItems[0];
    sliderItems[index].classList.remove('slider__item_active');
    if (index < (sliderItems.length - 1)) {
        elementNext = sliderItems[index + 1];
        elementNext.classList.add('slider__item_active');
    } else {
        elementNext.classList.add('slider__item_active');
    }

};

sliderArrows.forEach(item => item.addEventListener('click', function (event) {
    showSlide();
}));