// Получаем элементы, которые нужно отслеживать
const reveals = document.getElementsByClassName("reveal");

// Функция для обработки события прокрутки
function handleScroll() {
    // Получаем текущую позицию прокрутки
    const scrollPosition = window.scrollY;

    // Проходимся по всем элементам
    for (let i = 0; i < reveals.length; i++) {
        // Получаем координаты элемента
        const rect = reveals[i].getBoundingClientRect();

        // Если верхняя граница элемента находится ниже позиции прокрутки и нижняя граница выше позиции прокрутки, то элемент видим
        if (rect.top <= scrollPosition && rect.bottom >= scrollPosition) {
            // Изменяем его стиль
            reveals[i].classList.add("reveal_active");
        }
    }
}

// Привязываем функцию к событию прокрутки
window.addEventListener("scroll", handleScroll);