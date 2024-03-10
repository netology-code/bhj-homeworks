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

      const removeButton = taskList.querySelector('.task__remove:last-child');
      removeButton.addEventListener('click', function() {
          removeButton.parentElement.remove();
      });
  }

  addButton.addEventListener('click', function(event) {
      event.preventDefault(); 
      if (inputTask.value.trim() !== '') {
          addTask(inputTask.value.trim());
          inputTask.value = ''; 
      }
  });

  inputTask.addEventListener('keypress', function(event) {
      if (event.key === 'Enter' && inputTask.value.trim() !== '') {
          addTask(inputTask.value.trim());
          inputTask.value = ''; 
      }
  });
});
