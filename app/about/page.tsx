import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";

export const revalidate = 60;

export default function AboutMePage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-zinc-400">
            Hello! I'm Naresh Neupane, a passionate research scientist with a love for
            learning. I have an extensive background in research, machine learning, and mathmatics.
            I specialized in atmospheric dynamics during my Ph.D and have experience in
            various technologies including Python, R, and various machine learning tools.
          </p>
          <p className="mt-4 text-zinc-400">
            In my free time, I enjoy writing and spending time with family. I'm always eager to
            learn new things and take on challenges that push me to grow both
            professionally and personally.
          </p>
          <p className="mt-4 text-zinc-400">
            Feel free to reach out to me at nareshneupane@gmail.com or connect with me on
            LinkedIn to discuss potential collaborations or just to say
            hi!
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h3 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
            My Journey
          </h3>
          <p className="mt-4 text-zinc-400">
            I started my journey in the world of science when I [Brief Story of How
            You Started]. Over the years, I've had the opportunity to work on various
            projects that have allowed me to hone my skills in [Skills or Technologies].
          </p>
          <p className="mt-4 text-zinc-400">
            Some of the most rewarding experiences I've had include [Brief Highlights of
            Your Career or Projects]. These experiences have taught me the importance
            of [Key Lessons or Values].
          </p>
          <p className="mt-4 text-zinc-400">
            I'm excited to continue my journey and see where it takes me next!
          </p>
        </div>
      </div>
    </div>
  );
}
