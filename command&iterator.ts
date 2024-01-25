//funtion: to-do list

// Command Pattern
interface Command {
  execute(): void;
}

class AddTaskCommand implements Command {
  constructor(private taskList: TaskList, private task: Task) {}

  execute(): void {
    this.taskList.addTask(this.task);
  }
}

class RemoveTaskCommand implements Command {
  constructor(private taskList: TaskList, private task: Task) {}

  execute(): void {
    this.taskList.removeTask(this.task);
  }
}

// Iterator Pattern
interface Iterator<T> {
  next(): T;
  hasNext(): boolean;
}

class TaskListIterator implements Iterator<Task> {
  private index: number = 0;

  constructor(private tasks: Task[]) {}

  next(): Task {
    return this.tasks[this.index++];
  }

  hasNext(): boolean {
    return this.index < this.tasks.length;
  }
}

// Iterable Collection
class TaskList implements Iterable<Task> {
  private tasks: Task[] = [];

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  removeTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  // Iterator creation
  createIterator(): Iterator<Task> {
    return new TaskListIterator(this.tasks);
  }

  // Other methods for managing tasks...
}

// Task model
class Task {
  constructor(public name: string) {}
}

// Client code
const taskList = new TaskList();

const addTaskCommand = new AddTaskCommand(taskList, new Task("Do laundry"));
const removeTaskCommand = new RemoveTaskCommand(
  taskList,
  new Task("Do laundry")
);

const invoker = new Command();
invoker.setCommand(addTaskCommand);
invoker.executeCommand();

invoker.setCommand(removeTaskCommand);
invoker.executeCommand();

// Iterator usage
const iterator = taskList.createIterator();
while (iterator.hasNext()) {
  const task = iterator.next();
  console.log(`Task: ${task.name}`);
}
