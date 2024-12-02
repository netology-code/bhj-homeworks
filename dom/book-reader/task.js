const buttons = document.querySelectorAll(".font-size");
const book = document.querySelector(".book__content");

// Функция для обработки кликов по кнопкам размера шрифта
function handleClick(event) {
  event.preventDefault();

  // Удаление класса "font-size_active" у всех кнопок
  buttons.forEach((button) => button.classList.remove("font-size_active"));

  // Получение активной кнопки
  const activeButton = event.target;

  // Добавление класса "font-size_active" к активной кнопке
  activeButton.classList.add("font-size_active");

  // Удаление классов размера шрифта у блока книги
  book.classList.remove("book_fs-small", "book_fs-big");

  // Определение размера шрифта на основе атрибута data-size
  const size = activeButton.dataset.size;
  if (size) {
    // Добавление класса размера шрифта к блоку книги
    book.classList.add(`book_fs-${size}`);
  }
}

// Привязываем обработчик клика к каждой кнопке размера шрифта
buttons.forEach((element) => element.addEventListener("click", handleClick));