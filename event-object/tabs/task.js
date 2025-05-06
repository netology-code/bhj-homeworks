class Tabs {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll('.tab');
    this.tabContents = container.querySelectorAll('.tab__content');

    this.registerEvents();
  }

  registerEvents() {
    this.tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.activateTab(tab);
      });
    });
  }

  activateTab(selectedTab) {
    if (!selectedTab || !selectedTab.classList) return; 
    this.tabs.forEach(tab => tab.classList.remove('tab_active'));
    this.tabContents.forEach(content => content.classList.remove('tab__content_active'));

    selectedTab.classList.add('tab_active');
    const index = Array.from(this.tabs).indexOf(selectedTab);
    const content = this.container.querySelectorAll('.tab__content')[index];
    if (content) {
      content.classList.add('tab__content_active');
    }
  }
}

new Tabs(document.getElementById('tabs1'));
