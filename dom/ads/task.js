const rotatorCase = document.querySelectorAll('.rotator__case');
const rotatorCaseArray = Array.from(rotatorCase);

const infinityRotator = setInterval(() => {
    let caseActiveIndex = rotatorCaseArray.findIndex(el => el.classList.contains('rotator__case_active'));
    rotatorCaseArray[caseActiveIndex].classList.remove('rotator__case_active');
    caseActiveIndex++;
    if (caseActiveIndex > rotatorCaseArray.length - 1) {
        caseActiveIndex = 0;
    }
    rotatorCaseArray[caseActiveIndex].classList.add('rotator__case_active');
    rotatorCaseArray.forEach(el => {
        if (el.classList.contains('rotator__case_active')) {
            let color = el.dataset.color;
            el.style.color = color;
            let speed = el.dataset.speed;
        }
    })
}, 1000);

