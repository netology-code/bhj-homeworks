const checkbox = document.querySelectorAll('.interest__check');
const checkboxArray = Array.from(checkbox);
const interestBlock = document.querySelectorAll('.interest');
const interestBlockArray = Array.from(interestBlock);

const checkboxClass = () => {
    checkboxArray.forEach(el => {
        if (!el.closest('ul.interests')) {
           el.classList.add('check__main');
        } else {
           el.classList.add('check__child');
        }
    })
}
checkboxClass();

const interest = () => {
    interestBlockArray.forEach( el => {
        if (!el.closest('ul.interests')) {
            el.classList.add('interest__main')
        } else {
            el.classList.add('interest__child')
        }
    })
}
interest();

const checkboxMain = Array.from(document.querySelectorAll('.check__main'));
const checkboxChild = Array.from(document.querySelectorAll('.check__child'));

checkboxMain.forEach(el => el.addEventListener('change', function(e) {
    const parent = this.closest('.interest__main');
    const child = Array.from(parent.querySelectorAll('.check__child'));

    if (el.checked) {
        child.forEach(i => i.checked = true);
    } else {
        child.forEach(i => i.checked = false);
    }
}))

checkboxChild.forEach(el => el.addEventListener('change', function(e) {
    const parent = this.closest('.interest__main');
    const mainChild = parent.querySelector('.check__main');
    const child = Array.from(parent.querySelectorAll('.check__child'));

    if (child.some(i => i.checked === el.checked)) {
        mainChild.indeterminate = true;
    } if (child.every(i => i.checked === true)) {
        mainChild.indeterminate = false;
        mainChild.checked = true;
    } if (child.every(i => i.checked === false)) {
        mainChild.indeterminate = false;
        mainChild.checked = false;
    }
}))


  



