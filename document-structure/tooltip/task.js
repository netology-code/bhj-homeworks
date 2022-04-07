const has_tooltip = document.getElementsByClassName('has-tooltip');
const arr_tooltip = Array.from(has_tooltip);
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

for (let elem of arr_tooltip) {
    elem.addEventListener('click', function(e) {

        e.preventDefault();

        const tooltip_active = document.querySelector('.tooltip_active');
        const tooltips = Array.from(document.querySelectorAll('.tooltip'));

        if (tooltips.includes(elemTooltip=>elemTooltip.textContent === elem.getAttribute('title'))) {
            tooltips.forEach(elemTooltip=>{
                if (elemTooltip.textContent === elem.getAttribute('title')) {

                    elemTooltip.classList.toggle('tooltip_active');
                }
            }
            );
        } else if (tooltip_active) {
            tooltip_active.classList.remove('tooltip_active');
        } else {
            tooltip.textContent = elem.getAttribute('title');

            const elemLeft = elem.getBoundingClientRect().left;
            const elemTop = elem.getBoundingClientRect().top;
            tooltip.style.left = elemLeft + 'px';
            tooltip.style.top = (elemTop + 20) + 'px';

            elem.appendChild(tooltip);
            tooltip.classList.add('tooltip_active');
        }

    });
}
