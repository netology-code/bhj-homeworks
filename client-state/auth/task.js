const form = document.getElementById("signin__form");
const inputFields = Array.from(document.querySelectorAll(".control"));
const userId = document.getElementById("user_id");
const signin = document.querySelector(".signin");
const welcome = document.querySelector(".welcome");
const button = document.querySelector(".btn");
let savedId;

form.addEventListener("submit", (event) => {
  fetch("https://students.netoservices.ru/nestjs-backend/auth", {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Неверный логин/пароль");
      }
    })
    .then((data) => {
      form.reset();
      localStorage.setItem("id", data.user_id);
      savedId = localStorage.getItem("id");
      userId.textContent = savedId;
      signin.classList.remove("signin_active");
      welcome.classList.add("welcome_active");
    })
    .catch((error) => {
      alert(error);
    });

  event.preventDefault();
});

window.addEventListener("load", () => {
  savedId = localStorage.getItem("id");
  if (savedId) {
    userId.textContent = savedId;
    signin.classList.remove("signin_active");
    welcome.classList.add("welcome_active");
  }
});
