const has_tooltip = document.getElementsByClassName('has-tooltip');
const arr_tooltip = Array.from(has_tooltip);

for (let elem of arr_tooltip) {
    const tooltip = elem.querySelector('.tooltip');
    elem.addEventListener('click', function(e) {
        if (tooltip) {
            tooltip.textContent = elem.getAttribute('title');
            tooltip.classList.toggle('tooltip_active');
            console.log(tooltip.textContent);
            e.preventDefault();
        }
        else if (!tooltip) {
            tooltip = elem.nextElementSibling;
            tooltip.innerHTML = '<div class="tooltip"></div>';
            tooltip.textContent = elem.getAttribute('title');
            tooltip.classList.toggle('tooltip_active');
            console.log(tooltip.textContent);
            e.preventDefault();
        }
    });
}