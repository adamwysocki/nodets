/**
 * / class
 *
 * @class ToDo
 */
export default class ToDo {
  private readonly _id: number = 0;
  private readonly _name: string;
  private readonly _done: boolean = false;

  constructor(id: number = 0, name: string, done: boolean = false) {
    this._id = id;
    this._name = name;
    this._done = done;
  }

  // getter & setter for name
  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this.errorImmutable("name");
  }

  // getter & setter for done
  get done(): boolean {
    return this._done;
  }

  set done(newDone: boolean) {
    this.errorImmutable("done");
  }

  //getter & setter for id
  get id(): number {
    return this._id;
  }

  set id(newId: number) {
    this.errorImmutable("id");
  }

  errorImmutable(field) {
    console.warn(`Unable to update ${field} on ToDo. ToDo class is immutable.`);
  }
}
