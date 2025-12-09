"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import EmailForm from "./EmailForm";

// Company logos
const companyLogos = {
  uber: <span className="text-black font-bold text-sm">Uber</span>,
  paypal: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path
        d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"
        fill="#003087"
      />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        fill="black"
      />
    </svg>
  ),
  google: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  ),
  meta: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path
        d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"
        fill="#0866FF"
      />
    </svg>
  ),
  apple: (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path
        d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
        fill="black"
      />
    </svg>
  ),
};

// Job data for animation
const jobCards = [
  {
    logo: "uber",
    title: "Job Offer Letter",
    subtitle: "Congratulations! You've been...",
  },
  {
    logo: "paypal",
    title: "Interview Notification",
    subtitle: "We will come back in 2-3 days",
  },
  {
    logo: "uber",
    title: "Follow-Up Reminder",
    subtitle: "Please confirm your accepta...",
  },
  {
    logo: "x",
    title: "Confirmation of Application",
    subtitle: "Your interview has been move...",
  },
  {
    logo: "google",
    title: "Invitation to Interview",
    subtitle: "Thank you for applying with us",
  },
  {
    logo: "meta",
    title: "Interview Rescheduling Notice",
    subtitle: "We have updated your intervie...",
  },
  {
    logo: "apple",
    title: "Offer Letter",
    subtitle: "We are pleased to extend...",
  },
];

// Spinning star component
function SpinningStar() {
  return (
    <div className="w-5 h-5 relative">
      <div
        className="absolute inset-0 animate-spin"
        style={{ animationDuration: "3s" }}
      >
        <svg viewBox="0 0 20 20" fill="none" className="w-full h-full">
          <path
            d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5L10 0Z"
            fill="#00FF00"
          />
        </svg>
      </div>
    </div>
  );
}

// Job Card Component
function JobCard({
  logo,
  title,
  subtitle,
}: {
  logo: keyof typeof companyLogos;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="bg-[#171A18] rounded-[20px] p-3 w-full shrink-0">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <div className="bg-white rounded-xl w-10 h-10 flex items-center justify-center">
            {companyLogos[logo]}
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-white text-xs font-semibold">{title}</p>
            <p className="text-[#506858] text-xs">{subtitle}</p>
          </div>
        </div>
        <div className="bg-[#232A25] rounded-xl px-1.5 py-0.5">
          <span className="text-[#506858] text-[10px] font-bold">New</span>
        </div>
      </div>
    </div>
  );
}

// Animated Hero Card Component
function AnimatedHeroCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [invitationCount, setInvitationCount] = useState(25);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % jobCards.length);
      setInvitationCount((prev) => {
        // Cap at 99, then reset to 25
        if (prev >= 99) return 25;
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Get 4 cards starting from current index (infinite loop)
  const getVisibleCards = () => {
    const result = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % jobCards.length;
      result.push({ ...jobCards[index], key: `${currentIndex}-${i}` });
    }
    return result;
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="backdrop-blur-md bg-[#0F100F] border border-[#171A18] rounded-2xl md:rounded-3xl w-full max-w-[370px] h-[340px] md:h-[388px] overflow-hidden relative">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-[#0F100F] px-3 md:px-4 pt-4 md:pt-5 pb-2 md:pb-3">
        <div className="flex flex-col gap-1.5 md:gap-2">
          <div className="flex items-center gap-2">
            <SpinningStar />
            <span className="text-white text-sm md:text-lg font-medium">
              Searching for new opportunities
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs md:text-sm">
            <svg
              viewBox="0 0 18 18"
              className="w-4 h-4 md:w-[18px] md:h-[18px]"
              fill="none"
            >
              <path
                d="M15 6.75L9 12.75L3 6.75"
                stroke="#506858"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 3H15"
                stroke="#506858"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span>
              <span className="text-[#00FF00] transition-all duration-300">
                +{invitationCount}
              </span>
              <span className="text-[#506858] font-medium">
                {" "}
                interview invitations today
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Cards Container - items shift one by one */}
      <div className="absolute top-[65px] md:top-[80px] left-3 right-3 md:left-4 md:right-4 bottom-0">
        <div className="flex flex-col gap-2">
          {visibleCards.map((card, index) => (
            <div
              key={card.key}
              className={`transition-all duration-300 ${
                index === 0 ? "animate-slide-down" : ""
              }`}
            >
              <JobCard
                logo={card.logo as keyof typeof companyLogos}
                title={card.title}
                subtitle={card.subtitle}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-t from-[#0F100F] to-transparent z-10 pointer-events-none" />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Background.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        {/* Bottom fade to blend with next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F100F]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-16">
        {/* Title Container */}
        <div className="flex flex-col items-center text-center mb-6 md:mb-8">
          <h1 className="text-white text-3xl md:text-5xl font-medium leading-tight md:leading-[48px] mb-4 md:mb-5">
            Your daily list of
            <br />
            <span className="text-[#00FF00]">valid job vacancies</span>
          </h1>
          <p className="text-[#506858] text-sm md:text-base font-medium max-w-lg px-4 md:px-0">
            Increase offer is an agent that finds and applies to jobs
            automatically, then gives you a list of valid job openings daily.
          </p>
        </div>

        {/* Email Form */}
        <div className="flex justify-center mb-6 md:mb-8 px-2 md:px-0">
          <EmailForm />
        </div>

        {/* Hero Card Animation */}
        <div className="flex justify-center mb-8 md:mb-12 px-2 md:px-0">
          <AnimatedHeroCard />
        </div>

        {/* Job Sources */}
        <div className="flex flex-col items-center gap-6 md:gap-10">
          <p className="text-[#506858] text-base md:text-lg font-medium text-center">
            One inbox for invitations.
            <br />
            <span className="text-white">Top job sources</span>
          </p>

          {/* Infinite sliding logos */}
          <div className="w-full max-w-3xl overflow-hidden px-4 md:px-0">
            <div className="flex animate-slide gap-8 md:gap-16">
              {/* First set */}
              <div className="flex items-center gap-8 md:gap-16 shrink-0">
                <Image
                  src="/LinkedIn.svg"
                  alt="LinkedIn"
                  width={100}
                  height={24}
                  className="w-[70px] md:w-[100px] h-auto"
                />
                <Image
                  src="/Glassdoor.svg"
                  alt="Glassdoor"
                  width={120}
                  height={24}
                  className="w-[85px] md:w-[120px] h-auto"
                />
                <Image
                  src="/Wellfound.svg"
                  alt="Wellfound"
                  width={100}
                  height={24}
                  className="w-[70px] md:w-[100px] h-auto"
                />
                <Image
                  src="/Indeed.svg"
                  alt="Indeed"
                  width={80}
                  height={24}
                  className="w-[55px] md:w-[80px] h-auto"
                />
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-8 md:gap-16 shrink-0">
                <Image
                  src="/LinkedIn.svg"
                  alt="LinkedIn"
                  width={100}
                  height={24}
                  className="w-[70px] md:w-[100px] h-auto"
                />
                <Image
                  src="/Glassdoor.svg"
                  alt="Glassdoor"
                  width={120}
                  height={24}
                  className="w-[85px] md:w-[120px] h-auto"
                />
                <Image
                  src="/Wellfound.svg"
                  alt="Wellfound"
                  width={100}
                  height={24}
                  className="w-[70px] md:w-[100px] h-auto"
                />
                <Image
                  src="/Indeed.svg"
                  alt="Indeed"
                  width={80}
                  height={24}
                  className="w-[55px] md:w-[80px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
