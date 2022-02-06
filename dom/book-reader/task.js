const font_size = document.getElementsByName('font-size');
const book = document.getElementsByName('book');

font_size.addEventListener(click, function() {
    font_size.className = 'font-size_active';

    if(book.classList.contains('book_fs-big')) {
        book.className = 'big';
    }
    else if(book.classList.contains('book_fs-small')) {
        book.className = 'small'
    }
});
