const helpers = document.getElementsByClassName('has-tooltip');
const arr_helpers = Array.from(helpers);
for (let helper of arr_helpers) {
    function helper_show() {
        helper.classList.add('tooltip_active');
        console.log(helper.getAttribute('title'));
    }
helper.addEventListener('click', helper_show());
}