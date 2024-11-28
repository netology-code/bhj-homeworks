// Получаем все элементы с классом .rotator__case
const rotatorCases = document.getElementsByClassName("rotator__case");

function rotateTexts() {
  // Находим активный элемент и удаляем у него класс .rotator__case_active
  let activeRotatorCase = document.querySelector(".rotator__case_active");
  if (activeRotatorCase) {
    activeRotatorCase.classList.remove("rotator__case_active");
  }

  // Выбираем случайный элемент для активации
  const randomIndex = Math.floor(Math.random() * rotatorCases.length);
  const newActiveRotatorCase = rotatorCases[randomIndex];

  // Добавляем класс .rotator__case_active к выбранному элементу
  newActiveRotatorCase.classList.add("rotator__case_active");
}

// Запуск смены объявлений через 1 секунду после загрузки страницы
setTimeout(rotateTexts, 1000);