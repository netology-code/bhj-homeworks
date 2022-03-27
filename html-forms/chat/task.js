const chat_widget = document.querySelector('.chat-widget');
const chat_input = document.querySelector('.chat-widget__input');
const message_client = document.getElementsByClassName('message_client');
const messages = document.getElementById('chat-widget__messages');

let arr_client = Array.from(message_client);

//  input.oninput = function() {
//     document.getElementById('result').innerHTML = input.value;
//   };


chat_widget.addEventListener('click', function() {
    chat_widget.classList.add('chat-widget_active');
});

chat_input.addEventListener('input', function(e) {

    chat_widget.addEventListener('Enter', function(e) {

    messages.innerHTML += `
    <div class="message message_client">
    <div class="message__time">` + new Date() + `</div>
    <div class="message__text">` + chat_input.value + `</div>
    </div>`;
    
    messages.innerHTML += `
    <div class="message">
    <div class="message__time">` + new Date() + `</div>
    <div class="message__text">Добрый день, мы ещё не проснулись. Позвоните через 10 лет</div>
    </div>`;
});
e.preventDefault();
});