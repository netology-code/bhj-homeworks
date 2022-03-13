const a = document.querySelectorAll("a");
const book = document.getElementById("book");
const content = document.querySelector(".book__content");

for (const elem of a) {
    elem.addEventListener("click", function (event) {
        event.preventDefault();
        console.log(event.target);
        elem.classList.add("font-size_active");
        if (event.target.classList.contains("font-size_big")) {
            content.classList.add("book", "bookfs-big");
        } else if (event.target.classList.contains("font-size_small")) {
            content.classList.add("book_fs-small");
        }
        a[!a.indexOf(elem)].className = 'book';
        a[!a.indexOf(elem)].classList.remove('font-size_active');
    });
}