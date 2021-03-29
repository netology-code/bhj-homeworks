let links = document.querySelectorAll(".menu__link");
let menuSub = document.querySelectorAll(".menu_sub");
let menuClassNameSecond = menuSub[1].className;
let menuClassNameFirst = menuSub[0].className;
let firstLink = links[1];
let secondLink = links[2];

  function  menuFirst() {
  menuClassNameFirst = "menu menu_sub menu_active";

};
 function  menuSecond(){
  menuClassNameSecond = "menu menu_sub menu_active";

};



firstLink.addEventListener('click', menuFirst);
secondLink.addEventListener('click',menuSecond);
