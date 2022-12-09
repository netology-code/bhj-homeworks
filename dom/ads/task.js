const rotator__case = document.getElementsByClassName('rotator__case');
const arr = Array.from(rotator__case);
let index = 0;

function toggleClass() {
    if(index === arr.length - 1) {
        index = 0;
    }
    arr[index].classList.remove('rotator__case_active');
    arr[index + 1].classList.add('rotator__case_active');
    
    index++;
}
setInterval(toggleClass, 1000);