import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Publications", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="mt-8 animate-fade-in">
        <ul className="flex items-center justify-center gap-6"> {/* Increased gap for larger navbar text */}
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg duration-500 text-zinc-500 hover:text-amber-500" /* Made navbar text larger and added hover color */
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="flex flex-col items-center justify-center flex-grow space-y-8"> {/* Container to control positioning and spacing */}
        <img
          alt="Naresh Neupane"
          src="/headshotpicture.jpg"
          className="w-64 h-64 rounded-full border-4 border-white"
        />
        <h1 className="text-3xl text-transparent duration-1000 bg-[#FF6900] cursor-default text-edge-outline animate-title font-display sm:text-5xl md:text-7xl whitespace-nowrap bg-clip-text mt-auto">
          naresh neupane
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-amber-500/0 via-amber-500/50 to-amber-500/0" /> {/* Added amber gradient */}
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500">
            I'm a{" "}
            <Link
              target="_blank"
              href="https://gufaculty360.georgetown.edu/s/contact/00336000014T09rAAC/naresh-neupane"
              className="underline duration-500 text-amber-500 hover:text-amber-300"
            >
              Researcher
            </Link>{" "}
            and a Senior Data Scientist working on credit modeling.
          </h2>
        </div>
      </div>
    </div>
  );
}
