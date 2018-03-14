import ToDo from "./todo";
import ToDos from "./todo.collection";

export default class ToDoController {
  static post(name, done): ToDo {
    var nextId = ToDos.getNextId();
    var t = new ToDo(nextId, name, done);
    return ToDos.add(t);
  }

  static find(): ToDo[] {
    return ToDos.findAll();
  }

  static get(id): ToDo {
    return ToDos.get(parseInt(id, 10));
  }

  static delete(id): number {
    return ToDos.delete(parseInt(id, 10));
  }

  static update(id, name, done): ToDo {
    var originalToDo = ToDos.get(parseInt(id, 10));
    ToDos.delete(parseInt(id, 10));
    var newName = name || originalToDo.name;
    var newDone = done || originalToDo.done;
    var newToDo = new ToDo(parseInt(id, 10), newName, newDone);
    return ToDos.add(newToDo);
  }
}
