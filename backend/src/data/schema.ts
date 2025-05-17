import { pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
  id: text().primaryKey(),
  username: varchar({length: 40}).notNull().unique(),
  password_hash: text().notNull(),
  join_date: timestamp({withTimezone: true, mode: "date"}).notNull()
})

export const sessionTable = pgTable("session", {
  id: text().primaryKey(),
  user_id: text().references(()=>userTable.id).notNull(),
  token_hash: text().notNull(),
  expires_at: timestamp({withTimezone: true, mode: "date"}).notNull(),
  created_at: timestamp({withTimezone: true, mode: "date"}).notNull()
})

export const incidentTable = pgTable("incident", {
  id: text().primaryKey(),
  title: varchar().notNull(),
  description: text(),
  tags: varchar().array().default([]).notNull(),
  created_at: timestamp({withTimezone: true, mode: "date"}).notNull(),
  user_id: text().references(()=>userTable.id).notNull()
})

export const incidentCommentTable = pgTable("incident_comment", {
  id: text().primaryKey(),
  incident_id: text().references(()=>incidentTable.id),
  user_id: text().references(()=>userTable.id).notNull(),
  content: text().notNull(),
  created_at: timestamp({withTimezone: true, mode: "date"}).notNull()
})

export const incidentVoteTable = pgTable("incident_upvote", {
  incident_id: text().notNull().references(()=>incidentTable.id),
  user_id: text().references(()=>userTable.id).notNull()
})

export const communityTable = pgTable("community", {
  id: text().primaryKey(),
  creator_id: text().references(()=>userTable.id),
  name: varchar({length: 48}).notNull(),
  created_at: timestamp({withTimezone: true, mode: "date"}).notNull()
})

export const postTable = pgTable("post", {
  id: text().primaryKey(),
  community_id: text().references(()=>communityTable.id), // personal post if null
  title: varchar().notNull(),
  description: text(),
  created_at: timestamp({withTimezone: true, mode: "date"}).notNull()
})


export const postCommentTable = pgTable("post_comment", {
  id: text().primaryKey(),
  post_id: text().references(()=>postTable.id).notNull(),
  content: text().notNull(),
  created_at: timestamp({withTimezone: true, mode: "date"})
})

export const postVoteTable = pgTable("post_vote", {
  post_id: text().references(()=>postTable.id).notNull(),
  user_id: text().references(()=>userTable.id).notNull()
})