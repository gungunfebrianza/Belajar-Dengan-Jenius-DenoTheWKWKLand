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
import {
  getAllPost,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
} from "./controller/post.ts";

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

router
  .get("/api/v1/posts", getAllPost)
  .get("/api/v1/post/:id", getSinglePost)
  .post("/api/v1/post-create", createPost)
  .put("/api/v1/post-update", updatePost)
  .delete("/api/v1/post-delete", deletePost);

export default router;
