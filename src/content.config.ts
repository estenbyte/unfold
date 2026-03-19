import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const chapters = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/chapters" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    chapter: z.number(),
    level: z.enum(["beginner", "intermediate", "advanced"]),
    readingTime: z.string(),
    topics: z.array(z.string()),
  }),
});

export const collections = { chapters };
