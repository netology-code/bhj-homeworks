const book = document.querySelector('#book');
const fontButtons = Array.from(document.querySelector('.book__control_font-size').querySelectorAll('.font-size'));
const textColors = Array.from(document.querySelector('.book__control_color').querySelectorAll('.color'));
const bgColors = Array.from(document.querySelector('.book__control_background').querySelectorAll('.color'));
let fontCurrent = document.querySelector('.book__control_font-size').querySelector('.font-size_active');
let textCurrent = document.querySelector('.book__control_color').querySelector('.color_active');
let bgCurrent = document.querySelector('.book__control_background').querySelector('.color_active');

fontButtons.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        if (elem === fontCurrent) {
            event.preventDefault();
            return;
        }
        fontCurrent.classList.remove('font-size_active');
        let f = elem.className.split('_')[1];
        elem.classList.add('font-size_active');
        fontCurrent = elem;
        book.className = 'book';
        if (f) {
            book.classList.add(`book_fs-${f}`);
        }
    
        event.preventDefault();
    })
})

textColors.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        if (elem === textCurrent) {
            event.preventDefault();
            return;
        }
        textCurrent.classList.remove('color_active');
        elem.classList.add('color_active');
        textCurrent = elem;
        book.style.color = elem.dataset.textColor;
    
        event.preventDefault();
    })
})

bgColors.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        if (elem === bgCurrent) {
            event.preventDefault();
            return;
        }
        bgCurrent.classList.remove('color_active');
        elem.classList.add('color_active');
        bgCurrent = elem;
        book.style.backgroundColor = elem.dataset.bgColor;
    
        event.preventDefault();
    })
})