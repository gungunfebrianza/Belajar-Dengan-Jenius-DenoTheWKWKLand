import { isHttpError, Status } from "./deps.ts";

export const errorHandler = (error: any, context: any): void => {
  if (isHttpError(error)) {
    switch (error.status) {
      case Status.InternalServerError:
        context.response.body = "Internal Server Error! ";
        break;
      default:
        break;
    }
  } else {
    throw error;
  }
};
