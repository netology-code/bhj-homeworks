let tasksAdd = document.getElementById("tasks__add");
let tasksList = document.getElementById("tasks__list");
let taskInput = document.getElementById("task__input");
let tasks = [];
let toLocalStorage, fromLocalStorage;

window.addEventListener("load", renderFromLocalStorage);

tasksAdd.addEventListener("click", function (event) {
  taskAdd();
  event.preventDefault();
});

taskInput.addEventListener("keypress", function (event) {
  if (event.key.toLowerCase() === "enter") {
    taskAdd();
    event.preventDefault();
  }
});

tasksList.addEventListener("click", function (event) {
  if (event.target.classList.contains("task__remove")) {
    tasks.forEach((e, i) => {
      if (
        event.target.closest(".task").querySelector(".task__title")
          .innerText === e.taskText
      ) {
        tasks.splice(i, 1);
      }
    });

    toLocalStorage = JSON.stringify(tasks);
    localStorage.setItem("tasks", toLocalStorage);
    event.target.closest(".task").remove();
  }
});

function taskAdd() {
  if (taskInput.value.length > 0) {
    tasksList.innerHTML += `
            <div class="task">
                <div class="task__title">
                    ${taskInput.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `;

    obj = {
      taskText: taskInput.value,
    };

    taskInput.value = "";
    tasks.push(obj);
    toLocalStorage = JSON.stringify(tasks);
    localStorage.setItem("tasks", toLocalStorage);
  } else {
    return false;
  }
}

function renderFromLocalStorage() {
  fromLocalStorage = localStorage.getItem("tasks");

  if (fromLocalStorage !== null) {
    fromLocalStorage = JSON.parse(localStorage.getItem("tasks"));

    tasks = fromLocalStorage;

    tasks.forEach((e) => {
      tasksList.innerHTML += `
                <div class="task">
                    <div class="task__title">
                        ${e.taskText}
                    </div>
                    <a href="#" class="task__remove">&times;</a>
                </div>
            `;
    });
  }
}
