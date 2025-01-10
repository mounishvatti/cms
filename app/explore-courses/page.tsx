"use client";

import React from "react";
import { BentoGridDemo } from "@/components/explore-courses";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="mb-10">
        <BentoGridDemo />
      </div>
      <div className="flex justify-center items-center mb-16">
        <Button variant="default">View More</Button>
      </div>
      <Footer />
    </>
  );
}
