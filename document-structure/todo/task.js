const task = document.getElementsByClassName('task');
const tasks__list = document.getElementsByClassName('tasks__list');

for (const element of tasks__list) {
    tasks__list.addEventListener('KeyboardEvent.enterKey', insert_text())
    function insert_text() {
        tasks__list.insertAdjacentText('afterBegin', task.innerText)
    }
}

const task__remove = document.getElementsByClassName('task__remove');
for (const element of task__remove) {
    task__remove.addEventListener('click', remove_text());
    function remove_text() {
        tasks__list.removeChild(task.innerText)
    }

}