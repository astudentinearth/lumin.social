import { postRepository } from "@/data/post-repository";
import { NewPost } from "@/types";
import { NewPostDTO } from "@common/dto/request";
import { randomUUID } from "crypto";

async function createPost(dto: NewPostDTO, user_id: string) {
  const id = randomUUID();
  const post: NewPost = {
    ...dto,
    user_id,
    id,
    created_at: new Date()
  }
  await postRepository.create(post);
  return post;
}

async function getPosts() {
  return await postRepository.findAll();
}

async function getUserPosts(user_id: string) {
  return await postRepository.findByUserId(user_id);
}

async function getCommunityPosts(community_id: string) {
  return await postRepository.findByCommunityId(community_id);
}

async function getUpvotes(post_id: string) {
  return await postRepository.countUpvotes(post_id);
}

async function upvotePost(post_id: string, user_id: string) {
  const upvote = {
    post_id,
    user_id
  }
  await postRepository.upvote(upvote);
}

export const PostService = {
  createPost,
  getPosts,
  getUserPosts,
  getCommunityPosts,
  getUpvotes,
  upvotePost
}