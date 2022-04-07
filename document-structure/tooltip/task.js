const has_tooltip = document.getElementsByClassName('has-tooltip');
const arr_tooltip = Array.from(has_tooltip);


for (let elem of arr_tooltip) {
    elem.addEventListener('click', function(e) {

        const tooltip = document.createElement('div');
        tooltip.textContent = elem.getAttribute('title');
        tooltip.classList.add('tooltip');
        
        const elemLeft = elem.getBoundingClientRect().left;
        tooltip.style.left = elemLeft + 'px';

        
        const tooltip_active = document.querySelector('.tooltip_active');
        if((tooltip_active)) {
            tooltip_active.classList.remove('tooltip_active');
        }

        else if(tooltip.textContent.includes(elem.getAttribute('title'))) {
            tooltip.classList.remove('tooltip_active');
        }

        
        
        elem.append(tooltip);
        tooltip.classList.add('tooltip_active');
        e.preventDefault();
    });
}