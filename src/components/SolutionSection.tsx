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

  useEffect(() => {
    const runAnimation = () => {
      setStep(0);
      setTimeout(() => setStep(1), 2000);
      setTimeout(() => setStep(2), 4000);
    };
    runAnimation();
    const interval = setInterval(runAnimation, 7000);
    return () => clearInterval(interval);
  }, []);

  const allSelected = step >= 1;
  const showSuccess = step >= 2;

  return (
    <div className="relative w-full aspect-[4/5] md:aspect-auto md:w-[500px] md:h-[443px] bg-[#080800] rounded-[24px] md:rounded-[40px] overflow-hidden font-['Montserrat',sans-serif]">
      <div className="flex h-full pt-3 px-3 md:pt-4 md:px-4">
        {/* Sidebar - hidden on mobile */}
        <div className="hidden md:flex flex-col gap-2 items-center w-10 shrink-0 pt-8">
          <div className="bg-[#080800] flex items-center justify-center h-10 p-2 rounded-[34px]">
            <Image src={ICONS.briefcase} alt="" width={24} height={24} />
          </div>
          <div className="flex items-center justify-center h-10 p-2 rounded-[10px]">
            <Image src={ICONS.checkCircle} alt="" width={24} height={24} />
          </div>
          <div className="flex items-center justify-center h-10 p-2 rounded-[34px]">
            <Image src={ICONS.inbox} alt="" width={24} height={24} />
          </div>
          <div className="flex items-center justify-center h-10 p-2 rounded-[10px]">
            <Image src={ICONS.fileText} alt="" width={24} height={24} />
          </div>
          <div className="flex items-center justify-center h-10 p-2 rounded-[10px]">
            <Image src={ICONS.user} alt="" width={24} height={24} />
          </div>
          <div className="flex items-center justify-center h-10 p-2 rounded-[10px]">
            <Image src={ICONS.settings} alt="" width={24} height={24} />
          </div>
        </div>

        {/* Main Panel */}
        <div className="flex-1 md:ml-4 flex flex-col">
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
                Jobs
              </span>
            </div>
            {allSelected && (
              <button className="bg-[#00FF00] text-[#171A18] text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 md:py-1.5 rounded-3xl tracking-[0.28px]">
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

          {/* Job Cards - shows 3.5 cards */}
          <div className="flex-1 overflow-hidden space-y-1 md:space-y-1.5">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-[#171A18] rounded-lg md:rounded-xl p-2 md:p-2.5"
              >
                {/* Header: Logo, Title, Time, Checkbox */}
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
                    <Checkbox checked={allSelected} />
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#232A25] mb-1.5" />

                {/* Details Grid: 3 columns x 2 rows + Apply button */}
                <div className="flex items-start justify-between gap-1 md:gap-2">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 md:gap-x-3 gap-y-0.5 text-[9px] md:text-[10px] flex-1">
                    {/* Row 1 */}
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
                    {/* Row 2 */}
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
            {/* Success check circle - using check-circle.svg icon */}
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
  // step 0: initial state
  // step 1: "Recruiter Contacts" button highlighted (about to click)
  // step 2: modal visible
  // step 3: X button highlighted (about to close)
  // step 4: modal closed, contact icons appear

  useEffect(() => {
    const runAnimation = () => {
      setStep(0);
      setTimeout(() => setStep(1), 1500); // Highlight button
      setTimeout(() => setStep(2), 2000); // Show modal
      setTimeout(() => setStep(3), 4000); // Highlight X button
      setTimeout(() => setStep(4), 4500); // Close modal, show icons
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
      <div className="flex h-full pt-3 px-3 md:pt-4 md:px-4">
        {/* Sidebar - hidden on mobile */}
        <div className="hidden md:flex flex-col gap-2 items-center w-10 shrink-0 pt-8">
          <div className="flex items-center justify-center h-10 p-2 rounded-[34px]">
            <Image src={ICONS.briefcase} alt="" width={24} height={24} />
          </div>
          <div className="bg-[#080800] flex items-center justify-center h-10 p-2 rounded-[10px]">
            <Image src={ICONS.checkCircle} alt="" width={24} height={24} />
          </div>
          <div className="flex items-center justify-center h-10 p-2 rounded-[34px]">
            <Image src={ICONS.inbox} alt="" width={24} height={24} />
          </div>
          <div className="flex items-center justify-center h-10 p-2 rounded-[10px]">
            <Image src={ICONS.fileText} alt="" width={24} height={24} />
          </div>
          <div className="flex items-center justify-center h-10 p-2 rounded-[10px]">
            <Image src={ICONS.user} alt="" width={24} height={24} />
          </div>
          <div className="flex items-center justify-center h-10 p-2 rounded-[10px]">
            <Image src={ICONS.settings} alt="" width={24} height={24} />
          </div>
        </div>

        {/* Main Panel */}
        <div className="flex-1 md:ml-4 flex flex-col">
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
                Applications
              </span>
            </div>
          </div>

          {/* Filter Tabs */}
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

          {/* Application Cards */}
          <div className="flex-1 overflow-hidden space-y-1 md:space-y-1.5">
            {applications.map((app, index) => (
              <div
                key={app.id}
                className="bg-[#171A18] rounded-lg md:rounded-xl p-2 md:p-2.5"
              >
                {/* Header: Logo, Title, Recruiter Button or Icons */}
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
                  {/* Show icons on first card after modal closes, otherwise show button */}
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
                {/* Divider */}
                <div className="h-px bg-[#232A25] mb-1.5" />
                {/* Details Row */}
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

      {/* Recruiter Modal Overlay */}
      {showPopup && (
        <>
          <div className="absolute inset-0 backdrop-blur-[10px] bg-[rgba(15,16,15,0.8)]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#171A18] rounded-[24px] w-[200px] p-6 flex flex-col items-center animate-fade-in">
            {/* Close button */}
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

            {/* Avatar */}
            <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-[#232A25]">
              <Image
                src={ICONS.avatar}
                alt=""
                width={80}
                height={80}
                className="object-cover"
              />
            </div>

            {/* Name & Title */}
            <p className="text-white text-base font-medium mb-1">Jane Adams</p>
            <p className="text-[#506858] text-xs font-medium mb-4">
              Senior HR Manager
            </p>

            {/* Contact Icons */}
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
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Get 6 notifications starting from current index (infinite loop)
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
      <div className="flex h-full pt-3 px-3 md:pt-4 md:px-4">
        {/* Sidebar - hidden on mobile */}
        <div className="hidden md:flex flex-col gap-2 items-center w-10 shrink-0 pt-8">
          <div className="flex items-center justify-center h-10 p-2 rounded-[34px]">
            <Image src={ICONS.briefcase} alt="" width={24} height={24} />
          </div>
          <div className="flex items-center justify-center h-10 p-2 rounded-[10px]">
            <Image src={ICONS.checkCircle} alt="" width={24} height={24} />
          </div>
          <div className="bg-[#080800] flex items-center justify-center h-10 p-2 rounded-[34px]">
            <Image src={ICONS.inbox} alt="" width={24} height={24} />
          </div>
          <div className="flex items-center justify-center h-10 p-2 rounded-[10px]">
            <Image src={ICONS.fileText} alt="" width={24} height={24} />
          </div>
          <div className="flex items-center justify-center h-10 p-2 rounded-[10px]">
            <Image src={ICONS.user} alt="" width={24} height={24} />
          </div>
          <div className="flex items-center justify-center h-10 p-2 rounded-[10px]">
            <Image src={ICONS.settings} alt="" width={24} height={24} />
          </div>
        </div>

        {/* Main Panel */}
        <div className="flex-1 md:ml-4 flex flex-col">
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
                Inbox
              </span>
            </div>
          </div>

          {/* Search Bar */}
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

          {/* Notification Cards - shows 6 items, last one overlaps bottom */}
          <div className="flex-1 space-y-1 md:space-y-1.5">
            {visibleNotifications.map((notification, index) => (
              <div
                key={notification.key}
                className={`bg-[#171A18] rounded-lg md:rounded-xl p-2 md:p-2.5 flex items-center justify-between transition-all duration-300 ${
                  index === 0 ? "animate-slide-down" : ""
                }`}
              >
                <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
                  <div
                    className={`rounded-lg md:rounded-xl w-8 h-8 md:w-10 md:h-10 flex items-center justify-center overflow-hidden shrink-0 ${
                      notification.logo.includes("apple")
                        ? "bg-white p-1.5 md:p-2"
                        : notification.logo.includes("uber")
                        ? "bg-black p-0.5 md:p-1"
                        : "bg-white"
                    }`}
                  >
                    <Image
                      src={notification.logo}
                      alt=""
                      width={notification.logo.includes("uber") ? 32 : 24}
                      height={notification.logo.includes("uber") ? 32 : 24}
                      className="object-contain md:w-8 md:h-8"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white text-[11px] md:text-xs font-semibold leading-tight truncate">
                      {notification.title}
                    </p>
                    <p className="text-[#506858] text-[9px] md:text-[10px] font-medium truncate">
                      {notification.subtitle}
                    </p>
                  </div>
                </div>
                <span className="text-[#00FF00] text-[9px] md:text-[10px] font-medium shrink-0">
                  New
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface StepCardProps {
  number: number;
  title: string;
  content: React.ReactNode;
}

function StepCard({ number, title, content }: StepCardProps) {
  return (
    <div className="flex flex-col gap-3 md:gap-5 w-full md:w-auto">
      <div className="flex items-center gap-3 md:gap-5">
        <div className="relative w-8 h-8 md:w-10 md:h-10 shrink-0">
          <div className="absolute inset-0 backdrop-blur-md bg-[#0F100F] border border-[#171A18] rounded-lg md:rounded-xl" />
          <span className="absolute inset-0 flex items-center justify-center text-white text-base md:text-lg font-medium">
            {number}
          </span>
        </div>
        <p className="text-white text-base md:text-lg font-medium">{title}</p>
      </div>
      <div className="backdrop-blur-md bg-[#0F100F] border border-[#171A18] rounded-2xl md:rounded-[44px] overflow-hidden p-2 md:p-4">
        {content}
      </div>
    </div>
  );
}

export default function SolutionSection() {
  return (
    <section className="py-12 md:py-20 bg-[#0F100F]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <span className="text-[#506858] text-xs md:text-sm font-medium mb-3 md:mb-4 px-3 py-1.5 md:px-4 md:py-2 bg-[#171A18] rounded-full">
            The solution
          </span>
          <h2 className="text-white text-2xl md:text-[32px] font-medium leading-tight md:leading-9 mb-3 md:mb-4">
            Increase offer - your
            <br />
            interview-boosting sidekick
          </h2>
          <p className="text-[#506858] text-sm md:text-base max-w-lg px-4 md:px-0">
            An intelligent agent that automates job applications, finds your
            favorite job sources, and provides daily lists of new job openings
            tailored to your skills and preferences.
          </p>
        </div>

        {/* Steps Grid - vertical on mobile, horizontal on desktop */}
        <div className="flex flex-col gap-8 md:gap-16">
          {/* Row 1 - Stack on mobile, side by side on desktop */}
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            <StepCard
              number={1}
              title="Apply to hundreds automatically"
              content={<AnimatedJobsPanel />}
            />
            <StepCard
              number={2}
              title="Find recruiter contacts instantly"
              content={<AnimatedApplicationsPanel />}
            />
          </div>

          {/* Row 2 - One centered card */}
          <div className="flex justify-center">
            <StepCard
              number={3}
              title="Land interviews faster"
              content={<AnimatedInboxPanel />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
