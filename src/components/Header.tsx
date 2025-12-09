"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-16 md:py-10">
      {/* Logo */}
      <div className="flex items-center gap-2 md:gap-3">
        <Image
          src="/Increase offer_Pictogram.svg"
          alt="Logo"
          width={32}
          height={32}
          className="w-7 h-7 md:w-8 md:h-8"
        />
        <span className="text-white text-base md:text-xl font-medium">
          Increase offer
        </span>
      </div>

      {/* Join Waitlist Button */}
      <button
        onClick={() => {
          document
            .getElementById("waitlist-form")
            ?.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        className="bg-[#232A25] hover:bg-[#2d3630] text-white px-3 py-2 md:px-4 rounded-xl md:rounded-2xl font-medium text-sm md:text-base transition-colors"
      >
        Join Waitlist
      </button>
    </header>
  );
}
