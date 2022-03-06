const xhr = new XMLHttpRequest();
const poll__title = document.getElementById('poll__title');
const poll__answers = document.getElementById('poll__answers');
const buttons = document.querySelectorAll('button');

let buttons_arr = Array.from(buttons);

xhr.open('GET', ' https://netology-slow-rest.herokuapp.com/poll.php');
xhr.addEventListener('readyStateChange', function() {

    if(xhr.readyState === xhr.OPENED) {
        poll__title.children.innerHTML = xhr.responseText;
        poll__answers.children.innerHTML = xhr.responseText;
        console.log(JSON.parse(xhr.responseText).data.title);
        console.log(JSON.parse(xhr.responseText).data.answers);
        for(let button of buttons) {
            button.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'));
        }
    }

});
