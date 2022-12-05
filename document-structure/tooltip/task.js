const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltip = document.querySelector('.tooltip');

hasTooltip.forEach(el => el.addEventListener('click', (e) => {
    tooltip.classList.toggle('tooltip_active');
    tooltip.innerHTML = el.title;
    const {left, top} = el.getBoundingClientRect();
    tooltip.style.left = left +'px';
    tooltip.style.top = (top-30) +'px';

    e.preventDefault();
}))
