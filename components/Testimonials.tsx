"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div id="testimonials" className="h-[40rem] rounded-md flex flex-col antialiased bg-slate-950  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-slate-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I had the pleasure of being Adam's Teaching Assistant when he attended UCF's in-depth, 12 week full stack web development bootcamp. Adam worked incredibly hard during his time with us and maintained the highest possible grade average. He and I often worked together outside of class on homework issues, which was a testament to the maximum amount of effort he put in. Adam is a team player. He has a great attitude, a strong work ethic, and is generally a delight to be around. He is a multi-talented individual with a strong background in photography, design, and development. Any employer who adds him to their roster will find great value added to their team.",
    name: "Dan Rosenbaum",
    title: "Boot Camp TA",
  },
  {
    quote:
      "It is rare to find a standout talent like Adam, I had the pleasure of being his classmate at the UCF coding bootcamp. Adam’s eye for design and knowledge in web development was a great asset during multiple group projects. Adam would be a fantastic asset to any organization.",
    name: "Patrick Moore",
    title: "Boot Camp Classmate",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
