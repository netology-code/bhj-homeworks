let modalClose = document.querySelector('.modal__close');
let subscribeModal = document.getElementById('subscribe-modal');

const getCookie = (name) => { 
    const value = "; " + document.cookie; 
    let parts = value.split("; " + name + "="); 
    
    if (parts.length === 2) { 
        return parts 
        .pop() 
        .split(";") 
        .shift(); 
    } 
}

window.addEventListener('load', function() {
    if (getCookie('modalOpen')) {
        return false;
    } else {
        subscribeModal.classList.add('modal_active'); 
    }
});

modalClose.addEventListener('click', function(event) {
    event.target.closest('.modal').classList.remove('modal_active');
    
    if (getCookie('modalOpen')) {
        return false;
    } else {
        let date = new Date();
    
        date.setDate(date.getDate() + 1);
        date = date.toUTCString();

        document.cookie = 'modalOpen=true; path=/; expires=' + date;
    }
});