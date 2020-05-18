import { ServerRequest } from "https://deno.land/std@0.50.0/http/server.ts";
export function render(req: ServerRequest, template: string): void {
  if (typeof template === "string") {
    const decoded = new TextDecoder("utf-8");
    const file = Deno.readFileSync(`${Deno.cwd()}/views/${template}`);
    const view = decoded.decode(file);
    req.respond({
      status: 200,
      headers: new Headers({ "content-type": "text/html" }),
      body: view,
    });
  }
}
