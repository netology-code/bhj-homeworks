'use strict';

const value = document.getElementsByClassName('dropdown__value')[0];
const menu = document.getElementsByClassName('dropdown__list')[0];
const menuItems = document.getElementsByClassName('dropdown__link');

value.addEventListener('click', function() {
  menu.classList.toggle('dropdown__list_active');
})

for (let i = 0; i < menuItems.length; i++)
  menuItems[i].addEventListener('click', function(event) {
    event.preventDefault();
    menu.classList.remove('dropdown__list_active');
    value.textContent = this.textContent;
  })
