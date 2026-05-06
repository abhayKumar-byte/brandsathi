import Image from "next/image";
import { Icon } from "@iconify/react";
import { Link } from "@/components/ui/Link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1454789548920-9efd52dc403a?auto=format&fit=crop&w=1200&q=80";

export function Hero() {
  return (
    <main className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
      <div className="py-6 md:order-1 hidden md:block relative w-full max-w-[620px] aspect-[4/3]">
        <Image
          src={HERO_IMAGE}
          alt="Hero"
          fill
          sizes="(max-width: 800px) 100vw, 620px"
          priority
          className="object-cover rounded-md"
        />
      </div>
      <div>
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
          Marketing website done with Brandsathi
        </h1>
        <p className="text-lg mt-4 text-slate-600 max-w-xl">
          Brandsathi helps startups build modern marketing websites and landing pages quickly.
          <wbr /> Built for speed, flexibility, and a smooth editing workflow.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1 items-center justify-center"
          >
            <Icon className="text-white w-5 h-5" icon="bx:bxs-cloud-download" />
            Download for Free
          </Link>
          <Link
            size="lg"
            variant="outline"
            rel="noopener noreferrer"
            href="#"
            className="flex gap-1 items-center justify-center"
            target="_blank"
          >
            <Icon className="text-black w-4 h-4" icon="bx:bxl-github" />
            GitHub Repo
          </Link>
        </div>
      </div>
    </main>
  );
}
