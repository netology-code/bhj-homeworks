const chat_widget = document.querySelector('.chat-widget');
const chat_widget_area = document.querySelector('.chat-widget__area');
const chat_input = document.getElementById('chat-widget__input');
const messages = document.getElementById('chat-widget__messages');

chat_widget.addEventListener('click', function() {
    chat_widget.classList.add('chat-widget_active');
});

chat_widget_area.addEventListener('submit', function(e) {
    e.preventDefault();
    if (chat_input.value.trim()) {
        const message_client = document.createElement('div');
        const message_robot = document.createElement('div');
        
        message_client.innerHTML = 
          `<div class="message message_client">
             <div class="message__time">` + new Date() + `</div>
             <div class="message__text">` + chat_input.value + `</div>
           </div>`;
        
        message_robot.innerHTML = 
          `<div class="message"
             <div class="message__time">` + new Date() + `</div>
             <div class="message__text">Добрый день, мы ещё не проснулись. Позвоните через 10 лет</div>
           </div>`;
        
        messages.appendChild(message_client);
        messages.appendChild(message_robot);
        chat_input.value = '';
    }
});
