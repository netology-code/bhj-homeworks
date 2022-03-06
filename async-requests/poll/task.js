const xhr = new XMLHttpRequest();
const poll__title = document.getElementById('poll__title');
const poll__answers =document.getElementById('poll__answers');

xhr.open('GET', ' https://netology-slow-rest.herokuapp.com/poll.php');
xhr.addEventListener('readyStateChange', function() {

    if(xhr.readyState === xhr.OPENED) {
        poll__title.children.innerHTML = xhr.responseText;
        poll__answers.children.innerHTML = xhr.responseText;
        console.log(JSON.parse(xhr.responseText).responseText.data.title);
        console.log(JSON.parse(xhr.responseText).responseText.data.answers);
        button.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'));
    }

});
