import { Context } from "https://deno.land/x/oak/mod.ts";
import users from "./users.ts";
import {
  makeJwt,
  setExpiration,
  Jose,
  Payload,
} from "https://deno.land/x/djwt/create.ts";
import key from "./key.ts";

const header: Jose = {
  alg: "HS256",
  typ: "JWT",
};

export const login = async (ctx: Context) => {
  const { value } = await ctx.request.body();
  for (const user of users) {
    if (value.username === user.username && value.password === user.password) {
      const payload: Payload = {
        iss: user.username,
        exp: setExpiration(new Date().getTime() + 60000),
      };
      const jwt = makeJwt({ key, header, payload });
      if (jwt) {
        ctx.response.status = 200;
        ctx.response.body = {
          id: user.id,
          username: user.username,
          jwt,
        };
      } else {
        ctx.response.status = 500;
        ctx.response.body = {
          message: "Internal server error",
        };
      }
      return;
    }
  }
  ctx.response.status = 422;
  ctx.response.body = {
    message: "Invalid username or password",
  };
};

export const guest = (ctx: Context) => {
  ctx.response.body = "Guest!";
};

export const auth = (ctx: Context) => {
  
  ctx.response.body = "Auth Success";
};
