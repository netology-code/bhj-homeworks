let dropdown = document.querySlector('dropdown__value');

dropdown.onclick = function () {
  if (dropdown.classList.includes('dropdown__list_active')) {
    dropdown.classList.remove('dropdown__list_active')
  }
  else dropdown.classList.add('dropdown__list_active');
}
let array = arrayFrom(document.querySelectorAll('dropdown__link'));
array.forEach((element, i) => {
  array[i].onclick = function (event) {
    dropdown.textContent = array[i].textContent;
    preventDefault();
  }
});

//array.forEach((elemnt, i) => {
//array[i].onclick =>(event) {
  //if (event.target == array[i]) {
    //dropdown.textContent = array[i].textContent;
    //preventDefault();
  //}
//}

//});
