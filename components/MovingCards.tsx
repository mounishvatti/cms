"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import MovingCardsData from "@/components/data/movingCardsData";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <p className="text-2xl font-bold py-10">
      Hear from some of our happy clients about their experiences with us.
      </p>
      <InfiniteMovingCards
        items={MovingCardsData}
        direction="left"
        speed="slow"
        className="bg-white dark:bg-black"
      />
    </div>
  );
}