import { Context } from "https://deno.land/x/oak/mod.ts";

export const login = (ctx: Context) => {
  ctx.response.body = "Success!";
};

export const guest = (ctx: Context) => {
  ctx.response.body = "Guest!";
};

export const auth = (ctx: Context) => {
  ctx.response.body = "Auth Success";
};
