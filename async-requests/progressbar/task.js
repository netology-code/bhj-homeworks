const xhr = new XMLHttpRequest();
const progress = document.getElementById( 'progress' );
progress.value = 0.6;

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/upload.php');
xhr.addEventListener('readyStateChange', function() {
    if(xhr.readyState === xhr.OPENED) {    
        progress.value.innerHTML = xhr.responseText;
        let response = JSON.parse(xhr.responseText);
        response += 0.1;
        console.log(response);
    }
    else if(xhr.readyState === xhr.HEADERS_RECEIVED) {    
        progress.value.innerHTML = xhr.responseText;
        let response = JSON.parse(xhr.responseText);
        response += 0.1;
        console.log(response);
    }
    else if(xhr.readyState === xhr.LOADING) {    
        progress.value.innerHTML = xhr.responseText;
        let response = JSON.parse(xhr.responseText);
        response += 0.1;
        console.log(response);
    }
    else if(xhr.readyState === xhr.DONE) {    
        progress.value.innerHTML = xhr.responseText;
        let response = JSON.parse(xhr.responseText);
        response += 0.1;
        console.log(response);
    }

});