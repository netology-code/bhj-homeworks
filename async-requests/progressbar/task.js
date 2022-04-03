const progress = document.getElementById('progress');
const send = document.getElementById('send');

send.addEventListener('click', function(e) {
    const indicator = 0;
    const xhr = new XMLHttpRequest();
    
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");

    xhr.onprogress = function(e) {
        progress.value += 0.1;
    }

    e.preventDefault();
    xhr.send();
});

