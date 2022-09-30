const sliderItem = document.querySelectorAll('.slider__item');
const sliderItemCollection = Array.from(sliderItem);
const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');
const dots = document.querySelectorAll('.slider__dot');
const dotsCollection = Array.from(dots);
let count = 0;


sliderArrowNext.addEventListener('click', () => {
    dotsCollection[count].classList.remove('slider__dot_active');
    count = (count + 1) % sliderItemCollection.length;
    dotsCollection[count].classList.add('slider__dot_active');
    active();
});
sliderArrowPrev.addEventListener('click', () => {
    dotsCollection[count].classList.remove('slider__dot_active');
    count = (count + sliderItemCollection.length - 1) % sliderItemCollection.length;
    dotsCollection[count].classList.add('slider__dot_active');
    active();
});
const active = () => {
    const slideActive = document.querySelector('.slider__item_active');
    if (slideActive) {
        slideActive.classList.remove('slider__item_active');
        sliderItemCollection[count].classList.add('slider__item_active');
      
    }
}


