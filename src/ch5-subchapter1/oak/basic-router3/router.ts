import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";
import { login, guest, auth } from "./r.ts";

const router = new Router();

router.post("/login", login).get("/guest", guest).get("/auth", auth);

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
