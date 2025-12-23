"use client";

import { useState } from "react";

// Declare fbq for TypeScript
declare global {
  interface Window {
    fbq?: (
      track: string,
      event: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

interface EmailFormProps {
  className?: string;
}

export default function EmailForm({ className = "" }: EmailFormProps) {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  // Track Lead event with Meta Pixel
  const trackLead = (email: string) => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: "Waitlist Signup",
        content_category: "Landing Page",
        value: 0,
        currency: "USD",
      });
    }
    // Also log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log("Lead event tracked:", email);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      setMessage("Please enter your email");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email");
      return;
    }

    // Check if user agreed to terms
    if (!agreed) {
      setStatus("error");
      setMessage("Please agree to the terms to continue");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key:
            process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE",
          email: email,
          subject: "New Waitlist Signup - Increase Offer",
          from_name: "Increase Offer Waitlist",
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Fire Meta Pixel Lead event
        trackLead(email);

        setStatus("success");
        setMessage("You're on the list! 🎉");
        setEmail("");
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }

    // Reset status after 3 seconds
    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 3000);
  };

  return (
    <form
      id="waitlist-form"
      onSubmit={handleSubmit}
      className={`backdrop-blur-md bg-[#0F100F]/80 border border-[#171A18] rounded-2xl md:rounded-3xl p-2 md:p-3 w-full max-w-[520px] ${className}`}
    >
      <div className="flex flex-col md:flex-row gap-2 md:gap-3">
        <div className="flex-1 border border-[#232A25] rounded-xl md:rounded-2xl px-3 py-2 h-11 md:h-12 flex items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="bg-transparent text-white text-sm md:text-base font-medium outline-none w-full placeholder:text-[#506858] h-full"
            disabled={status === "loading"}
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-[#00FF00] hover:bg-[#00DD00] disabled:bg-[#00FF00]/50 text-[#171A18] font-bold text-sm md:text-base px-4 py-2 rounded-xl md:rounded-2xl h-11 md:h-12 w-full md:w-[140px] transition-colors shrink-0"
        >
          {status === "loading" ? "..." : "Join Waitlist"}
        </button>
      </div>
      {message && (
        <p
          className={`text-center text-sm mt-2 ${
            status === "success" ? "text-[#00FF00]" : "text-red-400"
          }`}
        >
          {message}
        </p>
      )}
      {/* GDPR Compliance - Checkbox with disclaimer - aligned with placeholder */}
      <label className="flex items-start gap-2 mt-3 cursor-pointer pl-3">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-0.5 w-4 h-4 rounded border-[#506858] bg-transparent accent-[#00FF00] cursor-pointer"
        />
        <span className="text-[10px] md:text-xs text-[#506858] leading-relaxed">
          I agree to the{" "}
          <a
            href="/privacy"
            className="underline hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          ,{" "}
          <a
            href="/terms"
            className="underline hover:text-white transition-colors"
          >
            Terms of Service
          </a>
          , and{" "}
          <a
            href="/cookies"
            className="underline hover:text-white transition-colors"
          >
            Cookie Policy
          </a>
          .
        </span>
      </label>
    </form>
  );
}
