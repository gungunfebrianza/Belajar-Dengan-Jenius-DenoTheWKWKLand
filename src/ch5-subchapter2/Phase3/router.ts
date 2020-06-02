import { Router } from "./deps.ts";
import db from "./db.ts";
import { errorHandler } from "./util.ts";

const router = new Router();

router.get("/", (context) => {
  context.response.body = "Index";
});

router
  .get("/api/v1/accounts", async (context) => {
    try {
      const result = await db.query({
        text: 'SELECT * FROM "account";',
      });
      context.response.body = result.rowsOfObjects();
    } catch (error) {
      errorHandler(error, context);
    }
  })
  .get("/api/v1/account/:id", async (context) => {
    try {
      if (context.params && context.params.id) {
        const result = await db.query({
          text: 'SELECT * FROM "account" WHERE user_id = $1;',
          args: [context.params.id],
        });
        context.response.body = result.rowsOfObjects()[0];
      }
    } catch (error) {
      errorHandler(error, context);
    }
  }).post("/api/v1/account", async (context) => {
    try {
      if (context.request.hasBody) {
        const body = await context.request.body({
          contentTypes: {
            text: ["application/javascript"],
          },
        });
        const data = body.value;
        const result = await db.query({
          text:
            'INSERT INTO "account" (username, password, email, created_on) VALUES ($1, $2, $3, NOW()) RETURNING *;',
          args: [data.username, data.password, data.email],
        });
        context.response.body = result.rowsOfObjects()[0];
      }
    } catch (error) {
      errorHandler(error, context);
    }
  }).put("/api/v1/account/:id", async (context) => {
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
    } catch (error) {
      errorHandler(error, context);
    }
  }).delete("/api/v1/account/:id", async (context) => {
    try {
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
    } catch (error) {
      errorHandler(error, context);
    }
  });

export default router;
