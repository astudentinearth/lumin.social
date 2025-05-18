import { CommentService } from "@/service/comment.service";
import { Responses } from "@/responses";
import { RequestHandler } from "express";

const createPostComment: RequestHandler = async (req, res) => {
  const { post_id, content } = req.body;
  if (!post_id || typeof content !== "string" || !content.trim()) {
    return Responses.BadRequest(res);
  }
  const uid = req.session?.userId;
  if (!uid) return Responses.Unauthorized(res);
  const comment = await CommentService.createPostComment(
    {
      post_id,
      content,
      user_id: uid,
    },
    uid,
  );
  return Responses.Ok(res, comment);
};

const getPostComments: RequestHandler = async (req, res) => {
  const post_id = req.query["post_id"];
  if (!post_id || typeof post_id !== "string") return Responses.BadRequest(res);
  const comments = await CommentService.getPostComments(post_id);
  return Responses.Ok(res, comments);
};

const createIncidentComment: RequestHandler = async (req, res) => {
  const { incident_id, content } = req.body;
  if (!incident_id || typeof content !== "string" || !content.trim()) {
    return Responses.BadRequest(res);
  }
  const uid = req.session?.userId;
  if (!uid) return Responses.Unauthorized(res);
  const comment = await CommentService.createIncidentComment({
    incident_id,
    content,
    user_id: uid,
  });
  return Responses.Ok(res, comment);
};

const getIncidentComments: RequestHandler = async (req, res) => {
  const incident_id = req.query["incident_id"];
  if (!incident_id || typeof incident_id !== "string")
    return Responses.BadRequest(res);
  const comments = await CommentService.getIncidentComments(incident_id);
  return Responses.Ok(res, comments);
};

export const CommentController = {
  createPostComment,
  getPostComments,
  createIncidentComment,
  getIncidentComments,
};
