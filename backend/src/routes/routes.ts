import { AuthController } from "@/controller/auth.controller";
import { CommunityController } from "@/controller/community.controller";
import { PostController } from "@/controller/post.controller";
import { loginDTO } from "@/dto/login-dto";
import { postSchema } from "@/dto/post-dto";
import { logger } from "@/middleware/access-log";
import { protect } from "@/middleware/auth";
import { validator } from "@/middleware/validator";
import { Router } from "express";

const communityRouter = Router().get(
  "/get-communities",
  CommunityController.getCommunities,
);

const postRouter = Router()
  .post(
    "/create-post",
    validator(postSchema),
    protect,
    PostController.createPost,
  )
  .get("/get-posts", PostController.getPosts)
  .get("/get-community-posts", PostController.getCommunityPosts)
  .get("/get-upvotes", PostController.getUpvotes)
  .post("/upvote-post", protect, PostController.upvotePost);

const authRouter = Router().post(
  "/login",
  validator(loginDTO),
  AuthController.login,
)
.get("/get-user", protect, AuthController.getCurrentUser);

export const router = Router()
  .use(logger)
  .use("/community", communityRouter)
  .use("/auth", authRouter)
  .use("/post", postRouter);
