const font_size = document.querySelectorAll(".font-size");

const book = document.getElementById("book");
const content = document.querySelector(".book__content");
const book__control = document.querySelector(".book__control");


const font_size_arr = Array.from(font_size);

for (font of font_size_arr) {
    font.addEventListener("click", function (event) {
        event.preventDefault();
        console.log(event.target);
        elem.classList.add("font-size_active");
        if (event.target.classList.contains("font-size_big")) {
            content.classList.add("book", "bookfs-big");
        } else if (event.target.classList.contains("font-size_small")) {
            content.classList.add("book_fs-small");
        }
        const index = font_size_arr.findIndex(link => link !== elem);
        font_size_arr[index].className = 'book';
        font_size_arr[index].classList.remove('font-size_active');
    });
}