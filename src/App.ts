import * as express from "express";
import { ToDoRouter } from "./ToDo";
import * as bodyParser from "body-parser";

class App {
  public express;

  constructor() {
    this.express = express();
    this.config();
    this.mountRoutes();
  }

  private config() {
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(bodyParser.json());
  }

  private mountRoutes(): void {
    let router: express.Router;
    router = express.Router();
    ToDoRouter.create(router);
    this.express.use(router);
  }
}

export default new App().express;
