import { pool } from "@/data/db";
import session from "express-session";
import pgSession from "connect-pg-simple";
import ms from "ms";

export default session({
  store: new (pgSession(session))({pool}),
  secret: process.env["SESSION_SECRET"]!,
  resave: false,
  cookie: {
    maxAge: ms("30d"),
    secure: true,
    sameSite: "lax"
  }
})
