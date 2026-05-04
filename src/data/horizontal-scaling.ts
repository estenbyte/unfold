import { getCollection } from "astro:content";

export const horizontalScalingLevels = [
  { key: "beginner", label: "Foundations", color: "var(--color-green)" },
  { key: "intermediate", label: "Core", color: "var(--color-yellow)" },
  { key: "advanced", label: "Advanced", color: "var(--color-red)" },
] as const;

export async function getHorizontalScalingChaptersSorted() {
  const chapters = await getCollection("horizontal-scaling");
  return chapters.sort((a, b) => a.data.chapter - b.data.chapter);
}
