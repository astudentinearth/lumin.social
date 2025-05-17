import { postSchema } from "@/dto/post-dto";
import { Responses } from "@/responses";
import { PostService } from "@/service/post.service";
import { AuthRequest, Validated } from "@/types";
import { Response } from "express";

async function createPost(req: Validated<typeof postSchema, AuthRequest>, res: Response) {
  if(req.session.userId == null) return Responses.Unauthorized(res);
  const post = await PostService.createPost(req.body, req.session.userId);
  return Responses.Ok(res, post);
}

async function getPosts(_req: AuthRequest, res: Response) {
  return Responses.Ok(res, await PostService.getPosts());
}

async function getCommunityPosts(req: AuthRequest, res: Response) {
  const community_id = req.query["community_id"];
  if(!community_id || typeof community_id !== "string") return Responses.BadRequest(res);
  return Responses.Ok(res, await PostService.getCommunityPosts(community_id));
}

async function getUpvotes(req: AuthRequest, res: Response) {
  const post_id = req.query["post_id"];
  if(!post_id || typeof post_id !== "string") return Responses.BadRequest(res);
  return Responses.Ok(res, {count: (await PostService.getUpvotes(post_id)).at(0)?.count});
}

async function upvotePost(req: AuthRequest, res: Response) {
  const post_id = req.query["post_id"];
  if(!post_id || typeof post_id !== "string") return Responses.BadRequest(res);
  if(req.session.userId == null) return Responses.Unauthorized(res);
  await PostService.upvotePost(post_id, req.session.userId);
  return Responses.Ok(res);
}

export const PostController = {
  createPost,
  getPosts,
  getCommunityPosts,
  getUpvotes,
  upvotePost
}