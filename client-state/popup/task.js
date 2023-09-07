const modalClose = Array.from(document.querySelectorAll('.modal__close'));
const subscribeModel = document.getElementById('subscribe-modal');

if (!getCookie('subscribeModalForm')) {
    subscribeModel.classList.add('modal_active');
}

function close() {
    const modal = this.closest('.modal_active');

    if (modal) {
        modal.classList.remove('modal_active');
        document.cookie = 'subscribeModalForm=true';
    }
}

function getCookie(name) {
    const cookies = `; ${document.cookie}`;
    const cookie = cookies.split(`; ${name}=`);

    if (cookie.length === 2) {
        return cookie.pop().split(';').shift();
    }
}

modalClose.forEach(element => element.addEventListener('click', close));