import { getCollection } from "astro:content";

export const sreLevels = [
  { key: "beginner", label: "Foundations", color: "var(--color-green)" },
  { key: "intermediate", label: "Operating Production", color: "var(--color-yellow)" },
  { key: "advanced", label: "Resilience at Scale", color: "var(--color-red)" },
  { key: "mastery", label: "Mastery — Staff+ SRE", color: "var(--color-purple)" },
] as const;

export async function getSreChaptersSorted() {
  const chapters = await getCollection("sre");
  return chapters.sort((a, b) => a.data.chapter - b.data.chapter);
}
