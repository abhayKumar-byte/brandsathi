import { z } from "zod";

export const blogFrontmatterSchema = z.object({
  draft: z.boolean(),
  title: z.string(),
  snippet: z.string(),
  image: z.object({
    src: z.string(),
    alt: z.string(),
  }),
  publishDate: z.string().transform((str) => new Date(str)),
  author: z.string().default("Brandsathi"),
  category: z.string(),
  tags: z.array(z.string()),
});

export type BlogFrontmatter = z.infer<typeof blogFrontmatterSchema>;

export const teamFrontmatterSchema = z.object({
  draft: z.boolean(),
  name: z.string(),
  title: z.string(),
  avatar: z.object({
    src: z.string(),
    alt: z.string(),
  }),
  publishDate: z.string().transform((str) => new Date(str)),
});

export type TeamFrontmatter = z.infer<typeof teamFrontmatterSchema>;
