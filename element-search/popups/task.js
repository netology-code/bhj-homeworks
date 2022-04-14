const ButtonClosedPop = document.getElementsByClassName('modal__close_times');
const formContentPop = document.getElementsByClassName('modal')
const buttonDoSuccess = document.getElementsByClassName('show-success')
const afterPushButtonDoSuccess = document.getElementById('modal_success')

console.log(buttonDoSuccess)


for (let i = 0; i < ButtonClosedPop.length; i++) {
    ButtonClosedPop[i].onclick = function () {
        formContentPop[i].style.display = "none";
    }
}
for (let i = 0; i < buttonDoSuccess.length; i++) {
    buttonDoSuccess[i].onclick = function () {
        buttonDoSuccess[i].classList.remove('modal_active');
        afterPushButtonDoSuccess.classList.add('modal_active')
    }
}