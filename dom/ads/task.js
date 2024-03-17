class AdRotator {
    constructor() {
      this.rotatorElements = document.querySelectorAll('.rotator__case');
      this.currentIndex = 0;
      this.startRotation();
    }
  
    startRotation() {
      this.intervalId = setInterval(() => {
        this.rotate();
      }, 1000); // Меняем текст каждую секунду
    }
  
    rotate() {
      const currentElement = this.rotatorElements[this.currentIndex];
      currentElement.classList.remove('rotator__case_active');
  
      this.currentIndex++;
      if (this.currentIndex >= this.rotatorElements.length) {
        this.currentIndex = 0; // Возвращаемся к первому элементу после прохождения всех
      }
  
      const nextElement = this.rotatorElements[this.currentIndex];
      nextElement.classList.add('rotator__case_active');
    }
  }
  
  new AdRotator();
  