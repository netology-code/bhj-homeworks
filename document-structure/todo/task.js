const tasks__list = document.getElementsByClassName('tasks__list');
const task__remove = document.getElementsByClassName('task__remove');
const task__input = document.getElementById('task__input');

const list_arr = Array.from(tasks__list);
const remove_arr = Array.from(task__remove);

for (let elem_list of list_arr) {
    if(task__input.textContent) {
        elem_list.addEventListener('keyup', insert_text());
        function insert_text() {
            elem_list.insertAdjacentText('afterBegin', task.innerText);
        }
        for (let elem_remove of remove_arr) {
            elem_remove.addEventListener('click', remove_text());
            function remove_text() {
                elem_list.removeChild(task.innerText)
            }
        }
    }
}

