const modalWindow = document.querySelector(`#subscribe-modal`);

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

const wasHereWindow = getCookie(`action`);

if (!wasHereWindow) {
    modalWindow.classList.add("modal_active");
    const closeModal = modalWindow.querySelector(`.modal__close_times`);
    closeModal.addEventListener(`click`, ()=> {
        document.cookie = 'action=Close; max-age=360000000';
        modalWindow.classList.remove("modal_active");
    })
}