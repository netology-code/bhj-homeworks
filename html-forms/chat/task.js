const chat_widget = document.querySelector('.chat-widget');
const chat_widget_area = document.querySelector('.chat-widget__area');
const chat_input = document.getElementById('chat-widget__input');
const messages = document.getElementById('chat-widget__messages');
const robot_messages = [
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
    'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
    'Кто тут?',
    'Где Ваша совесть?',
    'Добрый день! До свидания!',
    'К сожалению все операторы сейчас заняты. Не пишите нам больше!',
    'Мы ничего не будем Вам продавать!'
];

chat_widget.addEventListener('click', function() {
    chat_widget.classList.add('chat-widget_active');
});

chat_input.addEventListener('keydown', function(e) {
    
    if ((chat_input.value.trim()) && (e.keyCode === 13)) {
        const message_client = document.createElement('div');
        const message_robot = document.createElement('div');
        const random_message = robot_messages[Math.floor(Math.random() * robot_messages.length)];

        const d = new Date();
        const h = d.getHours().toString();
	    const m = d.getMinutes().toString();
        
        message_client.innerHTML = 
          `<div class="message message_client">
             <div class="message__time">` + h + `:` + m + `</div>
             <div class="message__text">` + chat_input.value + `</div>
           </div>`;
        
        message_robot.innerHTML = 
          `<div class="message"
             <div class="message__time">` + h + `:` + m + `</div>
             <div class="message__text">` + random_message + `</div>
           </div>`;
        
        messages.appendChild(message_client);
        messages.appendChild(message_robot);
        chat_input.value = '';
    }
});
