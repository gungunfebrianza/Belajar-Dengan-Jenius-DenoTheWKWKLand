import { Router } from "./deps.ts";
import { signUp, logIn } from "./controller/user.ts";
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
  .post("/api/v1/signup", signUp)
  .post("/api/v1/login", logIn);

router
  .get("/api/v1/posts", getAllPost)
  .get("/api/v1/post/:id", getSinglePost)
  .post("/api/v1/post-create", authMD, createPost)
  .put("/api/v1/post-update",authMD, updatePost)
  .delete("/api/v1/post-delete/:id", authMD, deletePost);

export default router;
