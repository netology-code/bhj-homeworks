const tasks__list = document.querySelector('.tasks__list');
const task__input = document.getElementById('task__input');

const list_arr = Array.from(tasks__list);

if(task__input.textContent) {
    task__input.addEventListener('submit', function() {
    tasks__list.insertAdjacentHTML('afterBegin', tasks__list.firstChild.outerHTML);
    tasks__list.insertAdjacentText('afterBegin', tasks__list.firstChild.innerText = task__input.textContent);
    });
    for(let elem of tasks__list) {
        elem.queryselector('.task__title').addEventListener('click', function(e) {
            elem.remove();
            e.preventDefault();
        });
    }
}

