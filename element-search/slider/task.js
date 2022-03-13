const slider__item = document.getElementsByClassName('slider__item');
const slider__arrow = document.getElementsByClassName('slider__arrow');
//const slider__arrow_prev = document.getElementsByClassName('slider__arrow_prev');
//const slider__arrow_next = document.getElementsByClassName('slider__arrow_next');

let arr_item = Array.from(slider__item);
let arr_arrow = Array.from(slider__arrow);

let index_item = arr_item.findIndex(slide => slide.classList.contains('slider__item_active'));
let item = arr_item[index_item];

let index_arrow_prev = slider__arrow.findIndex(arrow => arrow.classList.contains('slider__arrow_prev'));
let arrow_prev = slider__arrow[index_arrow_prev];

let index_arrow_next = slider__arrow.findIndex(arrow => arrow.classList.contains('slider__arrow_next'));
let arrow_next = slider__arrow[index_arrow_next];

arrow_prev.addEventListener('click', function() {
    item.classList.remove('slider__item_active');
    item.previousElementSibling.classList.add('slider__item_active');
    if(arr_item.indexOf(item) === 1) {
        item[arr_item.length - 1].classList.add('slider__item_active');
    }
});
arrow_next.addEventListener('click', function() {
    item.classList.remove('slider__item_active');
    item.nextElementSibling.classList.add('slider__item_active');
    if(arr_item.indexOf(item) === arr_item.length - 1) {
        item[0].classList.add('slider__item_active');
    }
});
