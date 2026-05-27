class Tabs {
    constructor(tabsContainer) {
      this.tabsContainer = tabsContainer;
      this.tabs = tabsContainer.querySelectorAll('.tab');
      this.contents = tabsContainer.querySelectorAll('.tab__content');
  
      this.registerEvents();
    }
  
    registerEvents() {
      this.tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => this.switchTab(index));
      });
    }
  
    switchTab(index) {
      this.tabs.forEach((tab, i) => {
        tab.classList.toggle('tab_active', i === index);
        this.contents[i].classList.toggle('tab__content_active', i === index);
      });
    }
  }

  document.querySelectorAll('.tabs').forEach(tabsContainer => {
    new Tabs(tabsContainer);
  });
  