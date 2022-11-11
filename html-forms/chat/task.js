const chatWidget = document.querySelector('.chat-widget');
const chatWidgetArea = document.querySelector('.chat-widget__messages-container');
const input = document.querySelector('.chat-widget__input')
const messages = document.querySelector('.chat-widget__messages');
const botPhrases = [
    'Приветствую Вас!',
    'Чем могу помочь?',
    'Погодка сегодня классная!',
    'Как Ваши дела?',
    'До свидания! Ждем Вас снова!'
];

chatWidget.addEventListener('click', (e) => {
    chatWidget.classList.add('chat-widget_active')
})

input.addEventListener('keyup', (e) => {
    function dateNow() {
        return new Date().toLocaleTimeString().slice(0, -3);
    }
    const currentDate = dateNow();
    if (e.code === 'Enter' && input.value !== '') {
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${currentDate}</div>
                <div class="message__text">${input.value}</div>
            </div>
        `;
        input.value = '';

        function randomAnswer() {
            return botPhrases[Math.floor(Math.random() * botPhrases.length)];
        }
        const botAnswer = randomAnswer();

        const delayAnswer = setTimeout(() => {
            messages.innerHTML += `
        <div class="message">
            <div class="message__time">${currentDate}</div>
            <div class="message__text">${botAnswer}</div>
        </div>
        `;
        }, 2000);
    }
    
})
