const modal__close = document.getElementsByClassName('modal__close');
const subscribe_modal = document.getElementById('subscribe-modal');

const arr_close = Array.from(modal__close);

for(const elem of arr_close) {
    elem.addEventListener('clik', function() {
        subscribe_modal.classList.remove('modal_active');
        document.cookie = 'close=' + encodeURIComponent('Окно закрыто') + 'Expires = Mon, 01 March 2023 00:00:00 GMT;';
    });
}
const getCookie = (close) => {
    const value = '; ' + document.cookie;
    let parts = value.split('; ' + close + '=');
    if (parts.length === 2) {
        return parts
        .pop().split(';').shift();
    }
    else if (!document.cookie.close) {
        subscribe_modal.classList.add('modal_active');
    }
}