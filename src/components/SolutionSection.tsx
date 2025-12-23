"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// ============ LOCAL ICON PATHS - Downloaded from Figma ============
const ICONS = {
  // Logo
  logo: "/icons/Increase offer_Pictogram.svg",
  // Sidebar icons
  briefcase: "/icons/icon/briefcase.svg",
  checkCircle: "/icons/icon/check-circle.svg",
  inbox: "/icons/icon/inbox.svg",
  fileText: "/icons/icon/file-text.svg",
  user: "/icons/icon/user.svg",
  settings: "/icons/icon/settings.svg",
  // Filter/Search
  filter: "/icons/icon/settings-2.svg", // Using settings-2 as filter icon
  search: "/icons/icon/search.svg",
  // Job details
  location: "/icons/marker-06.svg",
  building: "/icons/Office building.svg",
  clock: "/icons/clock-01.svg",
  level: "/icons/bar-group-01.svg",
  dollar: "/icons/currency-dollar.svg",
  lightning: "/icons/lightning-filled.svg",
  // Company logos (from companies folder)
  meta: "/companies/meta.png",
  uber: "/companies/uber.png",
  paypal: "/companies/paypa.png",
  google: "/companies/google.png",
  // Success modal
  successCheck: "/icons/check-circle.svg",
  // Application panel icons
  avatar: "/application/Avatar.png",
  phone: "/application/Phone.svg",
  xIcon: "/application/x.svg",
  atSign: "/application/icon/at-sign.svg",
  linkedin: "/application/icon/linkedin.svg",
};

