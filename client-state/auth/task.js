const signin = document.getElementById('signin');
const signin__btn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const signinForm = document.getElementById('signin__form');

signin.classList.add('signin_active');

if (localStorage.getItem('id')) {
    userId.textContent = localStorage.id;
    welcome.classList.add('welcome_active');
}

signin__btn.addEventListener('click', function(e) {
    const formData = new FormData(signinForm);
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.send(formData);
    signinForm.reset();

    const responseObject = JSON.parse(xhr.responseText);

    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === xhr.DONE) {
            if (responseObject.success) {
                
                localStorage.setItem('id', 'responseObject.user_id');
                userId.textContent = localStorage.id;
                welcome.classList.add('welcome_active');
            } 
            
            else if (!responseObject.success) {
                alert('Неверный логин/пароль');
            }
        }
    });
    e.preventDefault();
});
