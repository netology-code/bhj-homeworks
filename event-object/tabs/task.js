'use strict';
let counter = 0;
	let tabActive = 0;
	let tabContentActive = 0;
	const menu = document.body.querySelectorAll(".tab");
	for (let i = 0; i < menu.length; i++) {
	    menu[i].addEventListener("click", function () {
	        this.classList.add("tab_active");
	        const content = document.body.querySelectorAll('.tab__content');
	        if (counter >= 1) {
	            tabActive.remove("tab_active");
	            tabContentActive.remove("tab__content_active");
	            if (counter > 3) {
	                counter = 0;
	                tabContentActive = 0;
	            };
	
	        };
	        content[i].classList.add('tab__content_active');
	        tabContentActive = content[i].classList;
	        tabActive = this.classList;
	        counter += 1;
	    });
	};

