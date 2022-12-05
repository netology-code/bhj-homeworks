const tasksList = document.querySelector('.tasks__list');
const task = document.querySelector('.task');
const tasksInput = document.querySelector('.tasks__input');
const buttonAdd = document.querySelector('.tasks__add');

tasksInput.addEventListener('keyup', (e) => {
    if (e.code === 'Enter' && tasksInput.value !== '') {
        buttonAdd.click();
        tasksList.insertAdjacentHTML("beforeend", 
        `<div class="task">
            <div class="task__title">
                ${tasksInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`);
        tasksInput.value = '';
        e.preventDefault();
    }
})

tasksList.addEventListener('click', (e) => {
    const taskRemove = Array.from(document.querySelectorAll('.task__remove'));
    const target = e.target;
    taskRemove.forEach(el => {
        const parent = el.closest('.task');
        if (target === el) {
            parent.remove();
        }
    })
})


