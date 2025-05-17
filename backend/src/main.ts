import "dotenv/config"
import app from "./app"

app.get("/hello-world", (_req, res)=>{res.status(200).send("Hello world!")})
