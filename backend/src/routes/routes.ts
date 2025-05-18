import { AuthController } from "@/controller/auth.controller";
import { CommunityController } from "@/controller/community.controller";
import { PostController } from "@/controller/post.controller";
import { loginDTO } from "@/dto/login-dto";
import { postSchema } from "@/dto/post-dto";
import { logger } from "@/middleware/access-log";
import { protect } from "@/middleware/auth";
import { validator } from "@/middleware/validator";
import { Router } from "express";
import { IncidentController } from "@/controller/incident.controller";
import { incidentSchema } from "@/dto/incident-dto";
import { newCommunitySchema } from "@/dto/new-community-dto";
import { CommentController } from "@/controller/comment.controller";

const communityRouter = Router().get(
  "/get-communities",
  CommunityController.getCommunities,
)
.post("/create-community", protect, validator(newCommunitySchema), CommunityController.createCommunity);

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
.get("/get-user", protect, AuthController.getCurrentUser)
.get("/get-user-by-id", AuthController.getUserById)
.post("/logout", protect, AuthController.logout);

const incidentRouter = Router()
  .get("/get-incidents", IncidentController.getIncidents)
  .post("/create-incident", protect, validator(incidentSchema), IncidentController.createIncident)
  .get("/get-incident-by-id", IncidentController.getIncidentById)

const commentRouter = Router()
  .post("/create-post-comment", protect, CommentController.createPostComment)
  .get("/get-post-comments", CommentController.getPostComments)
  .post("/create-incident-comment", protect, CommentController.createIncidentComment)
  .get("/get-incident-comments", CommentController.getIncidentComments);

export const router = Router()
  .use(logger)
  .use("/community", communityRouter)
  .use("/auth", authRouter)
  .use("/post", postRouter)
  .use("/incident", incidentRouter)
  .use("/comment", commentRouter);
