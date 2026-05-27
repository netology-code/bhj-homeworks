document.addEventListener('DOMContentLoaded', function() {
    const progress = document.getElementById('progress');

    function updateProgress(event) {
        if (event.lengthComputable) {
            const percentComplete = (event.loaded / event.total) * 100;
            progress.value = percentComplete;
        }
    }

    function sendFormData(formData) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
        xhr.upload.addEventListener('progress', updateProgress);
        xhr.onload = function() {
            if (xhr.status === 200) {
                console.log('File uploaded successfully');
            } else {
                console.error('Error uploading file:', xhr.status);
            }
        };
        xhr.onerror = function() {
            console.error('Error uploading file:', xhr.status);
        };
        xhr.send(formData);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        sendFormData(formData);
    }

    const form = document.getElementById('form');
    form.addEventListener('submit', handleFormSubmit);
});
