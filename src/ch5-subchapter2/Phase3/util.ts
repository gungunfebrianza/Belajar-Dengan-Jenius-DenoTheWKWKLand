import {
  makeJwt,
  Jose,
  Payload,
  setExpiration,
  validateJwt,
  Context,
} from "./deps.ts";
import { objCustomConfig } from "./db.ts";

export const authMD = async (context: Context, next: any) => {
  const { request, response } = context;
  const headers: Headers = request.headers;
  const authorization = headers.get("Authorization");
  if (!authorization) {
    response.status = 401;
    response.body = { message: "Authorization Header Required! " };
    return;
  }
  const jwt = authorization.split(" ")[1];
  let key: string = objCustomConfig.jwtSecret;
  if (await validateJwt(jwt, key, { isThrowing: false })) {
    await next();
    return;
  }
  response.status = 401;
  response.body = { message: "Invalid JWT Token" };
};

export function produceJWT(id: string) {
  const header: Jose = {
    alg: "HS256",
    typ: "JWT",
  };
  const payload: Payload = {
    iss: id,
    exp: setExpiration(new Date().getTime() + 600000),
  };
  let key: string = objCustomConfig.jwtSecret;
  return makeJwt({ header, payload, key });
}

export const errorHandler = (error: any, context: any): void => {
  if (error.name === "PostgresError") {
    console.log("");
    console.log(`Detail     : ${error.fields.detail}`);
    console.log(`Table      : ${error.fields.table}`);
    console.log(`Severity   : ${error.fields.severity}`);
    console.log(`Message    : ${error.message}`);
    context.response.body = "Internal Server Error!";
    context.throw(error);
  } else {
    context.response.body = "Internal Server Error!";
    context.throw(error);
  }
};
