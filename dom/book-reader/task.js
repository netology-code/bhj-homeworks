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
