let sliderArrows = Array.from(document.querySelectorAll('.slider__arrow'));
let sliderItems = Array.from(document.querySelectorAll('.slider__item'));
let idx = 0;

function showSlide(index) {
    sliderItems.forEach(item => item.classList.remove('slider__item_active'));
    sliderItems[index].classList.add('slider__item_active');
};

sliderArrows.forEach(item => item.addEventListener('click', function (event) {
    if (item.classList.contains('slider__arrow_next')) {
        if (idx >= sliderItems.length - 1) {
            idx = 0;
        } else {
            idx++;
        }
    } else {
        if (idx <= 0) {
            idx = sliderItems.length - 1;
        } else {
            idx--;
        }
    }
    showSlide(idx);
}));

