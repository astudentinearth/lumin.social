import { NewPostComment } from "@/types";
import { db } from "./db";
import { postCommentTable, postCommentUpvoteTable } from "./schema";
import { count, eq } from "drizzle-orm";

export const postCommentRepository = {
  async create(comment: NewPostComment) {
    return await db.insert(postCommentTable).values(comment);
  },
  /** Finds all comments for a post with their upvote counts. */
  async findByPostId(post_id: string) {
    return await db.select({
      id: postCommentTable.id,
      post_id: postCommentTable.post_id,
      content: postCommentTable.content,
      created_at: postCommentTable.created_at,
      score: count(postCommentUpvoteTable.comment_id)
    }).from(postCommentTable).where(eq(postCommentTable.id, post_id))
    .leftJoin(postCommentUpvoteTable, eq(postCommentUpvoteTable.comment_id, postCommentTable.id))
    .groupBy(postCommentTable.id);
  }
}