import * as express from "express";

/**
 * / route
 *
 * @class UserRouter
 */
export default class UserRouter {
  /**
   * Create the routes.
   *
   * @class UserRouter
   * @method create
   * @param router {express.Router} The express router
   * @static
   */
  public static create(router: express.Router) {
    console.log("Creating user routes");

    router.get("/api/v1/user", (request, response) => {
      new UserRouter().find(request, response);
    });

    router.get("/api/v1/user/:id", (request, response) => {
      new UserRouter().get(request, response);
    });

    router.post("/api/v1/user", (request, response) => {
      new UserRouter().create(request, response);
    });

    router.put("/api/v1/user/:id", (request, response) => {
      new UserRouter().replace(request, response);
    });

    router.patch("/api/v1/user/:id", (request, response) => {
      new UserRouter().update(request, response);
    });

    router.delete("/api/v1/user/:id", (request, response) => {
      new UserRouter().delete(request, response);
    });
  }

  /**
   * @class UserRouter
   * @method find
   * @param request {express.Request}
   * @param response {express.Response}
   */
  public find(request: express.Request, response: express.Response) {
    response.json({ message: "Find User" });
  }

  /**
   * @class UserRouter
   * @method get
   * @param request {express.Request}
   * @param response {express.Response}
   */
  public get(request: express.Request, response: express.Response) {
    response.json({ message: "Get User" });
  }

  /**
   * @class UserRouter
   * @method create
   * @param request {express.Request}
   * @param response {express.Response}
   */
  public create(request: express.Request, response: express.Response) {
    response.json({ message: "Create User" });
  }

  /**
   * @class UserRouter
   * @method replace
   * @param request {express.Request}
   * @param response {express.Response}
   */
  public replace(request: express.Request, response: express.Response) {
    response.json({ message: "Replace User" });
  }

  /**
   * @class UserRouter
   * @method update
   * @param request {express.Request}
   * @param response {express.Response}
   */

  public update(request: express.Request, response: express.Response) {
    response.json({ message: "Update User" });
  }

  /**
   * @class UserRouter
   * @method delete
   * @param request {express.Request}
   * @param response {express.Response}
   */

  public delete(request: express.Request, response: express.Response) {
    response.json({ message: "Delete User" });
  }
}
