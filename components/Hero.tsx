"use client";

import React from "react";
import { Vortex } from "./ui/vortex";

export function Hero() {
  return (
    <div className="mx-auto h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Greetings, I'm Adam
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          I'm a front end developer specializing in ReactJS and WordPress
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 text-white border">View My Work</button>
        </div>
      </Vortex>
    </div>
  );
}
