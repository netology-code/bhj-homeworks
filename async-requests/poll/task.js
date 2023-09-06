let pollTitle = document.getElementById("poll__title");
let pollAnswers = document.getElementById("poll__answers");
let id, title, answers;
let xhr = new XMLHttpRequest();

function updateAnswers() {
  xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
  xhr.send();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
      [...pollAnswers.children].map((i) => i.remove());
      let answer = JSON.parse(xhr.responseText);
      id = answer.id;
      title = answer.data.title;
      answers = answer.data.answers;

      pollTitle.innerHTML = title;
      answers.forEach((el) => {
        pollAnswers.innerHTML += `
                  <button class="poll__answer">
                      ${el}
                  </button>
              `;
      });

      answers = Array.from(document.querySelectorAll(".poll__answer"));

      answers.forEach((el) => {
        el.addEventListener("click", function () {
          alert("Спасибо, ваш голос засчитан!");
          updateAnswers();
        });
      });
    }
  });
}
updateAnswers();
