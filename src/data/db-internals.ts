import { getCollection } from "astro:content";

export const dbLevels = [
  { key: "beginner", label: "Fundamentals", color: "var(--color-green)" },
  { key: "intermediate", label: "Core Concepts", color: "var(--color-yellow)" },
  { key: "advanced", label: "Advanced", color: "var(--color-red)" },
] as const;

export async function getDbChaptersSorted() {
  const chapters = await getCollection("db-internals");
  return chapters.sort((a, b) => a.data.chapter - b.data.chapter);
}
