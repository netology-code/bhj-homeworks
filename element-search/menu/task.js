'use strict';

let menuLink = document.getElementsByClassName('menu__link');

for (let i = 0; i < menuLink.length; i++) {
	menuLink[i].onclick = () => checkMenu(i);
};

function checkMenu(i) {
	let parent = menuLink[i].parentElement.querySelector('ul');

	if (parent) {
		let parentActive = parent.className.includes('menu_active');
		change(menuLink[i]);

		if (parentActive) {
			parent.classList.remove('menu_active');
		} else {
			parent.classList.add('menu_active');
		}
	}
	
	return false;
}

function change(element) {
	let elementActive = element.closest('.menu_main').querySelector('.menu_active');

	if(elementActive) {
		elementActive.classList.remove('menu_active');
	}
}
