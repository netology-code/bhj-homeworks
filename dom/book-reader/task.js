let fontSize = Array.from(document.querySelectorAll('.font-size'));
let book = document.querySelector('#book');

fontSize.forEach(item => item.addEventListener('click', function (evt) {
        // evt.preventDefault(); // dis
        let index = fontSize.findIndex(item => item.className.includes('font-size_active'));
        fontSize[index].classList.remove('font-size_active');
        item.classList.add('font-size_active');
        book.classList.remove('book_fs-small');
        book.classList.remove('book_fs-big');
        if (item.classList.contains('font-size_small')) {
            book.classList.add('book_fs-small');
        }
        if (item.classList.contains('font-size_big')) {
            book.classList.add('book_fs-big');
        }
    }
));