// Checkbox Component - inline SVG checkmark
const Checkbox = ({ checked = false }: { checked?: boolean }) => (
  <div
    className={`w-4 h-4 rounded border-[1.5px] flex items-center justify-center transition-all ${
      checked ? "bg-[#00FF00] border-[#00FF00]" : "border-[#506858]"
    }`}
  >
    {checked && (
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path
          d="M2 5L4 7L8 3"
          stroke="#171A18"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
  </div>
);

// ============ JOB DATA ============
const jobs = [
  {
    id: 1,
    logo: ICONS.meta,
    company: "Meta inc.",
    title: "Sr. Frontend Developer",
    location: "Palo Alto, CA",
    salary: "$55 - $65/hour",
    exp: "5+ years exp",
    time: "1m ago",
  },
  {
    id: 2,
    logo: ICONS.uber,
    company: "Uber",
    title: "Senior Software Developer",
    location: "United States",
    salary: "$95K/yr - $130K/yr",
    exp: "4+ years exp",
    time: "2m ago",
  },
  {
    id: 3,
    logo: ICONS.paypal,
    company: "PayPal",
    title: "Front-End Engineer",
    location: "New York, NY",
    salary: "$128K/yr - $146K/yr",
    exp: "6+ years exp",
    time: "4m ago",
  },
  {
    id: 4,
    logo: ICONS.google,
    company: "Google",
    title: "Full-Stack Engineer",
    location: "San Francisco, CA",
    salary: "$178K/yr - $265K/yr",
    exp: "5+ years exp",
    time: "5m ago",
  },
];

// ============ ANIMATED JOBS PANEL - Exact Figma Recreation ============
function AnimatedJobsPanel() {
  const [step, setStep] = useState(0);
  const [checkedCount, setCheckedCount] = useState(-1);

  useEffect(() => {
    const runAnimation = () => {
      setStep(0);
      setCheckedCount(-1);

      // Step 1: Select "Select all" and then sequentially others
      setTimeout(() => {
        setStep(1);
        // Animate checkboxes one by one
        let count = 0;
        const checkInterval = setInterval(() => {
          setCheckedCount((prev) => prev + 1);
          count++;
          if (count >= jobs.length) clearInterval(checkInterval);
        }, 300);
      }, 2000);

      // Step 2: Show success
      setTimeout(() => setStep(2), 5000);
    };
    runAnimation();
    const interval = setInterval(runAnimation, 8000);
    return () => clearInterval(interval);
  }, []);

  const allSelected = step >= 1;
  const showSuccess = step >= 2;

  return (
    <div className="relative w-full aspect-[4/5] md:aspect-auto md:w-[500px] md:h-[443px] bg-[#080800] rounded-[24px] md:rounded-[40px] overflow-hidden font-['Montserrat',sans-serif]">
      {/* Sidebar - hidden on mobile, absolute positioned */}
      <div className="hidden md:flex flex-col gap-2 items-center w-10 absolute left-4 top-12 z-10">
        <div className="bg-white flex items-center justify-center h-10 p-2 rounded-[34px] shadow-lg shadow-white/10">
          <Image
            src={ICONS.briefcase}
            alt=""
            width={24}
            height={24}
            className="brightness-0"
          />
        </div>
        <div className="flex items-center justify-center h-10 p-2 rounded-[10px] opacity-50 hover:opacity-100 transition-opacity">
          <Image src={ICONS.checkCircle} alt="" width={24} height={24} />
        </div>
        <div className="flex items-center justify-center h-10 p-2 rounded-[34px] opacity-50 hover:opacity-100 transition-opacity">
          <Image src={ICONS.inbox} alt="" width={24} height={24} />
        </div>
        <div className="flex items-center justify-center h-10 p-2 rounded-[10px] opacity-50 hover:opacity-100 transition-opacity">
          <Image src={ICONS.fileText} alt="" width={24} height={24} />
        </div>
        <div className="flex items-center justify-center h-10 p-2 rounded-[10px] opacity-50 hover:opacity-100 transition-opacity">
          <Image src={ICONS.user} alt="" width={24} height={24} />
        </div>
        <div className="flex items-center justify-center h-10 p-2 rounded-[10px] opacity-50 hover:opacity-100 transition-opacity">
          <Image src={ICONS.settings} alt="" width={24} height={24} />
        </div>
      </div>

      <div className="flex h-full pt-3 px-3 md:pt-4 md:px-4 md:pl-16">
        {/* Main Panel */}
        <div className="flex-1 flex flex-col">
          {/* Header with logo */}
          <div className="flex items-center justify-between mb-2 md:mb-3">
            <div className="flex items-center gap-2">
              <Image
                src={ICONS.logo}
                alt=""
                width={20}
                height={20}
                className="md:w-6 md:h-6"
              />
              <span className="text-white font-medium text-base md:text-xl tracking-[0.5px]">
                All Jobs
              </span>
            </div>
            {allSelected && (
              <button className="bg-[#00FF00] hover:bg-[#00EE00] text-[#171A18] text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 md:py-1.5 rounded-3xl tracking-[0.28px] transition-colors cursor-pointer animate-fade-in shadow-[0_0_10px_rgba(0,255,0,0.3)]">
                Apply to All
              </button>
            )}
          </div>

          {/* Search/Filter Bar */}
          <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
            <div className="bg-[#171A18] rounded-3xl px-2 md:px-3 py-1.5 md:py-2 flex items-center gap-1.5 md:gap-2">
              <Image
                src={ICONS.filter}
                alt=""
                width={14}
                height={14}
                className="md:w-4 md:h-4"
              />
              <span className="text-[#506858] text-[10px] md:text-xs font-medium">
                Filters
              </span>
            </div>
            <div className="flex-1 bg-[#171A18] rounded-3xl px-2 md:px-3 py-1.5 md:py-2 flex items-center gap-1.5 md:gap-2">
              <Image
                src={ICONS.search}
                alt=""
                width={14}
                height={14}
                className="md:w-4 md:h-4"
              />
              <span className="text-[#506858] text-[10px] md:text-xs font-medium">
                Search
              </span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[#506858] text-[10px] md:text-xs font-medium hidden sm:inline">
                Select all
              </span>
              <Checkbox checked={allSelected} />
            </div>
          </div>

          {/* Job Cards */}
          <div className="flex-1 overflow-hidden space-y-1 md:space-y-1.5">
            {jobs.map((job, index) => (
              <div
                key={job.id}
                className="bg-[#171A18] rounded-lg md:rounded-xl p-2 md:p-2.5"
              >
                <div className="flex items-start justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <Image
                      src={job.logo}
                      alt=""
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                    <div>
                      <p className="text-white text-xs font-semibold leading-tight">
                        {job.title}
                      </p>
                      <p className="text-white text-[10px] font-medium">
                        {job.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#506858] text-[10px] font-medium">
                      {job.time}
                    </span>
                    <Checkbox checked={index <= checkedCount - 1} />
                  </div>
                </div>
                <div className="h-px bg-[#232A25] mb-1.5" />
                <div className="flex items-start justify-between gap-1 md:gap-2">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 md:gap-x-3 gap-y-0.5 text-[9px] md:text-[10px] flex-1">
                    <div className="flex items-center gap-1">
                      <Image
                        src={ICONS.location}
                        alt=""
                        width={12}
                        height={12}
                        className="shrink-0"
                      />
                      <span className="text-white font-medium truncate">
                        {job.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image
                        src={ICONS.clock}
                        alt=""
                        width={12}
                        height={12}
                        className="shrink-0"
                      />
                      <span className="text-white font-medium">Full-time</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image
                        src={ICONS.dollar}
                        alt=""
                        width={12}
                        height={12}
                        className="shrink-0"
                      />
                      <span className="text-white font-medium truncate">
                        {job.salary}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image
                        src={ICONS.building}
                        alt=""
                        width={12}
                        height={12}
                        className="shrink-0"
                      />
                      <span className="text-white font-medium">Remote</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image
                        src={ICONS.level}
                        alt=""
                        width={12}
                        height={12}
                        className="shrink-0"
                      />
                      <span className="text-white font-medium">
                        Senior Level
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image
                        src={ICONS.lightning}
                        alt=""
                        width={12}
                        height={12}
                        className="shrink-0"
                      />
                      <span className="text-white font-medium truncate">
                        {job.exp}
                      </span>
                    </div>
                  </div>
                  <button
                    className={`text-[10px] font-bold px-3 py-1.5 rounded-2xl shrink-0 ${
                      allSelected
                        ? "bg-[#506858] text-white"
                        : "bg-[#00FF00] text-[#171A18]"
                    }`}
                  >
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Overlay */}
      {showSuccess && (
        <>
          <div className="absolute inset-0 backdrop-blur-[10px] bg-[rgba(15,16,15,0.8)]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#171A18] rounded-[40px] w-[280px] h-[280px] md:w-[400px] md:h-[400px] flex flex-col items-center justify-center animate-fade-in">
            <div className="w-[100px] h-[100px] md:w-[160px] md:h-[160px]">
              <Image
                src={ICONS.successCheck}
                alt=""
                width={160}
                height={160}
                className="w-full h-full"
              />
            </div>
            <p className="text-white text-xl md:text-[32px] font-medium text-center mt-4 md:mt-6 leading-9">
              Applied
              <br />
              Successfully
            </p>
          </div>
        </>
      )}
    </div>
  );
}

// ============ APPLICATION DATA ============
const applications = [
  {
    id: 1,
    logo: ICONS.meta,
    company: "Meta.inc",
    title: "Sr. Frontend Developer",
    salary: "$55 - $65 / hour",
    status: "Applied",
    statusColor: "text-sky-500",
    appliedDate: "Oct 20, 2025",
  },
  {
    id: 2,
    logo: ICONS.uber,
    company: "Uber",
    title: "Senior Software Developer",
    salary: "$95K/yr - $130K/yr",
    status: "Offered",
    statusColor: "text-[#00FF00]",
    appliedDate: "Oct 20, 2025",
  },
  {
    id: 3,
    logo: ICONS.paypal,
    company: "PayPal",
    title: "Front-End Engineer",
    salary: "$95K/yr - $130K/yr",
    status: "Interviewed",
    statusColor: "text-indigo-400",
    appliedDate: "Oct 20, 2025",
  },
  {
    id: 4,
    logo: ICONS.google,
    company: "Google",
    title: "Full-Stack Engineer",
    salary: "$55 - $65 / hour",
    status: "Applied",
    statusColor: "text-sky-500",
    appliedDate: "Oct 20, 2025",
  },
];

// ============ ANIMATED APPLICATIONS PANEL ============
function AnimatedApplicationsPanel() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const runAnimation = () => {
      setStep(0);
      setTimeout(() => setStep(1), 1500);
      setTimeout(() => setStep(2), 2000);
      setTimeout(() => setStep(3), 4000);
      setTimeout(() => setStep(4), 4500);
    };
    runAnimation();
    const interval = setInterval(runAnimation, 7000);
    return () => clearInterval(interval);
  }, []);

  const buttonHighlighted = step === 1;
  const showPopup = step === 2 || step === 3;
  const closeHighlighted = step === 3;
  const showIcons = step === 4;

  return (
    <div className="relative w-full aspect-[4/5] md:aspect-auto md:w-[500px] md:h-[443px] bg-[#080800] rounded-[24px] md:rounded-[40px] overflow-hidden font-['Montserrat',sans-serif]">
      <div className="hidden md:flex flex-col gap-2 items-center w-10 absolute left-4 top-12 z-10">
        <div className="flex items-center justify-center h-10 p-2 rounded-[34px] opacity-50">
          <Image src={ICONS.briefcase} alt="" width={24} height={24} />
        </div>
        <div className="bg-white flex items-center justify-center h-10 p-2 rounded-[10px] shadow-lg shadow-white/10">
          <Image
            src={ICONS.checkCircle}
            alt=""
            width={24}
            height={24}
            className="brightness-0"
          />
        </div>
        <div className="flex items-center justify-center h-10 p-2 rounded-[34px] opacity-50">
          <Image src={ICONS.inbox} alt="" width={24} height={24} />
        </div>
        <div className="flex items-center justify-center h-10 p-2 rounded-[10px] opacity-50">
          <Image src={ICONS.fileText} alt="" width={24} height={24} />
        </div>
        <div className="flex items-center justify-center h-10 p-2 rounded-[10px] opacity-50">
          <Image src={ICONS.user} alt="" width={24} height={24} />
        </div>
        <div className="flex items-center justify-center h-10 p-2 rounded-[10px] opacity-50">
          <Image src={ICONS.settings} alt="" width={24} height={24} />
        </div>
      </div>

      <div className="flex h-full pt-3 px-3 md:pt-4 md:px-4 md:pl-16">
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-2 md:mb-3">
            <div className="flex items-center gap-2">
              <Image
                src={ICONS.logo}
                alt=""
                width={20}
                height={20}
                className="md:w-6 md:h-6"
              />
              <span className="text-white font-medium text-base md:text-xl tracking-[0.5px]">
                My Applications
              </span>
            </div>
          </div>

          <div className="flex items-center gap-0.5 md:gap-1 mb-2 md:mb-3 overflow-x-auto">
            <button className="bg-[#171A18] text-white text-[9px] md:text-[10px] font-medium px-2 md:px-3 py-1 md:py-1.5 rounded-2xl whitespace-nowrap">
              All
            </button>
            <button className="text-[#506858] text-[9px] md:text-[10px] font-medium px-2 md:px-3 py-1 md:py-1.5 whitespace-nowrap">
              Applied
            </button>
            <button className="text-[#506858] text-[9px] md:text-[10px] font-medium px-2 md:px-3 py-1 md:py-1.5 whitespace-nowrap">
              Interviewed
            </button>
            <button className="text-[#506858] text-[9px] md:text-[10px] font-medium px-2 md:px-3 py-1 md:py-1.5 whitespace-nowrap">
              Offered
            </button>
            <button className="text-[#506858] text-[9px] md:text-[10px] font-medium px-2 md:px-3 py-1 md:py-1.5 whitespace-nowrap">
              Rejected
            </button>
          </div>

          <div className="flex-1 overflow-hidden space-y-1 md:space-y-1.5">
            {applications.map((app, index) => (
              <div
                key={app.id}
                className="bg-[#171A18] rounded-lg md:rounded-xl p-2 md:p-2.5 animate-slide-down opacity-0 fill-mode-forwards"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div
                      className={`rounded-lg w-8 h-8 flex items-center justify-center overflow-hidden shrink-0 ${
                        app.logo.includes("uber") ? "bg-black" : "bg-white"
                      }`}
                    >
                      <Image
                        src={app.logo}
                        alt=""
                        width={app.logo.includes("uber") ? 32 : 28}
                        height={app.logo.includes("uber") ? 32 : 28}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold leading-tight">
                        {app.title}
                      </p>
                      <p className="text-white text-[10px] font-medium">
                        {app.company}
                      </p>
                    </div>
                  </div>
                  {index === 0 && showIcons ? (
                    <div className="flex items-center gap-1 md:gap-1.5 animate-fade-in">
                      <button className="w-6 h-6 md:w-7 md:h-7 rounded-full border border-[#506858] flex items-center justify-center">
                        <Image
                          src={ICONS.atSign}
                          alt=""
                          width={12}
                          height={12}
                          className="md:w-3.5 md:h-3.5"
                        />
                      </button>
                      <button className="w-6 h-6 md:w-7 md:h-7 rounded-full border border-[#506858] flex items-center justify-center">
                        <Image
                          src={ICONS.phone}
                          alt=""
                          width={12}
                          height={12}
                          className="md:w-3.5 md:h-3.5"
                        />
                      </button>
                      <button className="w-6 h-6 md:w-7 md:h-7 rounded-full border border-[#506858] flex items-center justify-center">
                        <Image
                          src={ICONS.linkedin}
                          alt=""
                          width={12}
                          height={12}
                          className="md:w-3.5 md:h-3.5"
                        />
                      </button>
                    </div>
                  ) : (
                    <button
                      className={`border text-[8px] md:text-[9px] font-medium px-1.5 md:px-2 py-0.5 md:py-1 rounded-2xl transition-all duration-200 whitespace-nowrap ${
                        index === 0 && buttonHighlighted
                          ? "bg-[#00FF00] text-[#171A18] border-[#00FF00] scale-105"
                          : "border-[#00FF00] text-[#00FF00]"
                      }`}
                    >
                      Recruiter Contacts
                    </button>
                  )}
                </div>
                <div className="h-px bg-[#232A25] mb-1.5" />
                <div className="flex items-center gap-2 md:gap-4 text-[9px] md:text-[10px] flex-wrap">
                  <div className="flex items-center gap-1">
                    <span className="text-[#506858] font-medium">Salary:</span>
                    <span className="text-white font-medium truncate max-w-[80px] md:max-w-none">
                      {app.salary}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#506858] font-medium">Status:</span>
                    <span className={`font-medium ${app.statusColor}`}>
                      {app.status}
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-1">
                    <span className="text-[#506858] font-medium">Applied:</span>
                    <span className="text-white font-medium">
                      {app.appliedDate}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showPopup && (
        <>
          <div className="absolute inset-0 backdrop-blur-[10px] bg-[rgba(15,16,15,0.8)]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#171A18] rounded-[24px] w-[200px] p-6 flex flex-col items-center animate-fade-in">
            <button
              className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                closeHighlighted ? "bg-[#506858] scale-110" : ""
              }`}
            >
              <Image
                src={ICONS.xIcon}
                alt=""
                width={16}
                height={16}
                className={closeHighlighted ? "opacity-100" : "opacity-70"}
              />
            </button>
            <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-[#232A25]">
              <Image
                src={ICONS.avatar}
                alt=""
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <p className="text-white text-base font-medium mb-1">Jane Adams</p>
            <p className="text-[#506858] text-xs font-medium mb-4">
              Senior HR Manager
            </p>
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full border border-[#506858] flex items-center justify-center">
                <Image src={ICONS.atSign} alt="" width={18} height={18} />
              </button>
              <button className="w-10 h-10 rounded-full border border-[#506858] flex items-center justify-center">
                <Image src={ICONS.phone} alt="" width={18} height={18} />
              </button>
              <button className="w-10 h-10 rounded-full border border-[#506858] flex items-center justify-center">
                <Image src={ICONS.linkedin} alt="" width={18} height={18} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// ============ INBOX NOTIFICATIONS DATA ============
const inboxNotifications = [
  {
    id: 1,
    logo: ICONS.paypal,
    title: "Interview Notification",
    subtitle: "We will come back in 2-3 days",
  },
  {
    id: 2,
    logo: ICONS.uber,
    title: "Follow-Up Reminder",
    subtitle: "Please confirm your acceptance of the job offer",
  },
  {
    id: 3,
    logo: "/companies/ax icon.png",
    title: "Confirmation of Application",
    subtitle: "Complete the necessary documentation before joining",
  },
  {
    id: 4,
    logo: ICONS.meta,
    title: "Invitation to Interview",
    subtitle: "Thank you for applying with us",
  },
  {
    id: 5,
    logo: ICONS.google,
    title: "Confirmation of Application",
    subtitle: "Your interview has been moved to a later date",
  },
  {
    id: 6,
    logo: "/companies/apple icon.svg",
    title: "Interview Rescheduling Notice",
    subtitle: "We have updated your interview details",
  },
  {
    id: 7,
    logo: ICONS.uber,
    title: "Job Offer Letter",
    subtitle: "Congratulations on your new position",
  },
];

// ============ ANIMATED INBOX PANEL ============
function AnimatedInboxPanel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % inboxNotifications.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const getVisibleNotifications = () => {
    const result = [];
    for (let i = 0; i < 6; i++) {
      const index = (currentIndex + i) % inboxNotifications.length;
      result.push({
        ...inboxNotifications[index],
        key: `${currentIndex}-${i}`,
      });
    }
    return result;
  };

  const visibleNotifications = getVisibleNotifications();

  return (
    <div className="relative w-full aspect-[4/5] md:aspect-auto md:w-[500px] md:h-[443px] bg-[#080800] rounded-[24px] md:rounded-[40px] overflow-hidden font-['Montserrat',sans-serif]">
      <div className="hidden md:flex flex-col gap-2 items-center w-10 absolute left-4 top-12 z-10">
        <div className="flex items-center justify-center h-10 p-2 rounded-[34px] opacity-50">
          <Image src={ICONS.briefcase} alt="" width={24} height={24} />
        </div>
        <div className="flex items-center justify-center h-10 p-2 rounded-[10px] opacity-50">
          <Image src={ICONS.checkCircle} alt="" width={24} height={24} />
        </div>
        <div className="bg-white flex items-center justify-center h-10 p-2 rounded-[34px] shadow-lg shadow-white/10">
          <Image
            src={ICONS.inbox}
            alt=""
            width={24}
            height={24}
            className="brightness-0"
          />
        </div>
        <div className="flex items-center justify-center h-10 p-2 rounded-[10px] opacity-50">
          <Image src={ICONS.fileText} alt="" width={24} height={24} />
        </div>
        <div className="flex items-center justify-center h-10 p-2 rounded-[10px] opacity-50">
          <Image src={ICONS.user} alt="" width={24} height={24} />
        </div>
        <div className="flex items-center justify-center h-10 p-2 rounded-[10px] opacity-50">
          <Image src={ICONS.settings} alt="" width={24} height={24} />
        </div>
      </div>

      <div className="flex h-full pt-3 px-3 md:pt-4 md:px-4 md:pl-16">
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-2 md:mb-3">
            <div className="flex items-center gap-2">
              <Image
                src={ICONS.logo}
                alt=""
                width={20}
                height={20}
                className="md:w-6 md:h-6"
              />
              <span className="text-white font-medium text-base md:text-xl tracking-[0.5px]">
                Inbox
              </span>
            </div>
          </div>

          <div className="bg-[#171A18] rounded-3xl px-2 md:px-3 py-1.5 md:py-2 flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
            <Image
              src={ICONS.search}
              alt=""
              width={14}
              height={14}
              className="md:w-4 md:h-4"
            />
            <span className="text-[#506858] text-[10px] md:text-xs font-medium">
              Search
            </span>
          </div>

          <div className="flex-1 space-y-1 md:space-y-1.5 overflow-hidden">
            {visibleNotifications.map((notification, index) => (
              <div
                key={notification.key}
                className={`bg-[#171A18] rounded-lg md:rounded-xl p-2 md:p-2.5 flex items-center justify-between transition-all duration-500 ${
                  index === 0
                    ? "animate-slide-down"
                    : index === visibleNotifications.length - 1
                    ? "animate-slide-out"
                    : "animate-slide-shift"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-white rounded-lg w-8 h-8 flex items-center justify-center overflow-hidden shrink-0">
                    <Image
                      src={notification.logo}
                      alt=""
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold leading-tight">
                      {notification.title}
                    </p>
                    <p className="text-[#506858] text-[10px] font-medium truncate max-w-[180px]">
                      {notification.subtitle}
                    </p>
                  </div>
                </div>
                <div className="bg-[#232A25] rounded-[12px] px-1.5 py-0.5 shrink-0 ml-2">
                  <span className="text-[#506858] text-[10px] font-bold">
                    New
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SolutionSection() {
  return (
    <section className="py-20 md:py-32 bg-[#0F100F] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 to-transparent z-0 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-16 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="text-white text-xs md:text-sm font-medium mb-6 px-4 py-2 md:px-5 md:py-2.5 border border-[#232A25] rounded-full">
            The solution
          </span>
          <h2 className="text-white text-3xl md:text-[32px] font-medium leading-tight md:leading-[32px] mb-6 max-w-4xl">
            Increase Offer - the all-in-one platform for IT job seekers
          </h2>
          <p className="text-[#506858] text-sm md:text-base  max-w-2xl leading-relaxed">
            Get a centralized feed of web-scanned IT job openings, plus built-in
            tools for mass applying, accessing key recruiter contacts, and
            effortless application tracking. Start securing interview offers
            faster and more frequently.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 mb-20 md:mb-32">
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <div className="bg-[#506858] w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-[#171A18] font-bold text-xl">
              1
            </div>
            <h3 className="text-white text-2xl md:text-[32px] font-medium mb-4">
              Apply to hundreds automatically
            </h3>
            <p className="text-[#506858] text-base md:text-lg leading-relaxed max-w-md">
              Our intelligent agent scans the web for jobs tailored to your
              skills and applies to them automatically. Just select the ones you
              like and let the AI do the rest.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <AnimatedJobsPanel />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 md:gap-20 mb-20 md:mb-32">
          <div className="w-full md:w-1/2 flex flex-col items-start text-left md:pl-10">
            <div className="bg-[#506858] w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-[#171A18] font-bold text-xl">
              2
            </div>
            <h3 className="text-white text-2xl md:text-[32px] font-medium mb-4">
              Find recruiter contacts instantly
            </h3>
            <p className="text-[#506858] text-base md:text-lg leading-relaxed max-w-md">
              Skip the gatekeepers. Get direct access to hiring managers and
              recruiters with verified contact information, giving you a
              competitive edge.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <AnimatedApplicationsPanel />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <div className="bg-[#506858] w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-[#171A18] font-bold text-xl">
              3
            </div>
            <h3 className="text-white text-2xl md:text-[32px] font-medium mb-4">
              Track everything in one place
            </h3>
            <p className="text-[#506858] text-base md:text-lg leading-relaxed max-w-md">
              No more messy spreadsheets. Keep track of all your applications,
              interviews, and offers in a single, intuitive dashboard.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <AnimatedInboxPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
