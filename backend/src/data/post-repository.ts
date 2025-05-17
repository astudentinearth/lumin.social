import { NewPost } from "@/types";
import { count, desc, eq } from "drizzle-orm";
import { db } from "./db";
import { communityTable, postTable, postVoteTable, userTable } from "./schema";

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
      .select({
        id: postTable.id,
        title: postTable.title,
        description: postTable.description,
        created_at: postTable.created_at,
        user_id: postTable.user_id,
        username: userTable.username,
        community_id: postTable.community_id,
        community_name: communityTable.name,
      })
      .from(postTable)
      .where(eq(postTable.community_id, community_id))
      .leftJoin(userTable, eq(userTable.id, postTable.user_id))
      .leftJoin(communityTable, eq(communityTable.id, postTable.community_id))
      .orderBy(desc(postTable.created_at));
  },
  /** Finds posts that are independent of a community. Sorts them by creation date, new posts come first. */
  async findAll() {
    return await db
      .select({
        id: postTable.id,
        title: postTable.title,
        description: postTable.description,
        created_at: postTable.created_at,
        user_id: postTable.user_id,
        username: userTable.username,
        community_id: postTable.community_id,
        community_name: communityTable.name,
      })
      .from(postTable)
      .leftJoin(userTable, eq(userTable.id, postTable.user_id))
      .leftJoin(communityTable, eq(communityTable.id, postTable.community_id))
      .orderBy(desc(postTable.created_at));
  },
  async countUpvotes(post_id: string) {
    return await db
      .select({ count: count() })
      .from(postVoteTable)
      .where(eq(postVoteTable.post_id, post_id));
  },
  async upvote(upvote: { post_id: string; user_id: string }) {
    try {
      await db.insert(postVoteTable).values(upvote);
    } catch (error) {
      /*empty*/
    }
  },
};
