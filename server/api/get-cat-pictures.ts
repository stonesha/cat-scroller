import { db } from "~/db";
import { cat_pictures } from "~/db/schema";
import { desc } from "drizzle-orm";

export default defineEventHandler(() => {
  const results = db
    .select()
    .from(cat_pictures)
    .orderBy(desc(cat_pictures.created_at))
    .limit(25);
  return results;
});
