import { ServerRequest } from "https://deno.land/std@0.50.0/http/server.ts";

/**
* @description function method for handling message, and value must be string or json
*/
export function send(req: ServerRequest, code: number, msg: any) {
      switch(typeof msg) {
            case "object":
              const jsonMsg = JSON.stringify(msg);
              const json = req.respond({
                  status: code,
                  body: jsonMsg,
                  headers: new Headers({"content-type": "application/json"})
              });
               return json;
            case "string" :
              const textMsg = `${msg}`;
              const text = req.respond({
                  status: code,
                  body: textMsg,
                  headers: new Headers({"content-type": "text/html"})
               });
               return text;
            default :
            return req.respond({
              status: 500,
              body: JSON.stringify({errorMessage: "value must be string or object"}),
              headers: new Headers({"content-type": "application/json"})
            });
      }
}