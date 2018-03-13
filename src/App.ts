import * as express from "express";
import ToDoRouter from "./ToDo/toDoRouter";

class App {
  public express;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    let router: express.Router;
    router = express.Router();
    ToDoRouter.create(router);
    this.express.use(router);
  }
}

export default new App().express;
