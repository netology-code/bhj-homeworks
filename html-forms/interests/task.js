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

checkboxArray.forEach(el => el.addEventListener('change', function(e) {
    const parent = this.closest('.interest__main');
    const interestChild = Array.from(parent.querySelectorAll('.interest__child'));
    if (el.classList.contains('check__main') && el.checked) {
       interestChild.forEach(i => {
            if (i.querySelector('.check__child').checked === false) {
                i.querySelector('.check__child').checked = true;
            }
        })
    }  else {
        interestChild.forEach(i => i.querySelector('.check__child').checked = false);
    }   
}))
