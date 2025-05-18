import { postCommentRepository } from "@/data/post-comment-repository";
import { incidentCommentRepository } from "@/data/incident-comment-repository";
import { NewPostComment, NewIncidentComment } from "@/types";
import { randomUUID } from "crypto";

async function createPostComment(comment: Omit<NewPostComment, "id" | "created_at">, user_id: string) {
  const newComment: NewPostComment = {
    ...comment,
    id: randomUUID(),
    created_at: new Date(),
    user_id
  };
  await postCommentRepository.create(newComment);
  return newComment;
}

async function getPostComments(post_id: string) {
  return await postCommentRepository.findByPostId(post_id);
}

async function createIncidentComment(comment: Omit<NewIncidentComment, "id" | "created_at">) {
  const newComment: NewIncidentComment = {
    ...comment,
    id: randomUUID(),
    created_at: new Date(),
  };
  await incidentCommentRepository.create(newComment);
  return newComment;
}

async function getIncidentComments(incident_id: string) {
  return await incidentCommentRepository.findByIncidentId(incident_id);
}

export const CommentService = {
  createPostComment,
  getPostComments,
  createIncidentComment,
  getIncidentComments,
};
