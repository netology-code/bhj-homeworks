const task__input = document.getElementById('task__input');
const tasks__form = document.getElementById('tasks__form');
const tasks__list = document.getElementById('tasks__list');
const task = document.querySelector('.task');
const task_added = task.cloneNode(true);

task__input.addEventListener('input', function(e) {
    if (task__input.value) {
        tasks__form.addEventListener('submit', function(e) {
            task_added.querySelector('.task__title').textContent = task__input.value;
            tasks__list.appendChild(task_added);
            e.preventDefault();
        });
        const task_next = task_added.cloneNode(true);
        task_added.replaceWith(task_next);
    }
    e.preventDefault();
});

const task__remove = document.querySelector('.task__remove');
task__remove.addEventListener('click', function(e) {
    task__remove.parentElement.remove();
    e.preventDefault();
});
