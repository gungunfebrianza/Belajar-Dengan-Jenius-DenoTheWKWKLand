import { Router } from "./deps.ts";
import {
  signUp,
  getAll,
  getByID,
  updateByID,
  deleteByID,
} from "./controller/user.ts";

const router = new Router();

router.get("/", (context) => {
  context.response.body = "Index";
});

router
  .get("/api/v1/accounts", getAll)
  .get("/api/v1/account/:id", getByID)
  .post("/api/v1/account", signUp)
  .put("/api/v1/account/:id", updateByID)
  .delete("/api/v1/account/:id", deleteByID);

export default router;
