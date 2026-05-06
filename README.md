# Brandsathi

Marketing site built with [Next.js](https://nextjs.org/) (App Router), TypeScript, and Tailwind CSS v4.

## Scripts

- `npm run dev` — start dev server at [http://localhost:3000](http://localhost:3000)
- `npm run build` — production build
- `npm run start` — run production server
- `npm run lint` — ESLint

## Content

- Blog posts: `src/content/blog` (`.md` or `.mdx`). Frontmatter is validated with Zod in `src/lib/content/schemas.ts`.
- Team: `src/content/team` (`.md`).

## Environment

- `NEXT_PUBLIC_SITE_URL` — canonical site URL for metadata (default: `https://brandsathi.com`).

## Contact form

Set your Web3Forms `access_key` in `src/components/ContactForm.tsx` (or move it to an env variable).
