import { pool } from "@/data/db";
import session from "express-session";
import pgSession from "connect-pg-simple";
import ms from "ms";
import { RequestHandler } from "express";
import { AuthRequest } from "@/types";

export default session({
  store: new (pgSession(session))({pool}),
  secret: process.env["SESSION_SECRET"]!,
  resave: false,
  cookie: {
    maxAge: ms("30d"),
    secure: process.env["NODE_ENV"] === "production",
    sameSite: "lax"
  }
})

export const protect: RequestHandler = (req: AuthRequest, res, next) => {
  if(!req.session.userId) {
    res.status(401).send();
    return;
  }
  next();
}