const a = document.querySelectorAll('a');
const book = document.getElementById('book');

for(const elem of a) {
    elem.addEventListener('click', function() {
        elem.classList.add('font-size_active');
            if(book.classList.contains('book_fs-big')) {
                book.classList.add('big');
            }
            else if(book.classList.contains('book_fs-small')) {
                book.classList.add('small');
            }
        alert(elem.dataset.bookColorGray);
        alert(elem.dataset.bookWhitesmoke);
        alert(elem.dataset.bookColorBlack);
        alert(elem.dataset.bookBgGray);
        alert(elem.dataset.bookBgBlack);
        alert(elem.dataset.bookBgWhite);
        return false;
    });
}
