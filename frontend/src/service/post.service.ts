import { Fetch } from "@/lib/fetch";
import type { DetailedPost, Post } from "@common/dto/content";
import type { NewPostDTO } from "@common/dto/request";

// Retrieve all posts (no filters)
export async function getPosts(): Promise<DetailedPost[]> {
  const res = await Fetch.GET("/post/get-posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

// Retrieve posts by community ID
export async function getCommunityPosts(community_id: string): Promise<Post[]> {
  const res = await Fetch.GET(`/post/community?community_id=${encodeURIComponent(community_id)}`);
  if (!res.ok) throw new Error("Failed to fetch community posts");
  return res.json();
}

// Retrieve posts without any filters (alias for getPosts)
export async function getAllPosts(): Promise<DetailedPost[]> {
  return getPosts();
}

export async function createPost(data: NewPostDTO): Promise<Post> {
  const res = await Fetch.POST("/post/create-post", data);
  if (!res.ok) throw new Error("Failed to create post");
  return res.json();
}

export const PostService = {
  getPosts,
  getCommunityPosts,
  getAllPosts,
  createPost,
};