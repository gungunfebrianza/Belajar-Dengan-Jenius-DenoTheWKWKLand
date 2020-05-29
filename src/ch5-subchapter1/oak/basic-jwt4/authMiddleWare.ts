import { Context } from "https://deno.land/x/oak/mod.ts";

export const authMD = async (ctx: Context, next: any) => {
  console.log("Middleware");
  await next();
};
