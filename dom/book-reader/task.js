const fontSize = document.querySelectorAll('.font-size');
const fontSizeArray = Array.from(fontSize);

const color = document.querySelectorAll('.color');
const colorArray = Array.from(color);

fontSizeArray.forEach(el => el.addEventListener('click', function (e) {
    const fontSizeActive = document.querySelector('.font-size_active');
    fontSizeActive.classList.remove('font-size_active');
    const book = this.closest('.book');
    el.classList.add('font-size_active');
    book.classList.remove('book_fs-small');
    book.classList.remove('book_fs-big');

    if (el.dataset.size === 'small') {
        el.classList.add('font-size_active');
        book.classList.remove('book_fs-big');
        book.classList.add('book_fs-small');
    } if (el.dataset.size === 'big') {
        el.classList.add('font-size_active');
        book.classList.remove('book_fs-small');
        book.classList.add('book_fs-big');
    }
    e.preventDefault();
}))

colorArray.forEach(el => el.addEventListener('click', function(e) {
    if (el.dataset.textColor) {
        const textColor = document.querySelector('.color_active');
        textColor.classList.remove('color_active');
        const book = this.closest('.book');
        if (el.dataset.textColor === 'black') {
            el.classList.add('color_active');
            book.classList.remove('book_color-gray');
            book.classList.remove('book_color-whitesmoke');
            book.classList.add('book_color-black');
        } if (el.dataset.textColor === 'gray') {
            el.classList.add('color_active');
            book.classList.remove('book_color-black');
            book.classList.remove('book_color-whitesmoke');
            book.classList.add('book_color-gray');
        } if (el.dataset.textColor === 'whitesmoke') {
            el.classList.add('color_active');
            book.classList.remove('book_color-gray');
            book.classList.remove('book_color-black');
            book.classList.add('book_color-whitesmoke');
        }
        e.preventDefault();
    }

    if (el.dataset.bgColor) {
        const bgColor = document.querySelector('.color_active');
        bgColor.classList.remove('color_active');
        const book = this.closest('.book');
        if (el.dataset.bgColor === 'black') {
            el.classList.add('color_active');
            book.classList.remove('book_bg-gray');
            book.classList.remove('book_bg-white');
            book.classList.add('book_bg-black');
        } if (el.dataset.bgColor === 'white') {
            el.classList.add('color_active');
            book.classList.remove('book_bg-black');
            book.classList.remove('book_bg-gray');
            book.classList.add('book_bg-white');
        } if (el.dataset.bgColor === 'gray') {
            el.classList.add('color_active');
            book.classList.remove('book_bg-white');
            book.classList.remove('book_bg-black');
            book.classList.add('book_bg-gray')
        }
        e.preventDefault();
    }
}))
