import express, { json } from "express";
import cors from "cors";
import { router } from "./routes/routes";
import session from "@/middleware/auth";

const app = express();

app.listen(process.env["PORT"]);
app.use(json(), cors(), session);
app.use(router);

console.log("Listening on port", process.env["PORT"]);
export default app;
