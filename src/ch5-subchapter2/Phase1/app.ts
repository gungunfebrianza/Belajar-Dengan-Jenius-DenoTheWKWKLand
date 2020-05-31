import { Application } from "https://deno.land/x/oak/mod.ts";
import userController from "./user.controller.ts";

const app = new Application();

app.use(userController.routes());
app.use(userController.allowedMethods());

console.log("Server Listen");
await app.listen({ port: 8000 });
