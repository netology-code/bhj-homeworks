let progress = document.getElementById('progress');
let form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    let input = form.elements.file;
    let file = input.files[0];
    
    if (file) {
        upload(file);
    }
    
    event.preventDefault();
});

function upload(file) {
    let xhr = new XMLHttpRequest();
  
    xhr.upload.onprogress = function(event) {
        progress.setAttribute('max', event.total);
        progress.value = event.loaded;
    }
  
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(file);
}