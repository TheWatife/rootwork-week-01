const tasks = [
  {
    title: "Cybersecurity",
    category: "Linux",
    completed: false,
    priority: "low",
  },

  {
    title: "Frontend Development",
    category: "Styling",
    completed: true,
    priority: "high",
  },
  {
    title: "Backend Development",
    category: "Pseudocode",
    completed: true,
    priority: "low",
  },
  {
    title: "Mobile Development",
    category: "Installation",
    completed: false,
    priority: "low",
  },

  {
    title: "Full-Stack Development",
    category: "API",
    completed: false,
    priority: "high",
  },
  {
    title: "Crypto",
    category: "Charts",
    completed: true,
    priority: "low",
  },
];

function tasksAssigned() {
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    console.log(`
        Title: ${task.title}
        Category: ${task.category}
        Completed: ${task.completed}
        Priority: ${task.priority}
           `);
  }
}

function tasksCompleted() {
  let completedTasks = 0;
  for (let i = 0; i < tasks.length; i++) {
    const completed = tasks[i].completed;

    if (completed === true) {
      completedTasks++;
    }
  }
  const pending = tasks.length - completedTasks;

  console.log(tasks.length);
  console.log(`Completed Tasks: ${completedTasks}`);
  console.log(`Pending Tasks: ${pending}`);
}

function priorityTasks() {
  //   let highPriority = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].priority === "high" && tasks[i].completed === false) {
      //   highPriority++;
      console.log(`
        Title: ${tasks[i].title}
        Category: ${tasks[i].category}
        Completed: ${tasks[i].completed}
        Priority: ${tasks[i].priority}
           `);
    } else {
      ("All priority tasks ahs been completed");
    }
  }

  //   console.log(`Uncompleted priority tasks: ${highPriority}`);
}

function categoryTasks() {
  const categories = ["Styling", "Installation"];

  for (let j = 0; j < categories.length; j++) {
    let count = 0;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].category === categories[j]) {
        count++;
      }
    }
    console.log(`${categories[j]}: ${count} tasks`);
  }
}

function addedTask() {
  tasks.push({
    title: "Frontend",
    category: "Animation",
    completed: false,
    priority: "high",
  });
}

tasksAssigned();
tasksCompleted();
priorityTasks();
categoryTasks();
addedTask();
tasksAssigned();
