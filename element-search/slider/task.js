const slider__item = document.getElementsByClassName('slider__item');
const slider__arrow = document.getElementsByClassName('slider__arrow');
const slider__arrow_prev = document.getElementsByClassName('slider__arrow_prev')[0];
const slider__arrow_next = document.getElementsByClassName('slider__arrow_next')[0];

let arr_item = Array.from(slider__item);
let arr_arrow = Array.from(slider__arrow);

let index_item = 0;
let item = arr_item[index_item];

slider__arrow_prev.addEventListener('click', function() {
    index_item = arr_item.findIndex(slide => slide.classList.contains('slider__item_active'));
    item.classList.remove('slider__item_active');
    if(item.previousElementSibling) {
        item.previousElementSibling.classList.add('slider__item_active');
    }
    else if(!item.previousElementSibling) {
        item[arr_item.length - 1].classList.add('slider__item_active');
    }
});
slider__arrow_next.addEventListener('click', function() {
    index_item = arr_item.findIndex(slide => slide.classList.contains('slider__item_active'));
    item.classList.remove('slider__item_active');
    if(item.nextElementSibling) {
        item.nextElementSibling.classList.add('slider__item_active');
    }
    else if(!item.nextElementSibling) {
        item[0].classList.add('slider__item_active');
    }
});
