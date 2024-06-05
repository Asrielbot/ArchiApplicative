class TaskRenderer {
  render(task) {
    throw new Error("Method 'render()' must be implemented.");
  }
}

class TravailTaskRenderer extends TaskRenderer {
  render(task) {
    const taskElement = document.createElement("div");
    taskElement.className = "task-item task-travail";
    taskElement.textContent = task.description;
    return taskElement;
  }
}

class MaisonTaskRenderer extends TaskRenderer {
  render(task) {
    const taskElement = document.createElement("div");
    taskElement.className = "task-item task-maison";
    taskElement.textContent = task.description;
    return taskElement;
  }
}

class DiversTaskRenderer extends TaskRenderer {
  render(task) {
    const taskElement = document.createElement("div");
    taskElement.className = "task-item task-divers";
    taskElement.textContent = task.description;
    return taskElement;
  }
}

class TaskView {
  constructor() {
    this.taskListElement = document.getElementById("task-list");
    this.taskForm = document.getElementById("task-form");
    this.taskInput = document.getElementById("task-input");
    this.taskCategory = document.getElementById("task-category");
  }

  displayTasks(tasks) {
    this.taskListElement.innerHTML = "";
    tasks.forEach((task) => {
      let renderer;
      if (task.category === "travail") {
        renderer = new TravailTaskRenderer();
      } else if (task.category === "maison") {
        renderer = new MaisonTaskRenderer();
      } else if (task.category === "divers") {
        renderer = new DiversTaskRenderer();
      }
      this.taskListElement.appendChild(renderer.render(task));
    });
  }

  clearInput() {
    this.taskInput.value = "";
  }

  bindAddTask(handler) {
    this.taskForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (this.taskInput.value.trim()) {
        handler(this.taskInput.value, this.taskCategory.value);
        this.clearInput();
      }
    });
  }
}

// Exporter une instance de la vue
const taskView = new TaskView();
