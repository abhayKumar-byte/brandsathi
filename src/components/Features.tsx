import { Icon } from "@iconify/react";

const features = [
  {
    title: "Bring Your Own Framework",
    description:
      "Build your site using React, Svelte, Vue, Preact, web components, or just plain ol' HTML + JavaScript.",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "100% Static HTML, No JS",
    description:
      "Brandsathi renders your entire page to static HTML, removing all JavaScript from your final build by default.",
    icon: "bx:bxs-window-alt",
  },
  {
    title: "On-Demand Components",
    description:
      "Need some JS? Brandsathi can automatically hydrate interactive components when they become visible on the page.",
    icon: "bx:bxs-data",
  },
  {
    title: "Broad Integration",
    description:
      "Brandsathi supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages.",
    icon: "bx:bxs-bot",
  },
  {
    title: "SEO Enabled",
    description:
      "Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!",
    icon: "bx:bxs-file-find",
  },
  {
    title: "Community",
    description:
      "Brandsathi is an open source project powered by hundreds of contributors making thousands of individual contributions.",
    icon: "bx:bxs-user",
  },
];

export function Features() {
  return (
    <>
      <div className="mt-16 md:mt-0">
        <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">Everything you need to start a website</h2>
        <p className="text-lg mt-4 text-slate-600">
          Brandsathi comes batteries included. It takes the best parts of state-of-the-art tools and adds its own
          innovations.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
        {features.map((item) => (
          <div key={item.title} className="flex gap-4 items-start">
            <div className="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0 flex items-center justify-center">
              <Icon className="text-white text-xl" icon={item.icon} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>{" "}
              <p className="text-slate-500 mt-2 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
