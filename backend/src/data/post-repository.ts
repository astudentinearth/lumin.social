import { NewPost } from "@/types";
import { count, desc, eq, isNull } from "drizzle-orm";
import { db } from "./db";
import { postTable, postVoteTable } from "./schema";

export const postRepository = {
  async create(post: NewPost) {
    return await db.insert(postTable).values(post);
  },
  /** Finds posts from a user. Utilizes pagination and sorts them by creation date, new posts come first. */
  async findByUserId(user_id: string) {
    return await db
      .select()
      .from(postTable)
      .where(eq(postTable.user_id, user_id))
      .orderBy(desc(postTable.created_at));
  },
  /** Finds posts from a community. Sorts them by creation date, new posts come first. */
  async findByCommunityId(community_id: string) {
    return await db
      .select()
      .from(postTable)
      .where(eq(postTable.community_id, community_id))
      .orderBy(desc(postTable.created_at));
  },
  /** Finds posts that are independent of a community. Sorts them by creation date, new posts come first. */
  async findPersonalPosts() {
    return await db
      .select()
      .from(postTable)
      .where(isNull(postTable.user_id))
      .orderBy(desc(postTable.created_at));
  },
  async countUpvotes(post_id: string) {
    return await db.select({count: count()}).from(postVoteTable).where(eq(postVoteTable.post_id, post_id));
  }
};
