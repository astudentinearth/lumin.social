import {
  userTable,
  communityTable,
  incidentCommentTable,
  incidentTable,
  incidentVoteTable,
  postCommentTable,
  postTable,
  postVoteTable,
  profileTable,
  sessionTable,
} from "./data/schema";
import type { Request as ExpressRequest } from "express";
import { SessionData } from "express-session";
import {z} from "zod";
import { PostService } from "./service/post.service";

export type User = typeof userTable.$inferSelect;
export type NewUser = typeof userTable.$inferInsert;

export type Community = typeof communityTable.$inferSelect;
export type NewCommunity = typeof communityTable.$inferInsert;

export type IncidentComment = typeof incidentCommentTable.$inferSelect;
export type NewIncidentComment = typeof incidentCommentTable.$inferInsert;

export type Incident = typeof incidentTable.$inferSelect;
export type NewIncident = typeof incidentTable.$inferInsert;

export type IncidentVote = typeof incidentVoteTable.$inferSelect;
export type NewIncidentVote = typeof incidentVoteTable.$inferInsert;

export type PostComment = typeof postCommentTable.$inferSelect;
export type NewPostComment = typeof postCommentTable.$inferInsert;

export type Post = typeof postTable.$inferSelect;
export type NewPost = typeof postTable.$inferInsert;

export type PostVote = typeof postVoteTable.$inferSelect;
export type NewPostVote = typeof postVoteTable.$inferInsert;

export type Profile = typeof profileTable.$inferSelect;
export type NewProfile = typeof profileTable.$inferInsert;

export type Session = typeof sessionTable.$inferSelect;
export type NewSession = typeof sessionTable.$inferInsert;

export type Pageable = {
  page: number,
  pageSize: number
}

declare module "express-session" {
  interface SessionData {
    userId?: string;
  }
}

export type Auth<T extends ExpressRequest> = T & {
  session?: SessionData;
}

export type AuthRequest = Auth<ExpressRequest>;
export type Validated<Schema extends z.ZodTypeAny, T extends ExpressRequest = ExpressRequest> = Omit<T, "body"> & {
  body: z.infer<Schema>
};

export type DetailedPost = {
    id: string;
    title: string;
    description: string | null;
    created_at: Date;
    user_id: string;
    username: string | null;
    community_id: string | null;
    community_name: string | null;
};