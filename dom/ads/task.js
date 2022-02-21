const rotator__case = document.getElementsByClassName('rotator__case');
rotator__case.className = 'rotator__case_active';

const arr = Array.from(rotator__case);
for(let i = 0; i++; i < arr.length) {
    function toggleClass() {
        arr[i - 1].classList.remove('rotator__case_active');
        arr[i].classList.add('rotator__case_active');
    }
    if(i === arr.length - 1) {
        i = 0;
    }
    setInterval(toggleClass, 1000);
}

const span = document.querySelector('span');
console.log(span.dataset.speed);
console.log(span.dataset.color);