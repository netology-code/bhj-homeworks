const pollAnswers = document.querySelector('#poll__answers');
const pollTitle = document.querySelector('#poll__title');

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");

xhr.addEventListener("readystatechange", function() {
    if (xhr.readyState === xhr.DONE) {
        const responseObject = JSON.parse(xhr.responseText);
        console.log(responseObject);

        pollTitle.innerText = responseObject.data.title;
            
        for(let answer of responseObject.data.answers) {
            pollAnswers.insertAdjacentHTML('beforeEnd', `<button class="poll__answer">` + answer +`</button>`);
        }

        for(const button of Array.from(document.querySelectorAll('button'))) {
            button.addEventListener('click', function(e) {
                alert('Спасибо, ваш голос засчитан!');
                e.preventDefault();
            })
        }

        
    }
});

xhr.send();