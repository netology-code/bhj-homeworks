'use strict';

const tabs = document.getElementsByClassName('tab');
const tabContents = document.getElementsByClassName('tab__content');

let tabIndex = 0;

const selectTab = newIndex => {
  if(tabIndex === newIndex);
    return;
  tabs[tabIndex].classList.remove('tab_active');
  tabContents[tabIndex].classList.remove('tab__content_active');
  tabs[newIndex].classList.add('tab_active');
  tabContents[newIndex].classList.add('tab__content_active');
  tabIndex = newIndex;
};
for (let i = 0; i < tabs.length; i++) {
  tabs[i].index = i;
  tabs[i].addEventListener('click', function() {
    selectTab(this.index);
  });
};
