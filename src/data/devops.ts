import { getCollection } from "astro:content";

export const devopsLevels = [
  { key: "beginner", label: "Foundations", color: "var(--color-green)" },
  { key: "intermediate", label: "Infrastructure", color: "var(--color-yellow)" },
  { key: "advanced", label: "Advanced", color: "var(--color-red)" },
] as const;

export async function getDevopsChaptersSorted() {
  const chapters = await getCollection("devops");
  return chapters.sort((a, b) => a.data.chapter - b.data.chapter);
}
