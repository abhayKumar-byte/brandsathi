"use client";

import NextLink from "next/link";
import { cn } from "@/lib/utils/cn";

export type NavChild = { title: string; path: string };

type Props = {
  title: string;
  items: NavChild[];
  lastItem: boolean;
};

export function NavDropdown({ title, items, lastItem }: Props) {
  return (
    <li className="relative">
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center gap-1 w-full lg:w-auto lg:px-3 py-2 text-gray-600 hover:text-gray-900 [&::-webkit-details-marker]:hidden">
          <span>{title}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-3 h-3 mt-0.5 transition-transform group-open:rotate-180"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </summary>
        <div
          className={cn(
            "lg:absolute w-full lg:w-48 z-10 mt-1",
            lastItem ? "lg:right-0 origin-top-right" : "lg:left-0 origin-top-left"
          )}
        >
          <div className="px-3 lg:py-2 lg:bg-white lg:rounded-md lg:shadow-sm lg:border flex flex-col">
            {items.map((item) => {
              const className = "py-1 text-gray-600 hover:text-gray-900";
              const key = item.path + item.title;
              return item.path.startsWith("/") ? (
                <NextLink key={key} href={item.path} className={className}>
                  {item.title}
                </NextLink>
              ) : (
                <a key={key} href={item.path} className={className}>
                  {item.title}
                </a>
              );
            })}
          </div>
        </div>
      </details>
    </li>
  );
}
