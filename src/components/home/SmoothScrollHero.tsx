"use client";

import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useSpring,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { useRef } from "react";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-white">
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.035,
          wheelMultiplier: 0.85,
          touchMultiplier: 0.9,
          syncTouch: true,
          smoothWheel: true,
          // infinite: true,
        }}
      >
        <Hero />
        <Schedule />
      </ReactLenis>
    </div>
  );
};

// const Nav = () => {
//   return (
//     <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
//       <SiSpacex className="text-3xl mix-blend-difference" />
//       <button
//         onClick={() => {
//           document.getElementById("launch-schedule")?.scrollIntoView({
//             behavior: "smooth",
//           });
//         }}
//         className="flex items-center gap-1 text-xs text-zinc-400"
//       >
//         LAUNCH SCHEDULE <FiArrowRight />
//       </button>
//     </nav>
//   );
// };

const SECTION_HEIGHT = 1500;

const Hero = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={heroRef}
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage targetRef={heroRef} />

      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-white/0 to-white" />
    </div>
  );
};

const CenterImage = ({ targetRef }: { targetRef: { current: HTMLDivElement | null } }) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const clip1 = useTransform(scrollYProgress, [0, 1], [10, 0]);
  const clip2 = useTransform(scrollYProgress, [0, 1], [90, 100]);
  const clip1Smooth = useSpring(clip1, { stiffness: 85, damping: 20, mass: 0.3 });
  const clip2Smooth = useSpring(clip2, { stiffness: 85, damping: 20, mass: 0.3 });

  const clipPath = useMotionTemplate`polygon(${clip1Smooth}% ${clip1Smooth}%, ${clip2Smooth}% ${clip1Smooth}%, ${clip2Smooth}% ${clip2Smooth}%, ${clip1Smooth}% ${clip2Smooth}%)`;

  const backgroundSize = useTransform(
    scrollYProgress,
    [0, 1],
    ["170%", "100%"]
  );
  const backgroundSizeSmooth = useSpring(backgroundSize, { stiffness: 85, damping: 22, mass: 0.35 });

  const opacity = useTransform(
    scrollYProgress,
    [0.72, 1],
    [1, 0]
  );
  const opacitySmooth = useSpring(opacity, { stiffness: 90, damping: 24, mass: 0.3 });

  return (
    <motion.div
      className="sticky top-0 z-10 h-screen w-full"
      style={{
        clipPath,
        backgroundSize: backgroundSizeSmooth,
        opacity: opacitySmooth,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2670&auto=format&fit=crop)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="relative z-20 mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2670&auto=format&fit=crop"
        alt="Marketing analytics dashboard"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
        alt="Team strategy workshop"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2370&auto=format&fit=crop"
        alt="Performance growth chart"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop"
        alt="Product growth planning"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

type ParallaxImgProps = {
  className: string;
  alt: string;
  src: string;
  start: number;
  end: number;
};

const ParallaxImg = ({ className, alt, src, start, end }: ParallaxImgProps) => {
  const ref = useRef<HTMLImageElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const ySmooth = useSpring(y, { stiffness: 75, damping: 18, mass: 0.3 });
  const scaleSmooth = useSpring(scale, { stiffness: 75, damping: 18, mass: 0.3 });
  const opacitySmooth = useSpring(opacity, { stiffness: 85, damping: 20, mass: 0.25 });
  const transform = useMotionTemplate`translateY(${ySmooth}px) scale(${scaleSmooth})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity: opacitySmooth }}
    />
  );
};

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-black"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-brand-dark"
      >
        Growth Execution Timeline
      </motion.h1>
      <ScheduleItem title="Discovery & Audit" date="Week 1" location="Remote / India" />
      <ScheduleItem title="SEO + PPC Setup" date="Week 2" location="Execution Pod" />
      <ScheduleItem title="Landing Page Sprint" date="Week 3" location="Design + Dev" />
      <ScheduleItem title="Tracking & Attribution" date="Week 4" location="Analytics Team" />
      <ScheduleItem title="Conversion Optimization" date="Week 5" location="Growth Team" />
      <ScheduleItem title="Scale Campaigns" date="Week 6" location="Paid Media Team" />
      <ScheduleItem title="Monthly Strategy Review" date="Week 7" location="BrandStathi HQ" />
    </section>
  );
};

type ScheduleItemProps = {
  title: string;
  date: string;
  location: string;
};

const ScheduleItem = ({ title, date, location }: ScheduleItemProps) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-black/15 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-brand-dark">{title}</p>
        <p className="text-sm uppercase text-black/60">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-black/60">
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};
