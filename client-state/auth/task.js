const form = document.querySelector(`#signin__form`);

const showBlock = function(id) {
    document.querySelector(`.signin_active`).classList.remove("signin_active");
    document.querySelector(`#welcome`).classList.add("welcome_active");
    document.querySelector(`#user_id`).textContent = `${id}`;
    const outBtn = document.querySelector(`#sign_out_btn`);
    outBtn.addEventListener(`click`, ()=> {
        localStorage.removeItem(`user`);
        document.querySelector(`.signin`).classList.add("signin_active");
        document.querySelector(`#welcome`).classList.remove("welcome_active");
        getStarted();
    })
}

const getStarted = function() {
    if (localStorage.user) {
        showBlock(localStorage.user);
    } else {
        form.addEventListener(`submit`, (evt)=> {
            const signForm = new FormData(form);
            const requestForm = new XMLHttpRequest();
            requestForm.open(`POST`, `https://netology-slow-rest.herokuapp.com/auth.php`);
            requestForm .addEventListener(`readystatechange`, ()=> {
                if (requestForm.readyState === 4) {
                    const status = JSON.parse(requestForm.responseText);
                    if (status.success) {
                        localStorage.setItem(`user`,`${status["user_id"]}`);
                        showBlock(status["user_id"]);
                    } else {
                        alert('Неверный логин/пароль');
                        document.querySelector("input[name=login]").value = ``;
                        document.querySelector("input[name=password]").value = ``;
                    }
                }
            });

            requestForm.send(signForm);
            evt.preventDefault();

        })
    }
}

getStarted();