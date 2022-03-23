const signin = document.getElementById('signin');
const signin__btn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');


signin.classList.add('signin_active');

signin__btn.addEventListener('click', function(e) {
    const formData = new FormData(signin);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.send(formData);
    formData.reset();

    xhr.addEventListener('load', function() {
        if (xhr.responseText.success) {
            welcome.classList.add('welcome_active');
            localStorage.setItem('id', 'xhr.responseText.user_id');
            welcome.textContent.innerHTML = localStorage.id;
            console.log(welcome.textContent);
        }
        else if(!xhr.responseText.success) {
            alert('Неверный логин/пароль');
        }
        else if (localStorage.getItem('id')) {
            welcome.textContent.innerHTML = localStorage.id;
            console.log(welcome.textContent);
        }
    })
    e.preventDefault();
});

