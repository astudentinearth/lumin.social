import { RequestHandler } from "express";
import {z} from "zod";

/**
 * Creates a middleware function for request body validation.
 * @param schema zod schema to validate
 */
export const validator = <T extends z.ZodTypeAny>(schema: T)=>{
  return ((req, res, next)=>{
    const value = schema.safeParse(req.body);
    if(value.error) {
      res.status(400).send({error: value.error.errors.map(e => e.message).join("\n")});
      return;
    }
    else next();
  }) satisfies RequestHandler;
}