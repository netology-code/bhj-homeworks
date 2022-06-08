const slides = Array.from(document.querySelectorAll('.slider__item'));
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const dots = Array.from(document.querySelectorAll('.slider__dot'));

//активируем точку с активным слайдом
for (let i in slides) {
    if (slides[i].classList.contains('slider__item_active')){
        dots[i].classList.add('slider__dot_active')
    }
}

function toggleImage() {
    let num = 1; //число для переключения слайдов
    if (this.classList.contains('slider__arrow_prev')) {
        num = slides.length - 1;
    }
    for (let i in slides) {
        if (slides[i].classList.contains('slider__item_active')){
            dots[i].classList.remove('slider__dot_active');
            slides[i].classList.remove('slider__item_active');
            let toggle = (+i + num) % slides.length;
            slides[toggle].classList.add('slider__item_active');
            dots[toggle].classList.add('slider__dot_active');
            break;
        }        
    }
}

function dotClicked() {
    for (let i in dots) {
        if (dots[i].classList.contains('slider__dot_active')) {
            dots[i].classList.remove('slider__dot_active');
            slides[i].classList.remove('slider__item_active');
        }
    }
    slides[dots.indexOf(this)].classList.add('slider__item_active');
    this.classList.add('slider__dot_active');
}

arrowPrev.onclick = toggleImage;
arrowNext.onclick = toggleImage;
dots.forEach(elem => elem.onclick = dotClicked);
