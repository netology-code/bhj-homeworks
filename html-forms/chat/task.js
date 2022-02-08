const chat_widget = document.getElementsByClassName('chat-widget');
const message = document.getElementsByClassName('message');
const message__text = document.getElementsByClassName('message__text');
const message__time = document.getElementsByClassName('message__time');
const message_time = message__text.random().previousElement;

chat_widget.addEventListener('click', function() {
    chat_widget.classList.add('chat-widget_active');    
})

const message_return = Array.from('message__text');


const form = document.forms['register-form'];

function submit() {
    if(KeyboardEvent.charCode = 13) {
        message.classList.add('message_client');
        form.addEventListener('submit', event => {
            form.submit();
        })
    }
    console.log(message__text.random().textContent);
    console.log(message_time.innreHTML = Date());
}


