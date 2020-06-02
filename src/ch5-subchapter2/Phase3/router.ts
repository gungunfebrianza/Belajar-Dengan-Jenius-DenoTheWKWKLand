import { Router } from "./deps.ts";
import {
  signUp,
  getAll,
  getByID,
  updateByID,
  deleteByID,
  logIn,
} from "./controller/user.ts";
import { authMD } from "./util.ts";

const router = new Router();

router.get("/", (context) => {
  context.response.body = "Index";
});

router
  .get("/api/v1/accounts", getAll)
  .get("/api/v1/account/:id", getByID)
  .post("/api/v1/signup", signUp)
  .post("/api/v1/login", logIn)
  .put("/api/v1/account/:id", updateByID)
  .delete("/api/v1/account/:id", deleteByID);

router.get("/api/v1/post", authMD, (context) => {
  context.response.body = "Post";
});

export default router;
