let links = document.querySelectorAll('.menu__link') ;
  for (i = 0;i < links.length; i++) {
    if (i = 1) {
      let about = links[i];
  };
   if(i = 2) {
    let service = links[i];
   };
};
function eventAbout () {
  about.setAttribute("class", "menu menu_sub menu_active");
  links[2].setAttribute("class","menu menu_sub");
};
about.addEventListenet(click,eventAbout);
function eventServices () {
  service.setAttribute("class","menu menu_sub menu_active");
  links[1].setAttribute("class","menu menu_sub");
};
