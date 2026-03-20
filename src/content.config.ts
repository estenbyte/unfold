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

const dsa = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/dsa" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    chapter: z.number(),
    level: z.enum(["beginner", "intermediate", "advanced"]),
    readingTime: z.string(),
    topics: z.array(z.string()),
  }),
});

const networking = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/networking" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    chapter: z.number(),
    level: z.enum(["beginner", "intermediate", "advanced"]),
    readingTime: z.string(),
    topics: z.array(z.string()),
  }),
});

const dbInternals = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/db-internals" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    chapter: z.number(),
    level: z.enum(["beginner", "intermediate", "advanced"]),
    readingTime: z.string(),
    topics: z.array(z.string()),
  }),
});

const devops = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/devops" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    chapter: z.number(),
    level: z.enum(["beginner", "intermediate", "advanced"]),
    readingTime: z.string(),
    topics: z.array(z.string()),
  }),
});

const apiDesign = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/api-design" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    chapter: z.number(),
    level: z.enum(["beginner", "intermediate", "advanced"]),
    readingTime: z.string(),
    topics: z.array(z.string()),
  }),
});

const frontend = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/frontend" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    chapter: z.number(),
    level: z.enum(["beginner", "intermediate", "advanced"]),
    readingTime: z.string(),
    topics: z.array(z.string()),
  }),
});

export const collections = { chapters, dsa, networking, "db-internals": dbInternals, devops, "api-design": apiDesign, frontend };
