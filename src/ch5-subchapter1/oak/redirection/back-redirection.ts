import { Application, REDIRECT_BACK } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.redirect(REDIRECT_BACK, "/home");
});

await app.listen({ port: 8000 });
