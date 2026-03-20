import { getCollection } from "astro:content";

export const frontendLevels = [
  { key: "beginner", label: "Fundamentals", color: "var(--color-green)" },
  { key: "intermediate", label: "Intermediate", color: "var(--color-yellow)" },
  { key: "advanced", label: "Advanced", color: "var(--color-red)" },
] as const;

export async function getFrontendChaptersSorted() {
  const chapters = await getCollection("frontend");
  return chapters.sort((a, b) => a.data.chapter - b.data.chapter);
}

export function groupFrontendChapters(chapters: Awaited<ReturnType<typeof getFrontendChaptersSorted>>) {
  const core = chapters;
  return { core };
}
