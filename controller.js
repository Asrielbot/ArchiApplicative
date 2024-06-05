class TaskController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Afficher les tâches initiales
    this.view.displayTasks(this.model.getTasks());

    // Lier la vue et le modèle
    this.view.bindAddTask(this.handleAddTask.bind(this));
  }

  handleAddTask(description, category) {
    const task = new AdvancedTask(description, category);
    this.model.addTask(task);
    this.view.displayTasks(this.model.getTasks());
  }
}

// Instancier le contrôleur
const taskController = new TaskController(taskModel, taskView);
