import {
  makeJwt,
  Jose,
  Payload,
  setExpiration,
  validateJwt,
  Context,
} from "./deps.ts";
import { objCustomConfig } from "./db.ts";
import { IUser } from "./types.ts";
import { User } from "./model/user.ts";

export const authMD = async (
  context: Context<{ user: Omit<IUser, "password"> | null }>,
  next: () => Promise<void>
) => {
  try {
    const { request, response, state } = context;
    const headers: Headers = request.headers;
    const authorization = headers.get("Authorization");
    if (!authorization) {
      response.status = 401;
      response.body = { message: "Authorization Header Required! " };
      return;
    }
    const jwt = authorization.split(" ")[1];
    let key: string = objCustomConfig.jwtSecret;
    const validatedJwt = await validateJwt(jwt, key, {
      isThrowing: false,
    });

    if (!validatedJwt) {
      state.user = null;
    }

    const user = await User.findOneById(validatedJwt?.payload?.iss! as string);
    if (!user) {
      state.user = null;
    }

    state.user = user;

    if (validatedJwt) {
      await next();
      return;
    }
    response.status = 401;
    response.body = { message: "Invalid JWT Token" };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export function produceJWT(id: string) {
  try {
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
  } catch (error) {
    console.log(error);
    throw error;
  }
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
