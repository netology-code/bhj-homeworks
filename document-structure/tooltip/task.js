const has_tooltip = document.getElementsByClassName('has-tooltip');
const arr_tooltip = Array.from(has_tooltip);

for (let tooltip of arr_tooltip) {
    tooltip.addEventListener('click', function() {
        tooltip.nextElementSibling.classList.toggle('tooltip_active');
        console.log(tooltip.nextElementSibling.textContent);
        tooltip.preventDefault();
    });
}