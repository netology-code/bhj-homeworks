document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.getElementById('tasks__list');
    const inputTask = document.getElementById('task__input');
    const addButton = document.getElementById('tasks__add');
  
    function addTask(taskContent) {
        const taskHTML = `
            <div class="task">
                <div class="task__title">
                    ${taskContent}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `;
        taskList.insertAdjacentHTML('beforeend', taskHTML);
  
        const removeButtons = taskList.querySelectorAll('.task__remove');
        const lastRemoveButton = removeButtons[removeButtons.length - 1];
        lastRemoveButton.addEventListener('click', function() {
            lastRemoveButton.parentElement.remove();
        });
    }
  
    addButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        if (inputTask.value.trim() !== '') {
            addTask(inputTask.value.trim());
            inputTask.value = ''; 
        }
    });
  });
  