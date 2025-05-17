import { randomUUID } from "crypto";
import { eq } from "drizzle-orm";
import { db } from "./db";
import { userTable } from "./schema";

export const userRepository = {
  async findById(id: string){
    return (await db.select().from(userTable).where(eq(userTable.id, id))).at(0);
  },
  async create(username: string, password_hash: string) {
    return await db.transaction(async tx => {
      const existing = await tx.select().from(userTable).where(eq(userTable.username, username));
      if(existing.length > 0) throw new Error("User already exists!");
      const id = randomUUID();
      const user = {
        id,
        join_date: new Date(),
        password_hash,
        username
      };
      await tx.insert(userTable).values(user);
      return user;
    })
  },
  async findByUsername(username: string) {
    return (await db.select().from(userTable).where(eq(userTable.username, username))).at(0);
  }
}