let taskInput = document.querySelector('#task__input');
let buttonAddTask = document.querySelector('#tasks__add');
let taskList = document.querySelector('#tasks__list');

function add() {
    taskList.insertAdjacentHTML('afterbegin', `
        <div class= "task">
            <div class="task__title">${taskInput.value}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>
        `);
    taskList.querySelector('.task__remove').onclick = function name() {
        this.closest('.task').remove();
    }
    taskInput.value = '';
}

buttonAddTask.addEventListener('click', (e) => {
    e.preventDefault();
    if (taskInput.value.trim() !== '') {
        add(taskInput.value);
    }
});