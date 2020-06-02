import { RouterContext } from "../deps.ts";
import { errorHandler } from "../util.ts";
import pgClient from "../db.ts";

export async function signUp(context: RouterContext) {
  const { request, response } = context;
  try {
    if (context.request.hasBody) {
      const body = await request.body({
        contentTypes: {
          text: ["application/javascript"],
        },
      });
      const data = body.value;
      const result = await pgClient.query({
        text:
          'INSERT INTO "account" (username, password, email, created_on) VALUES ($1, $2, $3, NOW()) RETURNING *;',
        args: [data.username, data.password, data.email],
      });
      response.body = result.rowsOfObjects()[0];
    }
  } catch (error) {
    errorHandler(error, context);
  }
}

export async function getAll(context: RouterContext) {
  try {
    const result = await pgClient.query({
      text: 'SELECT * FROM "account";',
    });
    context.response.body = result.rowsOfObjects();
  } catch (error) {
    errorHandler(error, context);
  }
}

export async function getByID(context: RouterContext) {
  const { request, response, params } = context;
  try {
    if (params && params.id) {
      const result = await pgClient.query({
        text: 'SELECT * FROM "account" WHERE user_id = $1;',
        args: [params.id],
      });
      response.body = result.rowsOfObjects()[0];
    }
  } catch (error) {
    errorHandler(error, context);
  }
}

export async function updateByID(context: RouterContext) {
  try {
    if (context.params && context.params.id) {
      const id = context.params.id;
      const body = await context.request.body({
        contentTypes: {
          text: ["application/javascript"],
        },
      });
      const data = body.value;
      const result = await pgClient.query({
        text:
          'UPDATE "account" SET username = $2, password = $3, email = $4 WHERE user_id = $1 RETURNING *;',
        args: [id, data.username, data.password, data.email],
      });
      context.response.body = result.rowsOfObjects()[0];
    }
  } catch (error) {
    errorHandler(error, context);
  }
}

export async function deleteByID(context: RouterContext) {
  try {
    if (context.params && context.params.id) {
      const { id } = context.params;
      const result = await pgClient.query({
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
}
