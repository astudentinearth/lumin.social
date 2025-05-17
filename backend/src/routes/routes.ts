import { CommunityController } from "@/controller/community.controller";
import { logger } from "@/middleware/access-log";
import { Router } from "express";


const communityRouter = Router().get("/get-communities", CommunityController.getCommunities);
export const router = Router().use(logger).use("/community", communityRouter);

