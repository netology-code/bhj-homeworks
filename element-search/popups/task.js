const popup = document.getElementById('modal_main');
const popupClose = document.getElementsByClassName('modal__close');
const showSuccess = document.getElementsByClassName('show-success');
const popupSuccess = document.getElementById('modal_success');

popup.classList.add('modal_active');
popupClose[0].addEventListener('click', () => {
    popup.classList.remove('modal_active');
});

showSuccess[0].addEventListener('click', () => {
    popupSuccess.classList.add('modal_active');
    popup.classList.remove('modal_active');
});

popupClose[2].addEventListener('click', () => {
    popupSuccess.classList.remove('modal_active');
});
