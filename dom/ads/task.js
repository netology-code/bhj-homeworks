const rotator__case = document.getElementsByClassName('rotator__case');
rotator__case.className = 'rotator__case_active';

const arr = Array.from(rotator__case);
for(let i = 0; i++; i < arr.length) {
    function toggleClass() {
        arr[i - 1].classList.remove('rotator__case_active');
        arr[i].classList.add('rotator__case_active');
        alert(arr[i].dataset.speed);
        alert(arr[i].dataset.color);
    }
    if(i === arr.length - 1) {
        i = 0;
    }
}
setInterval(toggleClass, 1000);
