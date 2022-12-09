const font_size = document.querySelectorAll(".font-size");
const book = document.getElementById("book");
const content = document.querySelector(".book__content");
const book__control = document.querySelector(".book__control");
const font_size_arr = Array.from(font_size);

for (let font of font_size_arr) {
    font.addEventListener("click", function(event) {
        console.log(event.target);

        const index = font_size_arr.findIndex(link => link.classList.contains('font-size_active'));
        font_size_arr[index].classList.remove('font-size_active');

        font.classList.add("font-size_active");
        if (event.target.classList.contains("font-size_big")) {
            content.classList.add("book_fs-big");
            content.classList.remove("book_fs-small");
        } else if (event.target.classList.contains("font-size_small")) {
            content.classList.add("book_fs-small");
            content.classList.remove("book_fs-big");
        }
        else {
            content.classList.remove("book_fs-big");
            content.classList.remove("book_fs-small");
        }
        event.preventDefault();
    });
}
