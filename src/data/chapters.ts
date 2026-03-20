import { getCollection } from "astro:content";

export const levels = [
  { key: "beginner", label: "Fundamentals", color: "var(--color-green)" },
  { key: "intermediate", label: "Scaling", color: "var(--color-yellow)" },
  { key: "advanced", label: "Advanced", color: "var(--color-red)" },
] as const;

export async function getChaptersSorted() {
  const chapters = await getCollection("chapters");
  return chapters.sort((a, b) => a.data.chapter - b.data.chapter);
}

export function isTutorial(ch: { data: { topics: string[] } }) {
  return ch.data.topics.includes("tutorial");
}

export function isCaseStudy(ch: { data: { title: string } }) {
  return ch.data.title.startsWith("Case Study:");
}

export function groupChapters(chapters: Awaited<ReturnType<typeof getChaptersSorted>>) {
  const tutorials = chapters.filter((c) => isTutorial(c));
  const caseStudies = chapters.filter((c) => isCaseStudy(c));
  const core = chapters.filter((c) => !isTutorial(c) && !isCaseStudy(c));
  return { core, tutorials, caseStudies };
}
