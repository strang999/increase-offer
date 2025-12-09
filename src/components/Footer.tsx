"use client";

import Image from "next/image";
import EmailForm from "./EmailForm";

export default function Footer() {
  return (
    <section className="relative py-12 md:py-20 bg-[#0F100F] overflow-hidden">
      {/* Geometric background pattern - matching Figma */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[400px] md:w-[600px] h-[400px] md:h-[500px] pointer-events-none hidden md:block">
        {/* Vertical lines */}
        <div className="absolute left-1/4 top-0 w-px h-full bg-[#00FF00]/10" />
        <div className="absolute left-1/2 top-0 w-px h-full bg-[#00FF00]/10" />
        <div className="absolute left-3/4 top-0 w-px h-full bg-[#00FF00]/10" />
        {/* Horizontal lines */}
        <div className="absolute left-0 top-1/4 w-full h-px bg-[#00FF00]/10" />
        <div className="absolute left-0 top-1/2 w-full h-px bg-[#00FF00]/10" />
        <div className="absolute left-0 top-3/4 w-full h-px bg-[#00FF00]/10" />
        {/* Rectangles */}
        <div className="absolute left-[20%] top-[15%] w-32 h-48 border border-[#00FF00]/10 rounded-lg" />
        <div className="absolute left-[35%] top-[25%] w-40 h-56 border border-[#00FF00]/10 rounded-lg" />
        <div className="absolute left-[50%] top-[10%] w-36 h-64 border border-[#00FF00]/10 rounded-lg" />
        <div className="absolute left-[40%] top-[40%] w-28 h-40 border border-[#00FF00]/10 rounded-lg" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16 flex flex-col items-center">
        {/* CTA Section */}
        <div className="flex flex-col items-center gap-6 md:gap-8 w-full max-w-[520px]">
          <div className="flex flex-col items-center gap-4 md:gap-5 w-full">
            <h2 className="text-white text-2xl md:text-[32px] font-medium leading-tight text-center">
              First 100 sign-ups get
              <br />a lifetime discount
            </h2>

            {/* Email Form */}
            <EmailForm className="w-full" />
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3 mt-6 md:mt-8">
            <Image
              src="/Increase offer_Pictogram.svg"
              alt="Logo"
              width={28}
              height={28}
              className="w-6 h-6 md:w-7 md:h-7"
            />
            <span className="text-white text-lg md:text-xl font-medium">
              Increase offer
            </span>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-[#506858] text-sm md:text-base text-center mt-20 md:mt-40">
          © 2025 Made with 💚 on Earth
        </p>
      </div>
    </section>
  );
}
