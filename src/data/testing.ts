import { getCollection } from "astro:content";

export const testingLevels = [
  { key: "beginner", label: "Foundations", color: "var(--color-green)" },
  { key: "intermediate", label: "Core", color: "var(--color-yellow)" },
  { key: "advanced", label: "Advanced", color: "var(--color-red)" },
] as const;

export async function getTestingChaptersSorted() {
  const chapters = await getCollection("testing");
  return chapters.sort((a, b) => a.data.chapter - b.data.chapter);
}
