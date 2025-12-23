"use client";

import { useEffect, useState } from "react";

// Problem illustration - Browser with tabs (animated)
function BrowserIllustration() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 7);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[320px] md:w-[370px] h-[180px] md:h-[209px] relative">
      <div className="absolute inset-0 bg-[#171A18] rounded-xl md:rounded-2xl border border-[#232A25] overflow-hidden">
        {/* Tab bar */}
        <div className="flex items-center gap-1 px-3 md:px-4 py-2 md:py-3">
          {/* Active tab indicator */}
          <div className="bg-[#00FF00] rounded h-2.5 md:h-3 w-16 md:w-20 mr-2" />
          {/* Tab dots */}
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
                i === activeTab ? "bg-[#00FF00]" : "bg-[#232A25]"
              }`}
            />
          ))}
        </div>

        {/* URL bar */}
        <div className="mx-3 md:mx-4 mb-2 md:mb-3">
          <div className="bg-[#232A25] rounded h-3 md:h-4 w-full" />
        </div>

        {/* Content area */}
        <div className="px-3 md:px-4 pb-3 md:pb-4">
          <div className="flex gap-3 md:gap-4">
            {/* Image placeholder */}
            <div className="bg-[#232A25] rounded w-[100px] md:w-[140px] h-[80px] md:h-[100px] shrink-0" />
            {/* Text lines */}
            <div className="flex-1 space-y-1.5 md:space-y-2 pt-1">
              <div className="bg-[#232A25] rounded h-2.5 md:h-3 w-full" />
              <div className="bg-[#232A25] rounded h-2.5 md:h-3 w-4/5" />
              <div className="bg-[#232A25] rounded h-2.5 md:h-3 w-full" />
              <div className="bg-[#232A25] rounded h-2.5 md:h-3 w-3/5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Problem illustration - Grid with green notification dots appearing randomly
function KeyboardIllustration() {
  const [activeDots, setActiveDots] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly show 2-3 green dots in different positions
      const numDots = Math.floor(Math.random() * 2) + 2;
      const newDots: number[] = [];
      for (let i = 0; i < numDots; i++) {
        let pos;
        do {
          pos = Math.floor(Math.random() * 18);
        } while (newDots.includes(pos));
        newDots.push(pos);
      }
      setActiveDots(newDots);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[320px] md:w-[370px] h-[180px] md:h-[209px] relative">
      <div className="absolute inset-3 md:inset-4 bg-[#171A18] rounded-xl md:rounded-2xl border border-[#232A25] p-3 md:p-5 overflow-hidden flex items-center justify-center">
        {/* 3 rows x 6 cols grid */}
        <div className="grid grid-cols-6 gap-2 md:gap-3">
          {Array.from({ length: 18 }).map((_, i) => {
            const isActive = activeDots.includes(i);
            return (
              <div key={i} className="relative">
                {/* Box becomes lighter when active */}
                <div
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-md md:rounded-lg transition-all duration-500 ${
                    isActive ? "bg-[#3a4a3e]" : "bg-[#232A25]"
                  }`}
                />
                {/* Green notification dot on top-right - with scale/opacity transition */}
                <div
                  className={`absolute -top-1 -right-1 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#00FF00] transition-all duration-500 transform ${
                    isActive ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Problem illustration - Progress bars / timeline with green highlights
function CalendarIllustration() {
  const [activePositions, setActivePositions] = useState<
    { row: number; col: number }[]
  >([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly highlight 2-3 bars
      const positions: { row: number; col: number }[] = [];
      const numActive = Math.floor(Math.random() * 2) + 2;
      for (let i = 0; i < numActive; i++) {
        positions.push({
          row: Math.floor(Math.random() * 4),
          col: Math.floor(Math.random() * 7),
        });
      }
      setActivePositions(positions);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const isActive = (row: number, col: number) => {
    return activePositions.some((p) => p.row === row && p.col === col);
  };

  // Bar widths for each position (some wider, some narrower)
  const barWidths = [
    ["w-8", "w-6", "w-10", "w-6", "w-8", "w-6", "w-10"],
    ["w-6", "w-8", "w-6", "w-10", "w-6", "w-8", "w-6"],
    ["w-10", "w-6", "w-8", "w-6", "w-10", "w-6", "w-8"],
    ["w-8", "w-10", "w-6", "w-8", "w-6", "w-10", "w-6"],
  ];

  return (
    <div className="w-[320px] md:w-[370px] h-[180px] md:h-[209px] relative">
      <div className="absolute inset-3 md:inset-4 bg-[#171A18] rounded-xl md:rounded-2xl border border-[#232A25] p-3 md:p-4 overflow-hidden">
        {/* Header bar */}
        <div className="bg-[#232A25] rounded-full h-2.5 md:h-3 w-24 md:w-32 mb-3 md:mb-4" />
        {/* Progress bar rows */}
        <div className="flex flex-col gap-2 md:gap-3">
          {Array.from({ length: 4 }).map((_, row) => (
            <div key={row} className="flex gap-1.5 md:gap-2">
              {Array.from({ length: 7 }).map((_, col) => (
                <div
                  key={col}
                  className={`h-3 md:h-4 rounded-full transition-colors duration-700 ease-in-out ${
                    barWidths[row][col]
                  } ${isActive(row, col) ? "bg-[#00FF00]" : "bg-[#232A25]"}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface ProblemItemProps {
  illustration: React.ReactNode;
  heading: string;
  description: string;
  reverse?: boolean;
}

function ProblemItem({
  illustration,
  heading,
  description,
  reverse,
}: ProblemItemProps) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="shrink-0">{illustration}</div>
      <div className="max-w-[356px] text-center md:text-left">
        <h3 className="text-white text-base md:text-lg font-medium mb-2">
          {heading}
        </h3>
        <p className="text-[#506858] text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function ProblemSection() {
  return (
    <section className="py-12 md:py-20 bg-[#0F100F]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <span className="text-white text-xs md:text-sm font-medium mb-3 md:mb-4 px-4 py-2 md:px-5 md:py-2.5 border border-[#232A25] rounded-full">
            The problem
          </span>
          <h2 className="text-white text-2xl md:text-[32px] font-medium leading-tight md:leading-9 mb-3 md:mb-4">
            Being skilled isn&apos;t enough
            <br />
            to land your dream job
          </h2>
          <p className="text-[#506858] text-sm md:text-base max-w-md px-4 md:px-0">
            You&apos;re not alone. <span className="text-[#00FF00]">72%</span>{" "}
            of job seekers say getting interview invitations is their biggest
            challenge.
          </p>
        </div>

        {/* Problems List */}
        <div className="flex flex-col gap-10 md:gap-16 max-w-[800px] mx-auto">
          {/* Problem 1 - Browser tabs */}
          <ProblemItem
            illustration={<BrowserIllustration />}
            heading="Job searching is overwhelming"
            description="Scouring job boards, LinkedIn and company websites, eats up hours of your time sifting through requirements and tailoring applications."
          />

          {/* Problem 2 - Keyboard */}
          <ProblemItem
            illustration={<KeyboardIllustration />}
            heading="Responses are scarce"
            description="You send out dozens, even hundreds, of applications, only to get silence or canned rejections in return."
            reverse
          />

          {/* Problem 3 - Calendar */}
          <ProblemItem
            illustration={<CalendarIllustration />}
            heading="It steals your life"
            description="Months drag by with no interviews, sapping your momentum and leaving you stuck in limbo."
          />
        </div>
      </div>
    </section>
  );
}
