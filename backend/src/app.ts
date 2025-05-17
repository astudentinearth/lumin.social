import cors from "cors";
import express, { json } from "express";
import { router } from "./routes/routes";
import cookie from "cookie-parser";
import session from "@/middleware/auth"

const app = express();

app.listen(process.env["PORT"]);
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
    methods: ["POST", "GET", "PUT", "OPTIONS", "HEAD"]
  }),
  json(),
  cookie(process.env["SESSION_SECRET"]),
  session,
  router,
);

console.log("Listening on port", process.env["PORT"]);
export default app;
