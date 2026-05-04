import { getCollection } from "astro:content";

export const capacityCostLevels = [
  { key: "beginner", label: "Foundations", color: "var(--color-green)" },
  { key: "intermediate", label: "Core", color: "var(--color-yellow)" },
  { key: "advanced", label: "Advanced", color: "var(--color-red)" },
] as const;

export async function getCapacityCostChaptersSorted() {
  const chapters = await getCollection("capacity-cost");
  return chapters.sort((a, b) => a.data.chapter - b.data.chapter);
}
