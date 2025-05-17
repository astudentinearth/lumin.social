import {drizzle} from "drizzle-orm/node-postgres";
import pg from "pg";

export const db = drizzle(process.env["DATASOURCE_URL"]!)
export const pool = new pg.Pool({
  connectionString: process.env["DATASOURCE_URL"]!,
  min: 1
})