const modal_main = document.getElementById('modal_main');
modal_main.className = 'modal_active';

const modal__close = document.getElementsByClassName('modal__close');
modal__close.onclick = function() {
    modal_main.className = 'modal';
}

const show_success = document.getElementsByClassName('show-success');
const modal_success = document.getElementsByClassName('modal_success');
show_success.onclick = function() {
    modal_success.className = 'modal_active';
}