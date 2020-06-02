import { RouterContext, uuid } from "../deps.ts";
import { IPost } from "../types.ts";
import { Post } from "../model/post.ts";

export async function getAllPost(context: RouterContext) {
  try {
    const { response } = context;
    const posts = await Post.findAll();
    response.status = 201;
    response.body = {
      data: posts,
    };
  } catch (error) {
    throw error;
  }
}

export async function getSinglePost(context: RouterContext) {
  try {
    const { response, params } = context;
    const post = await Post.findOneById(params.id!);
    response.status = 201;
    response.body = {
      data: post,
    };
  } catch (error) {
    throw error;
  }
}

export async function createPost(context: RouterContext) {
  try {
    const {
      request,
      response,
      state: { user },
    } = context;
    const body = await request.body();
    const data: Omit<IPost, "id" | "user"> = body.value;
    const postId = uuid.generate();
    const post = await Post.insert({ ...data, id: postId, userId: user.id });
    response.status = 201;
    response.body = {
      message: "post created",
      data: post,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updatePost(context: RouterContext) {
  try {
  } catch (error) {
    throw error;
  }
}

export async function deletePost(context: RouterContext) {
  try {
    const {
      params,
      response,
      state: { user },
    } = context;
    const post = await Post.findOneById(params.id || "");
    await Post.delete(post.id || "");
    response.status = 202;
    response.body = {
      message: "post deleted",
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
