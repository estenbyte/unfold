import { getCollection } from "astro:content";

export const dsaLevels = [
  { key: "beginner", label: "Fundamentals", color: "var(--color-green)" },
  { key: "intermediate", label: "Intermediate", color: "var(--color-yellow)" },
  { key: "advanced", label: "Advanced", color: "var(--color-red)" },
] as const;

export async function getDsaChaptersSorted() {
  const chapters = await getCollection("dsa");
  return chapters.sort((a, b) => a.data.chapter - b.data.chapter);
}

export function groupDsaChapters(chapters: Awaited<ReturnType<typeof getDsaChaptersSorted>>) {
  const core = chapters;
  return { core };
}
