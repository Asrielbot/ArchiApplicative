class Task {
  constructor(description) {
    this.description = description;
  }
}

class AdvancedTask extends Task {
  constructor(description, category) {
    super(description);
    this.category = category;
  }
}

class TaskModel {
  constructor() {
    if (TaskModel.instance) {
      return TaskModel.instance;
    }
    this.tasks = [];
    TaskModel.instance = this;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }

  static getInstance() {
    if (!TaskModel.instance) {
      TaskModel.instance = new TaskModel();
    }
    return TaskModel.instance;
  }
}

// Exporter une instance du modèle
const taskModel = TaskModel.getInstance();
