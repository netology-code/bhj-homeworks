let hasTooltips = Array.from(document.querySelectorAll('.has-tooltip'));
let tooltip = document.createElement('div');
tooltip.setAttribute('class', 'tooltip');
document.body.appendChild(tooltip);

hasTooltips.forEach(tip => tip.addEventListener('click', function (e) {
    if (tip.title === tooltip.textContent) {
        tooltip.classList.toggle('tooltip_active');
    } else {
        tooltip.textContent = tip.getAttribute('title')
        tooltip.classList.add('tooltip_active');
    }
    e.preventDefault();
    let place = tip.getBoundingClientRect();
    tooltip.style.left = place.left + "px";
    tooltip.style.top = place.top + 25 + "px";
}));