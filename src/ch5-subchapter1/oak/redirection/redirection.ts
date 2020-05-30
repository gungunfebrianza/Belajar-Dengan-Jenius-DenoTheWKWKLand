import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.redirect("https://deno.land/");
});

await app.listen({ port: 8000 });
