let modalWindow = document.querySelector("#modal_main");
let close = document.querySelector(".modal__close");
let success = document.querySelector("#modal-success");
let button = document.querySelector(".show-success");


modalWindow.className = "modal modal_active";
 function closeClick() {
  modalWindow.className = "modal";
};
 function buttonSuccess() {
  success.className = "modal modal_active";
};
button.onclick = buttonSuccess;
close.onclick = closeClick;
