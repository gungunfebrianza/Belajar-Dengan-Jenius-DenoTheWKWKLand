import { RouterContext, uuid } from "../deps.ts";
import { errorHandler, produceJWT } from "../util.ts";
import { pgClient } from "../db.ts";
import { User } from "../model/user.ts";
import { IUser } from "../types.ts";

export async function signUp(context: RouterContext) {
  const { request, response } = context;
  try {
    if (context.request.hasBody) {
      const body = await request.body({
        contentTypes: {
          text: ["application/javascript"],
        },
      });
      const userId = uuid.generate();
      const data = body.value;
      const user = await User.findOneByEmail(data.email);
      if (user) {
        response.status = 400;
        response.body = {
          message: `User with email : ${data.email} already exist`,
        };
        return;
      }
      await User.insert2({ ...data, id: userId });
      response.status = 200;
      response.body = {
        email: data.email,
        success: 1,
      };
    }
  } catch (error) {
    errorHandler(error, context);
  }
}

export async function logIn(context: RouterContext) {
  const { request, response } = context;
  try {
    const body = await request.body({
      contentTypes: {
        text: ["application/javascript"],
      },
    });
    const data: Omit<IUser, "id" | "name"> = body.value;
    const user = await User.comparePassword(data.email, data.password);
    if (!user) {
      response.status = 400;
      response.body = {
        message: "user not found or bad password",
      };
      return;
    }
    const jwt = produceJWT(user.id);
    if (jwt) {
      response.status = 200;
      response.body = {
        id: user.id,
        jwt,
      };
    } else {
      response.status = 500;
      response.body = {
        message: "Internal server error",
      };
    }
  } catch (error) {
    errorHandler(error, context);
  }
}

