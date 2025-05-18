import { Fetch } from "@/lib/fetch";
import type { PostComment, IncidentComment } from "@common/dto/content";

export async function getPostComments(post_id: string): Promise<PostComment[]> {
  const res = await Fetch.GET(`/comment/get-post-comments?post_id=${encodeURIComponent(post_id)}`);
  if (!res.ok) throw new Error("Failed to fetch post comments");
  return res.json() as Promise<PostComment[]>;
}

export async function getIncidentComments(incident_id: string): Promise<IncidentComment[]> {
  const res = await Fetch.GET(`/comment/get-incident-comments?incident_id=${encodeURIComponent(incident_id)}`);
  if (!res.ok) throw new Error("Failed to fetch incident comments");
  return res.json() as Promise<IncidentComment[]>;
}

export async function createPostComment(data: { post_id: string; content: string }): Promise<PostComment> {
  const res = await Fetch.POST("/comment/create-post-comment", data);
  if (!res.ok) throw new Error("Failed to create post comment");
  return res.json() as Promise<PostComment>;
}

export async function createIncidentComment(data: { incident_id: string; content: string }): Promise<IncidentComment> {
  const res = await Fetch.POST("/comment/create-incident-comment", data);
  if (!res.ok) throw new Error("Failed to create incident comment");
  return res.json() as Promise<IncidentComment>;
}

export const CommentService = {
  getPostComments,
  getIncidentComments,
  createPostComment,
  createIncidentComment,
};