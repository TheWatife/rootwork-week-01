const list = document.querySelector("ul");
const input = document.querySelector("input");
const addBtn = document.querySelector("button");
const addTask = addBtn.addEventListener("click", function addItem(e) {
  e.preventDefault();
  const li = document.createElement("li");
  const btn = document.createElement("button");
  li.textContent = input.value;
  btn.textContent = "Remove Task";
  list.appendChild(li);
  list.appendChild(btn);
  input.value = "";
});

// const deleteTask =
