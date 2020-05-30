import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const controller = new AbortController();
const { signal } = controller;

app.use((ctx) => {
  ctx.response.body = "Hello World!";
  controller.abort();
});

await app.listen({ port: 8000, signal });
console.log("Server closed.");
