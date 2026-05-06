import { Icon } from "@iconify/react";

const icons = [
  "simple-icons:react",
  "simple-icons:svelte",
  "simple-icons:javascript",
  "simple-icons:tailwindcss",
  "simple-icons:alpinedotjs",
  "simple-icons:vercel",
] as const;

export function Logos() {
  return (
    <div className="mt-24">
      <h2 className="text-center text-slate-500">Works with your technologies</h2>
      <div className="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap">
        {icons.map((name) => (
          <Icon key={name} className="size-8 md:size-12 text-slate-700" icon={name} />
        ))}
      </div>
    </div>
  );
}
