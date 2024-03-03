class BookReader {
    constructor() {
      this.fontSizes = document.querySelectorAll('.font-size');
      this.book = document.getElementById('book');
      
      this.fontSizes.forEach(fontSize => {
        fontSize.addEventListener('click', (event) => {
          event.preventDefault();
          const size = fontSize.dataset.size;
          if (size) { //  атрибут data-size
            this.setFontSize(size);
          }
        });
      });
    }
  
    setFontSize(size) {
      this.fontSizes.forEach(fontSize => {
        fontSize.classList.remove('font-size_active');
      });
  
      const newSizeElement = document.querySelector(`.font-size_${size}`);
      if (newSizeElement) {
        newSizeElement.classList.add('font-size_active');
      }
  
      this.book.classList.remove('book_fs-small', 'book_fs-big');
      if (size === 'small') {
        this.book.classList.add('book_fs-small');
      } else if (size === 'big') {
        this.book.classList.add('book_fs-big');
      }
    }
  }
  
  new BookReader();
  
  