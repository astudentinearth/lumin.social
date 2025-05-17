import { NewSession } from "@/types";
import { db } from "./db";
import { sessionTable } from "./schema";
import { eq } from "drizzle-orm";

export const sessionRepository = {
  async create(session: NewSession) {
    return await db.insert(sessionTable).values(session);
  },
  async findById(id: string) {
    return (await db.select().from(sessionTable).where(eq(sessionTable.id, id))).at(0);
  },
  async delete(id: string) {
    return await db.delete(sessionTable).where(eq(sessionTable.id, id));
  }
}