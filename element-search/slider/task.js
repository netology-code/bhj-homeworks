const slider__arrows = document.getElementsByClassName('slider__arrows');
const slider__item = document.getElementsByClassName('slider__item');

let arr_arrows = Array.from(slider__arrows);
let arr_item = Array.from(slider__item);

for(let arrow of slider__arrows) {
for(let item of arr_item) {
    arrow.firstChild.addEventListener('click', function() {
        item.classList.remove('slider__item_active');
        item.previousElementSibling.classList.add('slider__item_active');
        if(arr_item.indexOf(item) === 1) {
            item[arr_item.length - 1].classList.add('slider__item_active');
        }
    });
    arrow.lastChild.addEventListener('click', function() {
        item.classList.remove('slider__item_active');
        item.nextElementSibling.classList.add('slider__item_active');
        if(arr_item.indexOf(item) === arr_item.length - 1) {
            item[0].classList.add('slider__item_active');
        }
    });
}
}

