const has_tooltip = document.getElementsByClassName('has-tooltip');
const arr_tooltip = Array.from(has_tooltip);

for (let tooltip of arr_tooltip) {
    tooltip.addEventListener('click', function(e) {
        if (tooltip.nextElementSibling.classList.contains('tooltip')) {
            tooltip.nextElementSibling.textContent = tooltip.getAttribute('title');
            tooltip.nextElementSibling.classList.toggle('tooltip_active');
            console.log(tooltip.nextElementSibling.textContent);
            e.preventDefault();
        }
        else if ((!tooltip.nextElementSibling)||(!tooltip.nextElementSibling.classList.contains('tooltip'))) {
            tooltip.nextElementSibling.innerHTML = '<div class="tooltip"></div>';
            tooltip.nextElementSibling.textContent = tooltip.getAttribute('title');
            tooltip.nextElementSibling.classList.toggle('tooltip_active');
            console.log(tooltip.nextElementSibling.textContent);
            e.preventDefault();
        }
    });
}