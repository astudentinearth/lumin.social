import {z} from "zod";

export const postSchema = z.object({
  title: z.string().max(255),
  description: z.string(),
  community_id: z.string().optional(),
});

export type PostDTO = z.infer<typeof postSchema>;