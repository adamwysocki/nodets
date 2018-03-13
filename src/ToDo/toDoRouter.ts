import * as express from "express";

/**
 * / route
 *
 * @class ToDoRouter
 */
export default class ToDoRouter {
  /**
   * Create the routes.
   *
   * @class ToDoRouter
   * @method create
   * @param router {express.Router} The express router
   * @static
   */
  public static create(router: express.Router) {
    console.log("Creating ToDo routes");

    router.get("/api/v1/todo", (request, response) => {
      new ToDoRouter().find(request, response);
    });

    router.get("/api/v1/todo/:id", (request, response) => {
      new ToDoRouter().get(request, response);
    });

    router.post("/api/v1/todo", (request, response) => {
      new ToDoRouter().create(request, response);
    });

    router.put("/api/v1/todo/:id", (request, response) => {
      new ToDoRouter().replace(request, response);
    });

    router.patch("/api/v1/todo/:id", (request, response) => {
      new ToDoRouter().update(request, response);
    });

    router.delete("/api/v1/todo/:id", (request, response) => {
      new ToDoRouter().delete(request, response);
    });
  }

  /**
   * @class ToDoRouter
   * @method find
   * @param request {express.Request}
   * @param response {express.Response}
   */
  public find(request: express.Request, response: express.Response) {
    response.json({ message: "Find ToDo" });
  }

  /**
   * @class ToDoRouter
   * @method get
   * @param request {express.Request}
   * @param response {express.Response}
   */
  public get(request: express.Request, response: express.Response) {
    response.json({ message: "Get ToDo" });
  }

  /**
   * @class ToDoRouter
   * @method create
   * @param request {express.Request}
   * @param response {express.Response}
   */
  public create(request: express.Request, response: express.Response) {
    response.json({ message: "Create ToDo" });
  }

  /**
   * @class ToDoRouter
   * @method replace
   * @param request {express.Request}
   * @param response {express.Response}
   */
  public replace(request: express.Request, response: express.Response) {
    response.json({ message: "Replace ToDo" });
  }

  /**
   * @class ToDoRouter
   * @method update
   * @param request {express.Request}
   * @param response {express.Response}
   */
  public update(request: express.Request, response: express.Response) {
    response.json({ message: "Update ToDo" });
  }

  /**
   * @class ToDoRouter
   * @method delete
   * @param request {express.Request}
   * @param response {express.Response}
   */
  public delete(request: express.Request, response: express.Response) {
    response.json({ message: "Delete ToDo" });
  }
}
