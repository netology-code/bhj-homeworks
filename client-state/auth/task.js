const signin = document.getElementById('signin');
const signin__btn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const signinForm = document.getElementById('signin__form');

if (localStorage.getItem('id')) {
    userId.textContent = localStorage.id;
    welcome.classList.add('welcome_active');
    signin.classList.remove('signin_active');
} else {
    signin.classList.add('signin_active');
}

signin__btn.addEventListener('click', function(e) {
    e.preventDefault();
    
    const formData = new FormData(signinForm);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.responseType = 'json';
    xhr.send(formData);
    signinForm.reset();

    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.response.success) {
                localStorage.setItem('id', xhr.response.user_id);
                userId.textContent = localStorage.id;
                welcome.classList.add('welcome_active');
                signin.classList.remove('signin_active');
            } 
            else if (!xhr.response.success) {
                alert('Неверный логин/пароль');
            }
        }
    });
});