import { Application, bgGreen, black } from "./deps.ts";
import mainRouter from "./router.ts";
import { IUser } from "./types.ts";

const app = new Application<{
  user: Omit<IUser, "password"> | null;
}>();

app.use(mainRouter.routes());
app.use(mainRouter.allowedMethods());

console.log(bgGreen(black("Server started on port 7000")));
await app.listen({ port: 7000 });
