class BookReader {
  constructor(container) {
    this.container = container;
    this.fontSizes = [...container.querySelectorAll('.font-size')];
    this.book = container.querySelector('.book');
    
    this.registerEvents();
  }

  registerEvents() {
    this.fontSizes.forEach(fontSize => {
      fontSize.addEventListener('click', (event) => {
        event.preventDefault();

        const size = fontSize.dataset.size;

        if (size) { // Проверяем наличие атрибута data-size
          this.clearActiveClasses(this.fontSizes, 'font-size_active');
          fontSize.classList.add('font-size_active');

          if (size === 'small') {
            this.book.className = 'book book_fs-small';
          } else if (size === 'big') {
            this.book.className = 'book book_fs-big';
          } else {
            this.book.className = 'book';
          }
        }
      });
    });
  }

  clearActiveClasses(elements, className) {
    elements.forEach(element => {
      element.classList.remove(className);
    });
  }
}

new BookReader(document.querySelector('#book'));

