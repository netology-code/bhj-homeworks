const a = document.querySelectorAll("a");
const book = document.getElementById("book");
const content = document.querySelector(".book__content");

for (const elem of a) {
elem.addEventListener("click", function (event) {
event.preventDefault();
console.log(event.target); // можно посмотреть что там за элемент
elem.classList.add("font-size_active");
if (event.target.classList.contains("font-size_big")) {
content.classList.add("book", "bookfs-big");
} else if (event.target.classList.contains("font-size_small")) {
content.classList.add("book_fs-small");
}
else if(elem !== event.target) {
    content.className = 'book';
    elem.classList.remove('font-size_active');

}
});
}