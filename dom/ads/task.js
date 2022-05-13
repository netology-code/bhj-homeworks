function main() {
    let rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
    let i = 0;
    setInterval(() => {
        if (i < rotatorCase.length) {
            rotatorCase.forEach(item => item.classList.remove('rotator__case_active'));
            rotatorCase[i].classList.add('rotator__case_active');
            i++;
        } else {
            i = 0;
        }
    }, 500);
};
window.onload = main();