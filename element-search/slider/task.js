const sliderItem = document.querySelectorAll('.slider__item');
const sliderItemCollection = Array.from(sliderItem);
const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');
const dots = document.querySelectorAll('.slider__dot');
const dotsCollection = Array.from(dots);

function slider(n) {
    let activeSlideIndex = sliderItemCollection.findIndex(slide => slide.classList.contains('slider__item_active'));
    const dotActive = dotsCollection[activeSlideIndex].classList.add('slider__dot_active');
    let activeDotIndex = dotsCollection.findIndex(dot => dot.classList.contains('slider__dot_active'));

    sliderItemCollection[activeSlideIndex].classList.remove('slider__item_active');
    dotsCollection[activeDotIndex].classList.remove('slider__dot_active');

    let num = n;
    if (num > sliderItemCollection.length - 1) {
        num = 0;
    } if (num < 0) {
        num = sliderItemCollection.length - 1;
    }
    sliderItemCollection[num].classList.add('slider__item_active');
    dotsCollection[num].classList.add('slider__dot_active');
}

sliderArrowNext.addEventListener('click', () => {
    let sliderNumNext = sliderItemCollection.findIndex(slide => slide.classList.contains('slider__item_active'))
    slider(sliderNumNext += 1);
});
sliderArrowPrev.addEventListener('click', () => {
    let sliderNumPrev = sliderItemCollection.findIndex(slide => slide.classList.contains('slider__item_active'))
    slider(sliderNumPrev -= 1);
})
dotsCollection.forEach((dot, index) => dot.addEventListener('click', () => {
    slider(index);
}));
