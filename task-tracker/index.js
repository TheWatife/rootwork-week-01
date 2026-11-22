const list = document.querySelector("ul");
const input = document.querySelector("input");
const addBtn = document.querySelector("button");
const filterBtn = document.querySelectorAll(".show");

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
  });
  list.appendChild(li);
  input.value = "";
  delBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    li.remove();
  });
});
filterBtn.forEach((taskList) => {
  taskList.addEventListener("click", function (e) {
    const filter = e.target.dataset.filter;
    const tasks = document.querySelectorAll("li");

    tasks.forEach(function (task) {
      const isCompleted = task.classList.contains("completed");
      if (filter === "all") {
        task.style.display = "list-item";
      } else if (filter === "active" && !isCompleted) {
        task.style.display = "list-item";
      } else if (filter === "completed" && isCompleted) {
        task.style.display = "list-item";
      } else task.style.display = "none";

      // if (filter === "active" && !isCompleted) {
      //   task.style.display = "list-item";
      // } else {
      //   task.style.display = "none";
      // }
    });
  });
});
