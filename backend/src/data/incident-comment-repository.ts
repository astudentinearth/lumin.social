import { NewIncidentComment } from "@/types";
import { db } from "./db";
import { incidentCommentTable } from "./schema";
import { eq } from "drizzle-orm";

export const incidentCommentRepository = {
  async create(comment: NewIncidentComment) {
    return await db.insert(incidentCommentTable).values(comment);
  },
  /** Finds all comments for an incident. */
  async findByIncidentId(incident_id: string) {
    return await db.select().from(incidentCommentTable).where(eq(incidentCommentTable.incident_id, incident_id));
  }
}
