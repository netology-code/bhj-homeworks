class RevealOnScroll {
    constructor() {
      this.revealElements = document.querySelectorAll('.reveal');
      this.scrollHandler = this.handleScroll.bind(this);
  
      this.registerEvents();
      this.handleScroll(); // Вызываем метод handleScroll при инициализации, чтобы показать блоки, которые уже находятся в области видимости
    }
  
    registerEvents() {
      window.addEventListener('scroll', this.scrollHandler);
    }
  
    handleScroll() {
      this.revealElements.forEach(element => {
        if (this.isElementInViewport(element)) {
          element.classList.add('reveal_active');
        } else {
          element.classList.remove('reveal_active');
        }
      });
    }
  
    isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  }
  
  new RevealOnScroll();
  