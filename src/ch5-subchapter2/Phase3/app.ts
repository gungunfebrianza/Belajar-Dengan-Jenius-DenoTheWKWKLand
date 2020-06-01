import { Application, bgGreen, black } from "./deps.ts";
import userController from "./user.controller.ts";

const app = new Application();

app.use(userController.routes());
app.use(userController.allowedMethods());

console.log(bgGreen(black("Server started on port 7000")));
await app.listen({ port: 7000 });
