"use client";

import Image from "next/image";
import { Search, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8F8FD]" >
      <div className="w-full  md:max-w-7xl mx-6 md:mx-auto my-20 md:mt-10  grid md:grid-cols-2 items-center gap-12">

        <div className="z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Discover <br />
            more than <br />
            <span className="text-[#26A4FF] relative inline-block">
              5000+ Jobs

              <svg
                className="absolute w-full h-4 -bottom-2 left-0"
                viewBox="0 0 200 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,15 Q50,0 100,15 T200,15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M10,18 Q60,5 110,18 T190,18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  opacity="0.5"
                />
              </svg>
            </span>
          </h1>

          <p className="text-gray-500 max-w-md mb-8">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>

          <div className="bg-white shadow-xl p-2 flex flex-col md:flex-row gap-2 md:items-center max-w-xl">

            <div className="flex items-center gap-2 px-3 py-2 flex-1">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="outline-none w-full text-sm placeholder:text-gray-400"
              />
            </div>

            <div className="flex items-center gap-2 px-3 py-2 md:border-l border-gray-200">
              <MapPin size={18} className="text-gray-400" />
              <select className="outline-none text-sm bg-transparent">
                <option>Florence, Italy</option>
                <option>Dhaka, Bangladesh</option>
                <option>Remote</option>
              </select>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium">
              Search my job
            </Button>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            Popular: UI Designer, UX Researcher, Android, Admin
          </p>
        </div>

        <div className="relative hidden md:flex justify-center items-center">

          <Image
            src="/Pattern.png"
            alt="pattern"
            width={520}
            height={520}
            className="absolute z-10 w-full"
          />

          <Image
            src="/hero.png"
            alt="hero"
            width={520}
            height={520}
            priority
            className="relative z-10 object-contain"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-white rounded-t-[80px]" />
    </section>
  );
}