import * as express from "express";
import UserRouter from "./User/router";

class App {
  public express;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    let router: express.Router;
    router = express.Router();
    UserRouter.create(router);
    this.express.use(router);
  }
}

export default new App().express;
