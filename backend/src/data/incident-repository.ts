import { incidentTable, userTable } from "./schema"
import { db } from "./db";
import { NewIncident } from "@/types";
import { desc, eq } from "drizzle-orm";

export const incidentRepository = {
  async create(incident: NewIncident) {
    return await db.insert(incidentTable).values(incident);
  },
  async getAll() {
    return await db
      .select({
        id: incidentTable.id,
        title: incidentTable.title,
        description: incidentTable.description,
        created_at: incidentTable.created_at,
        user_id: incidentTable.user_id,
        username: userTable.username, // Join username
        tags: incidentTable.tags
      })
      .from(incidentTable)
      .leftJoin(userTable, eq(userTable.id, incidentTable.user_id))
      .orderBy(desc(incidentTable.created_at));
  },
  async findById(id: string) {
    return (await db
      .select({
        id: incidentTable.id,
        title: incidentTable.title,
        description: incidentTable.description,
        created_at: incidentTable.created_at,
        user_id: incidentTable.user_id,
        username: userTable.username, // Join username
        tags: incidentTable.tags
      })
      .from(incidentTable)
      .where(eq(incidentTable.id, id))
      .leftJoin(userTable, eq(userTable.id, incidentTable.user_id))
    ).at(0);
  }
}
