import { db } from "~/db";
import { cat_pictures } from "~/db/schema";
import { desc } from "drizzle-orm";

export default defineEventHandler((event) => {
  let page: number;
  if (!event.context.params) page = 0;
  else page = parseInt(event.context.params.offset) as number;

  const offset = (page - 1) * 25;

  const results = db
    .select({
      reddit_id: cat_pictures.reddit_id,
      title: cat_pictures.title,
      media: cat_pictures.media,
      source: cat_pictures.source,
    })
    .from(cat_pictures)
    .orderBy(desc(cat_pictures.created_at))
    .limit(25)
    .offset(offset);

  return results;
});
