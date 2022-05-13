const buttonClosedPop = Array.from(document.querySelectorAll('.modal__close_times'));
const beforForm = document.querySelector('#modal_main');
const button = document.querySelector('.btn');
const afterForm = document.querySelector('#modal_success');

button.addEventListener('click', function() {
    afterForm.classList.add('modal_active');
    beforForm.classList.remove('modal_active');
});

buttonClosedPop.forEach(item => item.addEventListener('click', function() {
    beforForm.classList.remove('modal_active');
    afterForm.classList.remove('modal_active');
}));