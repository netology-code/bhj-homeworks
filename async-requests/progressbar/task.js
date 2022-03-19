const xhr = new XMLHttpRequest();
const progress = document.getElementById( 'progress' );
progress.value = 0.7;

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/upload.php');
xhr.send();

xhr.upload.onloadstart = function() {
    progress.value.innerHTML = xhr.responseText;
        let response = JSON.parse(xhr.responseText);
        response += 0.1;
        console.log(response);
}

xhr.upload.onprogress = function() {
    progress.value.innerHTML = xhr.responseText;
        let response = JSON.parse(xhr.responseText);
        response += 0.1;
        console.log(response);
}

xhr.upload.onload = function() {
    progress.value.innerHTML = xhr.responseText;
        let response = JSON.parse(xhr.responseText);
        response += 0.1;
        console.log(response);
}