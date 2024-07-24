let cookie = document.querySelector('.clicker__cookie');
let counter = document.querySelector('#clicker__counter');
let mean = document.querySelector('#clicker__mean');
let clicks = 0;
let lastClickTime = 0;

cookie.addEventListener('mousedown', function(){

    let currentClickTime = Date.now(); 
    let difference = currentClickTime - lastClickTime;

    mean.innerText = (1000 / difference).toFixed(2);

    clicks++;

    counter.innerText = clicks;
    lastClickTime = currentClickTime;
    cookie.style.width = '300px'
    
})

cookie.addEventListener('mouseup', function(){   
    cookie.style.width = '200px'
})