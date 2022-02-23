const slider__item = document.getElementsByClassName('slider__item');
const slider__arrow_prev = document.getElementsByClassName('slider__arrow_prev');
const slider__arrow_next = document.getElementsByClassName('slider__arrow_next');
const slider__dot = document.getElementsByClassName('slider__dot');

let arr = Array.from(slider__item);
let slider_arr = Array.from(slider__dot);

for(let elem of arr) {
    let i = arr.findIndex(elem.classList.contains('slider__item_active'));
    slider__arrow_prev.onclick = function() {
        if(i === 0) {
            i === arr.length - 1;
        }
        arr[i].classList.remove('slider__item_active');
        arr[i-1].classList.add('slider__item_active');
    }
    slider__arrow_next.onclick = function() {
        if(i === arr.length - 1) {
            i === 0;
        }
        arr[i].classList.remove('slider__item_active');
        arr[i+1].classList.add('slider__item_active');
    }
}

    for (let slide of slider_arr) {
        let index = slider_arr.findIndex(slide.classList.contains('slider__dot_active'));

        let arr_not_active = slider_arr.filter((slider_not_active) => slider_not_active !== slide[index]);
        slide.onclick = function() {
            slide.classList.add('slider__dot_active');
            arr[index].classList.add('slider__item_active');
            arr_not_active.every((elem) => elem.classList.remove('slider__dot_active'));
        }
        let items_not_active = arr.filter((item_not_active) => item_not_active !== arr[index]);
        items_not_active.every((item) => item.classList.remove('slider__item_active'));
    }




