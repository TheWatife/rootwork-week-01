const body = document.querySelector("body");
const list = document.querySelector("ul");
const input = document.querySelector("input");
const addBtn = document.querySelector("button");
const filterBtn = document.querySelectorAll(".show");
const taskCounter = document.querySelector("#counter");

function updateCounter() {
  const tasks = list.querySelectorAll("li");

  const uncompleted = [...tasks].filter(
    (task) => !task.classList.contains("completed"),
  ).length;

  taskCounter.textContent = `Uncompleted tasks: ${uncompleted}`;
}

addBtn.addEventListener("click", function addItem(e) {
  e.preventDefault();
  if (input.value.trim() === "") {
    return (input.value = "");
  }
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  li.textContent = input.value;
  delBtn.textContent = "Remove Task";
  li.appendChild(delBtn);
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
    updateCounter();
  });
  list.appendChild(li);
  input.value = "";
  updateCounter();

  delBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    li.remove();
    updateCounter();
  });
});

filterBtn.forEach((taskList) => {
  taskList.addEventListener("click", function (e) {
    const filter = e.target.dataset.filter;
    const tasks = list.querySelectorAll("li");

    tasks.forEach(function (task) {
      const isCompleted = task.classList.contains("completed");
      if (filter === "all") {
        task.style.display = "list-item";
      } else if (filter === "active" && !isCompleted) {
        task.style.display = "list-item";
      } else if (filter === "completed" && isCompleted) {
        task.style.display = "list-item";
      } else {
        task.style.display = "none";
      }
    });

    const completedTasks = [...tasks].filter((task) =>
      task.classList.contains("completed"),
    );

    let noTask = document.querySelector("#noTask");

    if (!noTask) {
      noTask = document.createElement("p");
      noTask.id = "noTask";
      list.appendChild(noTask);
    }

    if (filter === "all" && tasks.length === 0) {
      noTask.textContent = "No tasks yet";
    } else if (
      filter === "active" &&
      completedTasks.length === tasks.length &&
      tasks.length > 0
    ) {
      noTask.textContent = "No active tasks";
    } else if (filter === "completed" && completedTasks.length === 0) {
      noTask.textContent = "No completed tasks";
    } else {
      noTask.textContent = "";
    }
  });
});
