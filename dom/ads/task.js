const rotator__case = document.getElementsByClassName('rotator__case');

const arr = Array.from(rotator__case);
for(let i = 0; i++; i < arr.length) {
    function toggleClass() {
        arr[i].classList.remove('rotator__case_active');
        arr[i + 1].classList.add('rotator__case_active');
    }
    if(i === arr.length - 1) {
        i = 0;
    }
    setInterval(toggleClass, 1000);
}
