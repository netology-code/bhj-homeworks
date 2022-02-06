const tab = document.getElementByClassName('tab');
const tab__content = document.getElementByClassName('tab__content');

tab.addEventListener(click, function() {
    tab.className = 'tab_active';
});

const arr = Array.from(tab);
tab__content.item(indexOf(arr)).addEventListener(click, function() {
    tab__contentitem(indexOf(arr)).className = 'tab__content_active';
});
