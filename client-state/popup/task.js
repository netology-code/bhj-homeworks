const modal__close = document.querySelector('.modal__close');
const subscribe_modal = document.getElementById('subscribe-modal');


modal__close.addEventListener('click', function() {
        subscribe_modal.classList.remove('modal_active');
        document.cookie = 'close=' + 'Окно закрыто';
    });
const getCookie = (close) => {
    const value = '; ' + document.cookie;
    let parts = value.split('; ' + close + '=');
    if (parts.length === 2) {
        return parts
        .pop().split(';').shift();
    }
}

if (!getCookie('close')) {
    subscribe_modal.classList.add('modal_active');
} 