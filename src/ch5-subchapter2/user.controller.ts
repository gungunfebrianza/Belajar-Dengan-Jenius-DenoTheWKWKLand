import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/users", (context) => {
  const user = {
    id: 1,
    name: "Maudy Ayunda",
    email: "gungunfebrianza@gmail.com",
  };
  context.response.body = [user];
});
