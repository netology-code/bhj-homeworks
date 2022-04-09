const task__input = document.getElementById('task__input');
const tasks__form = document.getElementById('tasks__form');
const tasks__list = document.getElementById('tasks__list');
const task = document.querySelector('.task');
const task_added = task.cloneNode(true);
task.remove();


tasks__form.addEventListener('submit', function(e) {
    e.preventDefault();
    
task_added.querySelector('.task__title').textContent = task__input.value;

    if (task__input.value.trim()) {

        tasks__list.appendChild(task_added);
        const task_next = task_added.cloneNode(true);
        task_added.replaceWith(task_next);
        task__input.value = '';

        const task__remove_arr = Array.from(document.querySelectorAll('.task__remove'));
        for (const task__remove of task__remove_arr) {
            task__remove.addEventListener('click', function(e) {
                task__remove.parentElement.remove();
                e.preventDefault();
            });
        }
    }
});
