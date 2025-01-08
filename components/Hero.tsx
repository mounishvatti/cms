"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Upskill",
    },
    {
      text: "yourself",
    },
    {
      text: "with",
    },
    {
      text: "Coursera.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xl mb-10">
        The road to becoming a <span className="text-blue-400 font-bold text-2xl underline">100xDeveloper</span> starts here
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm font-medium">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm font-medium">
          Signup for free
        </button>
      </div>
    </div>
  );
}
