"use client"
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { Button } from "./ui/button";

export function BentoGridDemo() {
  return (
    <>
      <div>
        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              url = {item.url}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const baseUrl = "/explore-courses";
const items = [
  {
    title: "Artificial Intelligence",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    url: `${baseUrl}/ai`,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "DevOps",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    url: `${baseUrl}/devops`,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Fullstack Development",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    url: `${baseUrl}/fullstack`,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Data Structures and Algorithms (Level - Beginner to Advanced)",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    url: `${baseUrl}/dsa`,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Database Management",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    url: `${baseUrl}/dbms`,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Generative AI",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    url: `${baseUrl}/genai`,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Object-oriented Programming Concepts",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    url: `${baseUrl}/oops`,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
