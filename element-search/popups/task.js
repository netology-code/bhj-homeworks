const modal_main = document.getElementById('modal_main');
modal_main.className = 'modal_active';

const modal__close = document.getElementsByClassName('modal__close');
for(const close of modal__close) {
    close.onclick = function() {
        modal_main.classList.add('modal');
    }
}

const show_success = document.getElementsByClassName('show-success');
const modal_success = document.getElementsByClassName('modal_success');
for(const show of show_success) {
    show.onclick = function() {
        for(const success of modal_success)
        success.classList.add('modal_active');
    }
}