import { getCollection } from "astro:content";

export const golangLevels = [
  { key: "beginner", label: "Fundamentals", color: "var(--color-green)" },
  { key: "intermediate", label: "Intermediate", color: "var(--color-yellow)" },
  { key: "advanced", label: "Advanced", color: "var(--color-red)" },
] as const;

export async function getGolangChaptersSorted() {
  const chapters = await getCollection("golang");
  return chapters.sort((a, b) => a.data.chapter - b.data.chapter);
}

export function groupGolangChapters(chapters: Awaited<ReturnType<typeof getGolangChaptersSorted>>) {
  const core = chapters;
  return { core };
}
