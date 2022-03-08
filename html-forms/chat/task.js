const chat_widget = document.getElementsByClassName('chat-widget');
const message_client = document.getElementsByClassName('message_client');
const messages = document.querySelector( '.chat-widget__messages' );


let arr_widget = Array.from(chat_widget);
let arr_client = Array.from(message_client);

for(let widget of arr_widget) {
    widget.addEventListener('click', function() {
        widget.classList.add('chat-widget_active');    
    });
    widget.addEventListener('submit', function() {
        for(let message of arr_client) {
            if(message.lastChild.textContent) {
                messages.innerHTML += `
                <div class="message">
                <div class="message__time">09:21</div>
                <div class="message__text">
                Добрый день, мы ещё не проснулись. Позвоните через 10 лет
                </div>
                </div>`;
            }
            message.firstChild.textContent = Date();
        }
    });
}

