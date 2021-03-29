let slides = document.querySelectorAll(".slider__item");
let prev = document.querySelector(".slider__arrow_prev");
//let slidesArray = Array.from('slides');
let slidesLength = slides.length;
function sliderLeft() {
  let item = slidesLength - 1;
  let classNameSlide = slides[0].className;
  let classNameItem = slides[item].className;
  if (classNameSlide.includes('slider__item slider__item_active')) {
     classNameItem = "slider__item slider__item_active";
     classNameSlide = "slider__item";
  }
  else (classNameItem.includes('slider__item slider__item_active')) {
    classNameItem = "slider__item";
    item = item - 1;
    classNameItem = "slider__item slider__item_active";
  }
};

prev.onclick(sliderLeft);
