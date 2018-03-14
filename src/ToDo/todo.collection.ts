import ToDo from "./todo";

class ToDoCollection {
  private _todos: ToDo[];
  private _nextId: number = 1;

  constructor() {
    this._todos = [];
  }

  add(todo: ToDo): ToDo {
    this._todos.push(todo);
    this._nextId++;
    return todo;
  }

  get(id: number): ToDo {
    var todos = this._todos.filter(todo => {
      return todo.id === id;
    });
    return todos[0];
  }

  delete(id: number): number {
    var todos = this._todos.filter(todo => {
      return todo.id !== id;
    });
    this._todos = todos;
    return id;
  }

  toggleDone(id: number): void {
    // TODO: toggleDone
  }

  findAll(): ToDo[] {
    var todos = [...this._todos];
    return todos;
  }

  findDone(): ToDo[] {
    var doneToDos = this._todos.filter(todo => {
      return todo.done === true;
    });
    return doneToDos;
  }

  findNotDone(): ToDo[] {
    var notDoneToDos = this._todos.filter(todo => {
      return todo.done === false;
    });
    return notDoneToDos;
  }

  getNextId(): number {
    return this._nextId;
  }

  count(): number {
    return this._todos.length;
  }
}

const ToDos = new ToDoCollection();
export default ToDos;
