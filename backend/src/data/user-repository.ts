import { eq } from "drizzle-orm"
import { db } from "./db"
import { userTable } from "./schema"
import { NewUser } from "@/types";

export const userRepository = {
  async findById(id: string){
    return (await db.select().from(userTable).where(eq(userTable.id, id))).at(0);
  },
  async create(user: NewUser) {
    return await db.insert(userTable).values(user);
  }
}