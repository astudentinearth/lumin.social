
import {z} from "zod";

export const PageableDto = z.object({
  page: z.number().int().min(0).default(0),
  pageSize: z.number().int().min(0).max(15).default(5),
});