const bookContent = document.querySelector('.book__content');
const fontSize = document.body.querySelectorAll("a.font-size");
let bookContentClass = 0;
for (let i = 0; i < fontSize.length; i++) {
    fontSize[i].addEventListener("click", function () {
        event.preventDefault();
        for (const botom of fontSize) {
            if (botom.className.includes('font-size_active')) {
                botom.classList.remove('font-size_active');
            }
        }
        this.classList.add('font-size_active');
        console.log(this)
        if (bookContent.className.includes(bookContentClass)) {
            bookContent.classList.remove(bookContentClass);
        }
        bookContentClass = this.classList[1];

        if (this.className.includes('font-size_small') || this.className.includes('font-size_big')) {
            bookContent.classList.add(this.classList[1])
        }
    })
}
const colorText = document.body.querySelectorAll(".book__control_color a.color");

for (let i = 0; i < colorText.length; i++) {
    colorText[i].addEventListener("click", function () {
        for (const botom of colorText) {
            if (botom.className.includes('color_active')) {
                botom.classList.remove('color_active');
            }
        }
        this.classList.add('color_active');
        if(this.hasAttribute('data-color')){
            bookContent.style.color = this.dataset.color;
        } else {
            bookContent.style.color = '';
        }  
    })
}
const colorBack = document.body.querySelectorAll(".book__control_background a.color");

for (let i = 0; i < colorBack.length; i++) {
    colorBack[i].addEventListener("click", function () {
        for (const botom of colorBack) {
            if (botom.className.includes('color_active')) {
                botom.classList.remove('color_active');
            }
        }
        this.classList.add('color_active');
        if(this.hasAttribute('data-color')){
            bookContent.style.background = this.dataset.color;
        } else {
            bookContent.style.background = '';
        }
    })
}