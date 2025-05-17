import cors from "cors";
import express, { json } from "express";
import { router } from "./routes/routes";
import cookie from "cookie-parser";

const app = express();

app.listen(process.env["PORT"]);
app.use(json(), cors({
  credentials: true
}), cookie(process.env["SESSION_SECRET"]), router);

console.log("Listening on port", process.env["PORT"]);
export default app;
