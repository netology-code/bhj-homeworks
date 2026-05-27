const fontSizeSwitches = document.querySelectorAll('.font-size');
const book = document.querySelector('#book');

fontSizeSwitches.forEach(fontSizeSwitch => {
    fontSizeSwitch.addEventListener("click", (event) => {
        event.preventDefault();
        const currentFontSize = document.querySelector('.font-size_active');
        currentFontSize.classList.remove('font-size_active');
        event.target.classList.add('font-size_active');
        changeFont(event.target.dataset.size);
    })
});

function changeFont(fontSize) {
    book.className = `book ${fontSize ? `book_fs-${fontSize}` : ''}`;
}

