import * as express from "express";
import ToDoController from "./todo.controller";
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
      console.log("request:", JSON.stringify(request.body, null, 4));
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
    var result = ToDoController.find();
    response.json({ todos: result });
  }

  /**
   * @class ToDoRouter
   * @method get
   * @param request {express.Request}
   * @param response {express.Response}
   */
  public get(request: express.Request, response: express.Response) {
    console.log("param:", JSON.stringify(request.params, null, 4));
    var result = ToDoController.get(request.params.id);
    response.json({ todo: result });
  }

  /**
   * @class ToDoRouter
   * @method create
   * @param request {express.Request}
   * @param response {express.Response}
   */
  public create(request: express.Request, response: express.Response) {
    var result = ToDoController.post(request.body.name, request.body.done);
    response.json({ todo: result });
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
    var result = ToDoController.update(request.params.id, request.body.name || null, request.body.done || null);
    response.json({ message: result });
  }

  /**
   * @class ToDoRouter
   * @method delete
   * @param request {express.Request}
   * @param response {express.Response}
   */
  public delete(request: express.Request, response: express.Response) {
    var result = ToDoController.delete(request.params.id);
    response.json({ id: result });
  }
}
