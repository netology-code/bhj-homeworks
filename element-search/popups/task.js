const popup = document.querySelector('#modal_main');
const popupClose = document.querySelectorAll('.modal__close_times');
const popupCloseArray = Array.from(popupClose);
const popupBtn = document.querySelectorAll('.btn');
const popupBtnArray = Array.from(popupBtn);
const popupSuccess = document.querySelector('#modal_success');

popup.classList.add('modal_active');
popupCloseArray.forEach(close => close.addEventListener('click', function() {
    const parentModal = this.closest('.modal');
    parentModal.classList.remove('modal_active');
}));
popupBtnArray.forEach(btn => btn.addEventListener('click', function() {
     const parentModal = this.closest('.modal');
     parentModal.classList.remove('modal_active');
     popupSuccess.classList.add('modal_active');
}))



