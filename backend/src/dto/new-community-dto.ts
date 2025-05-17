import { z } from "zod";

export const newCommunitySchema = z.object({
  name: z.string(),
  description: z.string()
});

export type NewCommunityDTO = z.infer<typeof newCommunitySchema>;