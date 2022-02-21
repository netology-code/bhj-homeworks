const a = document.querySelectorAll('a');
const div = document.querySelectorAll('div');

for(elem of a) {
    elem.addEventListener(click, function() {
        elem.classList.add('font-size_active');
        for(book of div) {
            if(book.classList.contains('book_fs-big')) {
                book.classList.add('big');
            }
            else if(book.classList.contains('book_fs-small')) {
                book.classList.add('small');
            }
        }
    });
}

console.log(a.dataset.book_color-gray);

// book_color-gray
//book_color-whitesmoke
//book_color-black

//book_bg-gray
//book_bg-black
//book_bg-white