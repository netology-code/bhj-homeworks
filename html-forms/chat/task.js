const sideWidget = document.querySelector('.chat-widget__side');
const chatWindow = document.querySelector('.chat-widget');
const chatInput = document.getElementById('chat-widget__input');
const chatMsg = document.getElementById('chat-widget__messages');
const robotResponse = ['Добрый день!', 'Сейчас что-нибудь придумаем',
                        'Собака с милицией обещали прийти', 'До свидания!',
                        'Ваш запрос выполняется']
const robotQuestions = ['Чем мы можем Вам помочь?', 'Как мы можем к Вам обращаться?', 'Опишите проблему и мы постараемся помочь.'];

let isActive = false;

sideWidget.onclick = () => {
    chatWindow.classList.add('chat-widget_active');
    setTimeout(postRobotQuestion, 3000);
}

chatInput.onkeydown = e => {
    if (e.code === 'Enter') {
        if (chatInput.value.trim() == '') {
            chatInput.value = '';
            return;
        }
        isActive = true;
        postClientMessage();
        setTimeout(() => postRobotMessage(robotResponse), 10000)
    }
}



function postClientMessage() {
    let resultMsg = document.createElement('div');
    resultMsg.className = 'message message_client';

    let msgTime = document.createElement('div');
    msgTime.className = 'message__time';
    msgTime.textContent = getCurrentDate();

    let msgText = document.createElement('div');
    msgText.className = 'message__text';
    msgText.textContent = chatInput.value;

    resultMsg.appendChild(msgTime);
    resultMsg.appendChild(msgText);
    chatMsg.appendChild(resultMsg);
    chatInput.value = '';
}

function postRobotQuestion() {
    if (!isActive) {
        postRobotMessage(robotQuestions);
    }
    
}

function postRobotMessage(messages) {
    let resultMsg = document.createElement('div');
    resultMsg.className = 'message';

    let msgTime = document.createElement('div');
    msgTime.className = 'message__time';
    msgTime.textContent = getCurrentDate();

    let msgText = document.createElement('div');
    msgText.className = 'message__text';
    msgText.textContent = messages[Math.floor(Math.random() * messages.length)];

    resultMsg.appendChild(msgTime);
    resultMsg.appendChild(msgText);
    chatMsg.appendChild(resultMsg);
}

function getCurrentDate() {
    let hours = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours();
    let minutes = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
    let result = hours + ':' + minutes;
    return result;
}