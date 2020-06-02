import { makeJwt, Jose, Payload, setExpiration } from "./deps.ts";
import { objCustomConfig } from "./db.ts";

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
