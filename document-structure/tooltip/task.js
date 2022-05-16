let hasTooltips = Array.from(document.querySelectorAll('.has-tooltip'));
let tooltip = document.createElement('div');
tooltip.setAttribute('class', 'tooltip');
document.body.appendChild(tooltip);

hasTooltips.forEach(tip => tip.addEventListener('click', function (e) {
    e.preventDefault();
    tooltip.classList.toggle('tooltip_active');
    tooltip.innerText = tip.getAttribute('title');
    let place = tip.getBoundingClientRect();
    tooltip.style.left = place.left + "px";
    tooltip.style.top = place.top + 25 + "px";
}));