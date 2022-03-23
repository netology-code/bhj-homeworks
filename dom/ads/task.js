const rotator__case = document.getElementsByClassName('rotator__case');
const arr = Array.from(rotator__case);
const index = 0;

function toggleClass() {
    if(index === arr.length - 1) {
        index = 0;
    }
    arr[index].classList.remove('rotator__case_active');
    arr[index + 1].classList.add('rotator__case_active');
}
setInterval(toggleClass, 1000);