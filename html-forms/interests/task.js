let interests = document.querySelectorAll('.interests');

for (let item of interests) {
    const itemInterest = item.closest(".interest");
    if (itemInterest) {
        let interestCheck = itemInterest.querySelector('.interest__check');
        interestCheck.addEventListener('click', function () {
            interestCheck.checked ? invert(itemInterest, true) : invert(itemInterest, false)
        });
    }
}

function invert(element, checked) {
    let items = element.querySelectorAll(".interest__check");
    for (let i of items) {
        i.checked = checked;
    }
    ;
};