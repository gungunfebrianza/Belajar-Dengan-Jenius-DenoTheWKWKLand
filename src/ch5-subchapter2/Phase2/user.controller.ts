import { Router, Context } from "https://deno.land/x/oak/mod.ts";
import db from "./db.ts";

const router = new Router();

router
  .get("/user", async (context) => {
    try {
      const result = await db.query({
        text: 'SELECT * FROM "account";',
      });
      context.response.body = result.rowsOfObjects();
    } catch (error) {
      console.log(error);
      context.throw(error);
    }
  })
  .get("/user/:id", async (context) => {
    try {
      if (context.params && context.params.id) {
        const result = await db.query({
          text: 'SELECT * FROM "account" WHERE user_id = $1;',
          args: [context.params.id],
        });
        context.response.body = result.rowsOfObjects()[0];
      }
    } catch (error) {
      console.log(error);
      context.throw(error);
    }
  }).post("/user", async (Context) => {
    try {
      if (Context.request.hasBody) {
        const body = await Context.request.body({
          contentTypes: {
            text: ["application/javascript"],
          },
        });
        console.log(body.value);
        const data = body.value;
        const result = await db.query({
          text:
            'INSERT INTO "account" (username, password, email, created_on) VALUES ($1, $2, $3, NOW()) RETURNING *;',
          args: [data.username, data.password, data.email],
        });
        Context.response.body = result.rowsOfObjects()[0];
      }
    } catch (error) {
      console.log(error);
    }
  }).put("/user/:id", async (context) => {
    try {
      if (context.params && context.params.id) {
        const id = context.params.id;
        const body = await context.request.body({
          contentTypes: {
            text: ["application/javascript"],
          },
        });
        const data = body.value;
        const result = await db.query({
          text:
            'UPDATE "account" SET username = $2, password = $3, email = $4 WHERE user_id = $1 RETURNING *;',
          args: [id, data.username, data.password, data.email],
        });
        context.response.body = result.rowsOfObjects()[0];
      }
    } catch (err) {
      console.log(err);
      context.throw(err);
    }
  }).delete("/user/:id", async (context) => {
    if (context.params && context.params.id) {
      const { id } = context.params;
      const result = await db.query({
        text: 'DELETE FROM "account" WHERE user_id = $1 RETURNING user_id;',
        args: [id],
      });
      if (result.rows.length) {
        context.response.status = 204;
      }
    }
  });

export default router;
