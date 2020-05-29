import { Context } from "https://deno.land/x/oak/mod.ts";
import { validateJwt } from "https://deno.land/x/djwt/validate.ts";
import key from "./key.ts";

export const authMD = async (ctx: Context, next: any) => {
  console.log("Middleware");
  const headers: Headers = ctx.request.headers;
  const authorization = headers.get("Authorization");
  if (!authorization) {
    ctx.response.status = 401;
    ctx.response.body = { message: "Invalid jwt token" };
    return;
  }
  const jwt = authorization.split(" ")[1];
  if (!jwt) {
    ctx.response.status = 401;
    return;
  }
  if (await validateJwt(jwt, key, { isThrowing: false })) {
    await next();
    return;
  }
  ctx.response.status = 401;
  ctx.response.body = { message: "Invalid jwt token" };
};
