import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { teamFrontmatterSchema, type TeamFrontmatter } from "./schemas";

const TEAM_DIR = path.join(process.cwd(), "src/content/team");

export type TeamMember = {
  slug: string;
  data: TeamFrontmatter;
};

function listTeamFiles(): string[] {
  if (!fs.existsSync(TEAM_DIR)) return [];
  return fs.readdirSync(TEAM_DIR).filter((f) => f.endsWith(".md"));
}

export function getPublishedTeamMembers(): TeamMember[] {
  const members: TeamMember[] = [];
  const now = new Date();

  for (const filename of listTeamFiles()) {
    const fullPath = path.join(TEAM_DIR, filename);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(raw);
    const parsed = teamFrontmatterSchema.safeParse(data);
    if (!parsed.success) {
      console.warn(`Skipping invalid team frontmatter: ${filename}`, parsed.error.flatten());
      continue;
    }
    if (parsed.data.draft || parsed.data.publishDate >= now) continue;
    const slug = filename.replace(/\.md$/, "");
    members.push({ slug, data: parsed.data });
  }

  return members;
}
