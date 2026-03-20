import { getCollection } from "astro:content";

export const networkingLevels = [
  { key: "beginner", label: "Fundamentals", color: "var(--color-green)" },
  { key: "intermediate", label: "Protocols", color: "var(--color-yellow)" },
  { key: "advanced", label: "Advanced", color: "var(--color-red)" },
] as const;

export async function getNetworkingChaptersSorted() {
  const chapters = await getCollection("networking");
  return chapters.sort((a, b) => a.data.chapter - b.data.chapter);
}
