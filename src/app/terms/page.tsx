import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Increase Offer",
  description:
    "Terms of Service for Increase Offer - AI-powered job application automation",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0F100F] py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#506858] hover:text-white transition-colors mb-8"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M15 10H5M5 10L10 5M5 10L10 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Home
        </Link>

        <article className="prose prose-invert prose-green max-w-none">
          <h1 className="text-white text-3xl md:text-4xl font-medium mb-2">
            Terms of Service
          </h1>
          <p className="text-[#506858] text-sm mb-8">
            Last Updated: December 2024
          </p>

          <div className="space-y-8 text-[#A0A0A0]">
            <p>
              Welcome to Increase Offer (&quot;Company&quot;, &quot;we&quot;,
              &quot;us&quot;). By using our AI-driven job application automation
              tools (the &quot;Service&quot;), you agree to these Terms.
            </p>

            <section>
              <h2 className="text-white text-xl font-medium mb-4">
                1. The Service (Automated Agent)
              </h2>
              <p className="mb-4">
                Increase Offer provides an AI agent that searches for job
                vacancies and automates the application process based on your
                profile and preferences.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white">Automation:</strong> You
                  authorize our Agent to act on your behalf to submit
                  applications, fill out forms, and interact with job listings.
                </li>
                <li>
                  <strong className="text-white">
                    No Guarantee of Employment:
                  </strong>{" "}
                  We provide tools to increase your volume of applications. We{" "}
                  <strong>do not</strong> guarantee interviews, job offers, or
                  successful employment.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-xl font-medium mb-4">
                2. Platform Risks & User Responsibility (CRITICAL)
              </h2>
              <div className="bg-[#171A18] border border-[#232A25] rounded-xl p-4 mb-4">
                <p className="text-yellow-500 font-medium mb-2">
                  ⚠️ Important Notice
                </p>
                <p>
                  You acknowledge that using automation tools to apply for jobs
                  may violate the Terms of Service of third-party platforms
                  (e.g., LinkedIn, Indeed, ZipRecruiter).
                </p>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white">Assumption of Risk:</strong>{" "}
                  You voluntarily assume all risks associated with using our
                  automation tools, including the risk of your accounts being
                  flagged, restricted, or banned by third-party job boards.
                </li>
                <li>
                  <strong className="text-white">Liability Release:</strong>{" "}
                  Increase Offer is <strong>not liable</strong> for any account
                  suspensions, bans, or reputational damage resulting from your
                  use of our automation features. You control the speed and
                  volume of applications; use this power responsibly.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-xl font-medium mb-4">
                3. User Data & Resumes
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white">Accuracy:</strong> You warrant
                  that the resume and profile data you provide is accurate. We
                  are not responsible for applications submitted with incorrect
                  information (e.g., wrong phone number).
                </li>
                <li>
                  <strong className="text-white">License:</strong> You grant us
                  a worldwide license to use, parse, and transmit your resume
                  data to third-party employers and job boards solely for the
                  purpose of providing the Service.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-xl font-medium mb-4">
                4. Subscriptions & Refunds
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white">Billing:</strong> Services are
                  billed on a recurring monthly or yearly basis.
                </li>
                <li>
                  <strong className="text-white">
                    No Refunds for &quot;No Results&quot;:
                  </strong>{" "}
                  We sell the <em>tool</em>, not the <em>job</em>. Refunds are
                  not provided simply because you did not receive an interview
                  invitation.
                </li>
                <li>
                  <strong className="text-white">Cancellation:</strong> You may
                  cancel at any time. Access remains active until the end of the
                  billing cycle.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-xl font-medium mb-4">
                5. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Increase Offer shall not
                be liable for indirect, incidental, or consequential damages,
                including loss of potential income or employment opportunities.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-medium mb-4">
                6. Governing Law
              </h2>
              <p>
                These Terms are governed by the laws of the State of Delaware,
                United States, without regard to conflict of law principles.
              </p>
            </section>

            <section className="border-t border-[#232A25] pt-8">
              <h2 className="text-white text-xl font-medium mb-4">Contact</h2>
              <p>
                For questions about these Terms, please contact us at:{" "}
                <a
                  href="mailto:legal@increaseoffer.com"
                  className="text-[#00FF00] hover:underline"
                >
                  legal@increaseoffer.com
                </a>
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
