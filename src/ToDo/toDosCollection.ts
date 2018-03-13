import ToDo from "./toDo";

export default class ToDos {
  private _todos: ToDo[];

  addToDo(todo: ToDo): void {
    this._todos.push(todo);
  }

  deleteToDo(id: number): void {
    // TODO: delete
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
}
