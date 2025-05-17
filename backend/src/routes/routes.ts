import { AuthController } from "@/controller/auth.controller";
import { CommunityController } from "@/controller/community.controller";
import { loginDTO } from "@/dto/login-dto";
import { logger } from "@/middleware/access-log";
import { protect } from "@/middleware/auth";
import { validator } from "@/middleware/validator";
import { Router } from "express";
import session from "@/middleware/auth"

const communityRouter = Router().get(
  "/get-communities",
  CommunityController.getCommunities,
);

const authRouter = Router().post(
  "/login",
  validator(loginDTO),
  AuthController.login,
)
.get("/get-user", protect, AuthController.getCurrentUser);

export const router = Router()
  .use(logger, session)
  .use("/community", communityRouter)
  .use("/auth", authRouter);
