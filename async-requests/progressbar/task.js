const progressBar = document.querySelector('#progress');
const sendBtn = document.querySelector('#send');

sendBtn.addEventListener("click", (event) => {
    const formData = new FormData(document.querySelector('#form'));
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.upload.onprogress = function (event) {
        progressBar.value = event.loaded / event.total;
    }
    xhr.send(formData);
    event.preventDefault();
});