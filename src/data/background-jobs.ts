import { getCollection } from "astro:content";

export const backgroundJobsLevels = [
  { key: "beginner", label: "Foundations", color: "var(--color-green)" },
  { key: "intermediate", label: "Core", color: "var(--color-yellow)" },
  { key: "advanced", label: "Advanced", color: "var(--color-red)" },
] as const;

export async function getBackgroundJobsChaptersSorted() {
  const chapters = await getCollection("background-jobs");
  return chapters.sort((a, b) => a.data.chapter - b.data.chapter);
}
