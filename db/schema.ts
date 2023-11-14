import type { InferSelectModel } from "drizzle-orm";
import { int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";

export const cat_pictures = mysqlTable("cat_pictures", {
  id: int("id").primaryKey().autoincrement().notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
  reddit_id: varchar("reddit_id", { length: 255 }).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  media: varchar("media", { length: 255 }).notNull(),
  source: varchar("source", { length: 255 }).notNull(),
});

export type CatPictures = InferSelectModel<typeof cat_pictures>;
