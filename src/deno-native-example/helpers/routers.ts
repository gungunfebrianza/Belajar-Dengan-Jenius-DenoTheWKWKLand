import {
  Response,
  ServerRequest,
} from "https://deno.land/std@0.50.0/http/server.ts";

/**
* @description interface schema for route configs
*/
interface IrouteConfigs {
  get: Function;
  post: Function;
  delete: Function;
  put: Function;
  all: Function;
}

/**
* @description function method for handling router http method
*/
let methods: any = {};

/**
* @description configs route
*/
let routeConfigs: IrouteConfigs = {
  get: function (method: string, path: string, handler: Function) {
    methods[method + path] = handler;
  },
  post: function (method: string, path: string, handler: Function) {
    methods[method + path] = handler;
  },
  delete: function (method: string, path: string, handler: Function) {
    methods[method + path] = handler;
  },
  put: function (method: string, path: string, handler: Function) {
    methods[method + path] = handler;
  },
  all: function (method: string, path: string, handler: Function) {
    methods[method + path] = handler;
  },
};

/**
* method for handling http server
*
*@param req - ServerRequest
*@param res - ServerResponse
*/
export function httpRouter(req: ServerRequest, res: Response) {
  let url = req.url;
  switch (typeof methods[req.method + url] === "function" && req.method) {
    case "GET":
    case "POST":
    case "DELETE":
    case "PUT":
    case "PATCH":
    case "OPTIONS":
    case "HEAD":
      methods[req.method + url](req, res);
      console.log("server is running");
      return;
    default:
      let message = `${req.method} ${url} not found`;
      req.respond({
        status: 404,
        body: message,
        headers: new Headers({ "content-type": "text/html" }),
      });
  }
}

/**
* @description function method for handling route from user
*/

export const router: IrouteConfigs = {
  get: function (path: string, handler: Function) {
    routeConfigs.get("GET", path, handler);
  },
  post: function (path: string, handler: Function) {
    routeConfigs.post("POST", path, handler);
  },
  delete: function (path: string, handler: Function) {
    routeConfigs.delete("DELETE", path, handler);
  },
  put: function (path: string, handler: Function) {
    routeConfigs.put("PUT", path, handler);
  },
  all: function (path: string, handler: Function) {
    routeConfigs.all("GET", path, handler);
    routeConfigs.all("POST", path, handler);
    routeConfigs.all("DELETE", path, handler);
    routeConfigs.all("PUT", path, handler);
    routeConfigs.all("HEAD", path, handler);
    routeConfigs.all("PATCH", path, handler);
    routeConfigs.all("OPTIONS", path, handler);
  },
};
