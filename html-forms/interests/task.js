const interest = document.getElementsByClassName('interest');
const interests = document.getElementsByClassName('interests');

function selected() {
    if(interest.selectedIndex) {
        interest.children.options = true;
    }
}
interest.addEventListener('click', selected);