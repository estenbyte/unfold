import { getCollection } from "astro:content";

export const containersLevels = [
  { key: "beginner", label: "Foundations", color: "var(--color-green)" },
  { key: "intermediate", label: "Core", color: "var(--color-yellow)" },
  { key: "advanced", label: "Advanced", color: "var(--color-red)" },
] as const;

export async function getContainersChaptersSorted() {
  const chapters = await getCollection("containers");
  return chapters.sort((a, b) => a.data.chapter - b.data.chapter);
}
