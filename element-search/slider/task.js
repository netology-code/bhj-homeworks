let arrows = Array.from(document.querySelectorAll('.slider__arrow'));

arrows.forEach(item => item.addEventListener('click', function () {
    let sliderItems = Array.from(document.querySelectorAll('.slider__item'));
    let index = sliderItems.findIndex(element => element.classList.contains('slider__item_active'));
    let lastItem = sliderItems.length - 1;
    sliderItems[index].classList.remove('slider__item_active');
    if (item.classList.contains('slider__arrow_prev')) {
        sliderItems[index === 0 ? lastItem : [index - 1]].classList.add('slider__item_active');
    }
    if (item.classList.contains('slider__arrow_next')) {
        sliderItems[index === lastItem ? 0 : [index + 1]].classList.add('slider__item_active');
    }
}));