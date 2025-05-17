import { NewPost, Pageable } from "@/types";
import { db } from "./db";
import { postTable, postVoteTable } from "./schema";
import { count, desc, eq, isNull } from "drizzle-orm";

export const postRepository = {
  async create(post: NewPost) {
    return await db.insert(postTable).values(post);
  },
  /** Finds posts from a user. Utilizes pagination and sorts them by creation date, new posts come first. */
  async findByUserId(
    user_id: string,
    pageable: Pageable = { page: 0, pageSize: 5 },
  ) {
    return await db
      .select()
      .from(postTable)
      .where(eq(postTable.user_id, user_id))
      .offset(pageable.page * pageable.pageSize)
      .limit(pageable.pageSize)
      .orderBy(desc(postTable.created_at));
  },
  /** Finds posts from a community. Utilizes pagination and sorts them by creation date, new posts come first. */
  async findByCommunityId(
    community_id: string,
    pageable: Pageable = { page: 0, pageSize: 5 },
  ) {
    return await db
      .select()
      .from(postTable)
      .where(eq(postTable.community_id, community_id))
      .offset(pageable.page * pageable.pageSize)
      .limit(pageable.pageSize)
      .orderBy(desc(postTable.created_at));
  },
  /** Finds posts that are independent of a community. Utilizes pagination and sorts them by creation date, new posts come first. */
  async findPersonalPosts(pageable: Pageable = { page: 0, pageSize: 5 }) {
    return await db
      .select()
      .from(postTable)
      .where(isNull(postTable.user_id))
      .offset(pageable.page * pageable.pageSize)
      .limit(pageable.pageSize)
      .orderBy(desc(postTable.created_at));
  },
  async countUpvotes(post_id: string) {
    return await db.select({count: count()}).from(postVoteTable).where(eq(postVoteTable.post_id, post_id));
  }
};
