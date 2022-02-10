const helpers = document.getElementsByClassName('has-tooltip');

for (const helper of helpers) {
    function helper_show() {
        helper.classList.add('tooltip_active');
        console.log(helper.getAttribute('title'));
    }
helper.addEventListener('click', helper_show());
}