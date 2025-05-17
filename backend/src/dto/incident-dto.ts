
import {z} from "zod";

export const incidentSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string())
});
  
export type IncidentDTO = z.infer<typeof incidentSchema>;