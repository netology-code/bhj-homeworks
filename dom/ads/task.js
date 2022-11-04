const rotatorCase = document.querySelectorAll('.rotator__case');
const rotatorCaseArray = Array.from(rotatorCase);

const rotatorFunc = () => {
    const el = document.querySelector('.rotator__case_active');
    const nextItem = el.nextElementSibling;
    const parent = el.closest('.rotator');
    let delay = el.dataset.speed;
    let color = el.dataset.color;
    el.style.color = color;

    el.classList.remove('rotator__case_active');
    if (nextItem !== null) {
        nextItem.classList.add('rotator__case_active');
    } else {
        parent.firstElementChild.classList.add('rotator__case_active');
    }
    const timeOut = setTimeout(rotatorFunc, delay);
}
rotatorFunc();


