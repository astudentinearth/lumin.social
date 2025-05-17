import { RequestHandler } from "express";

export const logger: RequestHandler = (req, _res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
