import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.post("/login", (ctx: Context) => {
  ctx.response.body = "Success!";
}).get("/guest", (ctx: Context) => {
  ctx.response.body = "Guest!";
}).get("/auth", (ctx: Context) => {
  ctx.response.body = "Auth Success";
});

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
