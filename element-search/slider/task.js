const slider__item = document.getElementsByClassName('slider__item');
const slider__arrow_prev = document.getElementsByClassName('slider__arrow_prev');
const slider__arrow_next = document.getElementsByClassName('slider__arrow_next');

for(let i = 0; i++; i < slider__item.length) { 
    if(i % 2 === 0) {
        slider__arrow_prev.onclick = function() {
        slider__item.item(i).className = 'slider__item_active';
        }
    }
    else if(i % 2 !== 0) {
        slider__arrow_next.onclick = function() {
            slider__item.item(i).className = 'slider__item_active';
        }
    }
    else if(i === slider__item.length - 1) {
        i === 0;
    }
}

