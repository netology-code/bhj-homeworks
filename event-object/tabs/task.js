let tabs = arrayFrom.(document.querySelectorAll(".tab"));
let subTabs = arrayFrom(document.querySelectorAll(".tab__contents"));


function changeStatus () {

  for (i=0, i < tabs.length ,i++) {
    tabs[i].classList.add("tab_active")
  };
    if (tabs[i].classList.contains(".tab_active") ) {
      subTabs[i].classList.add(".tab__content_active");
    };
};
tabs.addEventListener('click', changeStatus);
