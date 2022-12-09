const modal_main = document.getElementById('modal_main');
const modal_success = document.getElementById('modal_success');

modal_main.classList.add('modal_active');

const modal__close = document.getElementsByClassName('modal__close');
for (const close of modal__close) {
    close.onclick = function() {
        modal_main.classList.remove('modal_active');
    }
}

const show_success = document.getElementsByClassName('show-success')[0];
show_success.onclick = function() {
    modal_main.classList.remove('modal_active');
    modal_success.classList.add('modal_active');
}
