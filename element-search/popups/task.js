let modalActive = document.getElementById('modal_main');
modalActive.classList.add('modal_active');

let modalClose = document.querySelectorAll('div.modal__close');
modalClose.forEach(elem => elem.onclick = function () {
    modalActive.classList.remove('modal_active');
})

let success = document.querySelector('a.show-success');
success.onclick = function () {
    modalActive.classList.remove('modal_active');
    modalActive = document.getElementById('modal_success');
    modalActive.classList.add('modal_active')
}