import { getCollection } from "astro:content";

export const apiDesignLevels = [
  { key: "beginner", label: "Fundamentals", color: "var(--color-green)" },
  { key: "intermediate", label: "Intermediate", color: "var(--color-yellow)" },
  { key: "advanced", label: "Advanced", color: "var(--color-red)" },
] as const;

export async function getApiDesignChaptersSorted() {
  const chapters = await getCollection("api-design");
  return chapters.sort((a, b) => a.data.chapter - b.data.chapter);
}

export function groupApiDesignChapters(chapters: Awaited<ReturnType<typeof getApiDesignChaptersSorted>>) {
  const core = chapters;
  return { core };
}
