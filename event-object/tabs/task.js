let tabs = Array.from(document.querySelectorAll(".tab"));
let contents = Array.from(document.querySelectorAll(".tab__content"));

//tabs.forEach((active) => {
  //active.addEventListener('click', (event) => {
    //if ( active.classList.contains(".tab_active")) {
      //active.classList.remove(".tab_active");
    //}else {
      //active.classList.add(".tab_active");
    //};
    //let indexOfCont = tabs.indexOf(active);
    //if (contents[indexOfCont].classList.contains(".tab__content_active")) {
      //contents[indexOfCont].classList.remove(".tab__content_active");
    //} else {
      //contents[indexOfCont].classList.add(".tab__content_active");
    //};
    //event.preventDefault();
  //});
//});

for (i=0; i<tabs.length; i++) {
  tabs[i].addEventListener('click', (event) => {
    //console.log(event.currentTarget.closest("tab_active"));
    event.currentTarget.classList.add("tab_active");
    console.log(event.currentTarget.classList);
    let indexCont = tabs.indexOf(event.currentTarget);
    console.log(indexCont);
    tabs[indexCont].classList.add("tab__content_active");
    console.log(tabs[indexCont].classList);
    event.preventDefault();
  });
}
