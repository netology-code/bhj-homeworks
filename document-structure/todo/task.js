document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.getElementById('tasks__list');
    const inputTask = document.getElementById('task__input');
    const addButton = document.getElementById('tasks__add');
  
    function addTask(taskContent) {
      const task = document.createElement('div');
      task.classList.add('task');
  
      const taskTitle = document.createElement('div');
      taskTitle.classList.add('task__title');
      taskTitle.textContent = taskContent;
  
      const removeButton = document.createElement('a');
      removeButton.classList.add('task__remove');
      removeButton.innerHTML = '&times;';
  
      task.appendChild(taskTitle);
      task.appendChild(removeButton);
      taskList.appendChild(task);
  
      inputTask.value = ''; 
  
      removeButton.addEventListener('click', function() {
        task.remove();
      });
    }
  
    addButton.addEventListener('click', function(event) {
      event.preventDefault(); 
      if (inputTask.value.trim() !== '') {
        addTask(inputTask.value.trim());
      }
    });
  
    inputTask.addEventListener('keypress', function(event) {
      if (event.key === 'Enter' && inputTask.value.trim() !== '') {
        addTask(inputTask.value.trim());
      }
    });
  });
  