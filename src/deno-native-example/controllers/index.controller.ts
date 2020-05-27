import { Response, ServerRequest } from "https://deno.land/std@0.50.0/http/server.ts";
import { send } from "../helpers/flash.ts";
import { render } from "../helpers/render.ts";

interface IindexController {
  viewController: Function;
  fetchController: Function;
}

export const indexController: IindexController = {

  viewController: function (req: ServerRequest, res: Response) {
    render(req, "index.html");
  },

  fetchController: function (req: ServerRequest, res: Response) {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res: any) => res.json())
      .then((body: any[]) => {
        send(req, 200, body);
      })
      .catch((err: any) => {
        send(req, 404, { message: "data not found" });
      });
  }

};
