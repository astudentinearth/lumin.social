import { eq } from "drizzle-orm";
import { db } from "./db"
import { communityTable } from "./schema"

export const communityRepository = {
  async findAll(){
    return await db.select().from(communityTable);
  },
  async findById(community_id: string) {
    return (await db.select().from(communityTable).where(eq(communityTable.id, community_id))).at(0);
  }
}