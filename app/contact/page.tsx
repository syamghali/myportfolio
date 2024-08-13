"use client";
import { Microscope, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";


const socials = [
  {
    icon: <Twitter size={20} />,
    href: "https://twitter.com/chronark_",
    label: "Twitter",
    handle: "@NareshNeupane",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:dev@chronark.com",
    label: "Email",
    handle: "NareshN@gtown.edu",
  },
  {
    icon: <Microscope size={20} />,
    href: "https://scholar.google.com/citations?user=2ZfFrsoAAAAJ&hl=en",
    label: "Google Scholar",
    handle: "NareshNeupane",
  },
];

export default function Example() {
  return (
    <div className="bg-black"> {/* Set background to black */}
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {socials.map((s) => (
            <Card key={s.label}> {/* Add key prop to Card */}
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-500 group transform transition-transform md:gap-8 md:py-24 lg:pb-48 md:p-16 hover:scale-105 hover:shadow-md hover:bg-zinc-850"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-300 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-800 border-zinc-500 bg-zinc-900 group-hover:border-zinc-300 drop-shadow-orange transform transition-transform group-hover:scale-115">
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="lg:text-xl font-medium duration-300 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-300 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
