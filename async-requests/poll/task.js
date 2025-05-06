document.addEventListener('DOMContentLoaded', function() {
    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');

    function renderPoll(pollData) {
        pollTitle.textContent = pollData.data.title;
        pollAnswers.innerHTML = '';
        pollData.data.answers.forEach((answer, index) => {
            const answerButton = document.createElement('button');
            answerButton.classList.add('poll__answer');
            answerButton.textContent = answer;
            answerButton.addEventListener('click', function() {
                sendVote(pollData.id, index);
            });
            pollAnswers.appendChild(answerButton);
        });
    }

    function sendVote(pollId, answerIndex) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                showThankYou();
                console.log(response);
            } else {
                console.error('Error sending vote:', xhr.status);
            }
        };
        xhr.onerror = function() {
            console.error('Error sending vote:', xhr.status);
        };
        const params = `vote=${pollId}&answer=${answerIndex}`;
        xhr.send(params);
    }

    function showThankYou() {
        alert('Спасибо, ваш голос засчитан!');
    }

    function loadPoll() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
        xhr.onload = function() {
            if (xhr.status === 200) {
                const pollData = JSON.parse(xhr.responseText);
                renderPoll(pollData);
            } else {
                console.error('Error loading poll:', xhr.status);
            }
        };
        xhr.onerror = function() {
            console.error('Error loading poll:', xhr.status);
        };
        xhr.send();
    }

    loadPoll();
});
