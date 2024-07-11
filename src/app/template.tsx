"use client";

import { animatePageIn } from "@/libs/utils/animation";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <div className="min-h-screen overflow-hidden">
      <div
        id="banner-1"
        className="min-h-screen bg-neutral-950 z-50 fixed top-0 left-0 w-1/5"
      />
      <div
        id="banner-2"
        className="min-h-screen bg-neutral-950 z-50 fixed top-0 left-[20%] w-1/5"
      />
      <div
        id="banner-3"
        className="min-h-screen bg-neutral-950 z-50 fixed top-0 left-[40%] w-1/5"
      />
      <div
        id="banner-4"
        className="min-h-screen bg-neutral-950 z-50 fixed top-0 left-[60%] w-1/5"
      />
      <div
        id="banner-5"
        className="min-h-screen bg-neutral-950 z-50 fixed top-0 left-[80%] w-1/5"
      />
      <div
        id="banner-6"
        className="min-h-screen bg-neutral-950 z-50 fixed top-0 left-[100%] w-1/5"
      />

      {children}
    </div>
  );
}
