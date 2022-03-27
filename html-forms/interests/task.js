const interests_main = document.querySelector('.interests_main');
const interests = interests_main.querySelector('ul').children;

for (const interest of Array.from(interests)) {

    const interest__check = interest.querySelector('.interest__check');
    const interests_active = interest.querySelector('.interests_active');
    const check_active = Array.from(interests_active.querySelectorAll('.interest__check'));

    interest__check.addEventListener('change', function() {
        for (let active of check_active) {
            if (interest__check.checked) {
                active.checked = true;
            } else {
                active.checked = false;
            }
        }
    });
}
