import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router
  .get("/user", (context) => {
    const user = {
      id: 1,
      name: "Maudy Ayunda",
      email: "gungunfebrianza@gmail.com",
    };
    context.response.body = [user];
  })
  .get("/user/:id", (context) => {
    if (context.params && context.params.id) {
      const user = {
        id: context.params.id,
        name: "Maudy Ayunda",
        email: "gungunfebrianza@gmail.comsasdasd",
      };
      context.response.body = [user];
    }
  });

export default router;
