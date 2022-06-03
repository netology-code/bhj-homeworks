let poll = document.querySelector('#poll__title');
let pollAnswers = document.querySelector('#poll__answers');
const url = 'https://netology-slow-rest.herokuapp.com/poll.php';
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        const json = JSON.parse(xhr.response);
        poll.textContent = json['data']['title'];
        let pollAnswers = json['data']['answers'];
        for (let i in pollAnswers) {
            createItem(pollAnswers[i]);
        }
    }
}

const createItem = function (text) {
    const pollAnswer = document.createElement('button');
    pollAnswer.classList.add('poll__answer');
    pollAnswer.textContent = text;
    pollAnswers.appendChild(pollAnswer);
}

pollAnswers.addEventListener('click', function () {
    alert('Спасибо, ваш голос засчитан!');
});