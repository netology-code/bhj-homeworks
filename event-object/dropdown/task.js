
  let dropdownValue = document.querySelector(".dropdown__value");
  let dropdownList = document.querySelector(".dropdown__list");
  let dropdownLinks = Array.from(document.querySelectorAll(".dropdown__link"));
  let dropdownItems = Array.from(document.querySelectorAll(".dropdown__item"));

function dropdown () {
  dropdownList.classList.add('dropdown__list_active');
  console.log(dropdownList.classList);
};
  dropdownValue.addEventListener('click', dropdown);


    dropdownItems.forEach ((item) => {

      item.addEventListener('click',  (event) => {
      event.preventDefault();
      console.log(event.currentTarget.textContent);
      dropdownValue.textContent = event.currentTarget.textContent;
      dropdownList.classList.remove('dropdown__list_active');
    });
  });

//альтернативный вариант
// for (i = 0; i < dropdownItems.length ; i++) {
//dropdownItems[i].addEventListener('click', (event) => {
  //event.preventDefault();
  //dropdownValue.textContent = event.currentTarget.textContent;
  //dropdownList.classList.remove('dropdown__list_active');
//});
//};
