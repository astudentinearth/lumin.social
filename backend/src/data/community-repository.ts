import { eq } from "drizzle-orm";
import { db } from "./db"
import { communityTable } from "./schema"
import { NewCommunity } from "@/types";

export const communityRepository = {
  async findAll(){
    return await db.select().from(communityTable);
  },
  async findById(community_id: string) {
    return (await db.select().from(communityTable).where(eq(communityTable.id, community_id))).at(0);
  },
  async create(community: NewCommunity) {
    return await db.insert(communityTable).values(community);
  }
}