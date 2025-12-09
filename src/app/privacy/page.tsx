import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Increase Offer",
  description:
    "Privacy Policy for Increase Offer - How we handle your personal data",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-[#506858] text-sm mb-8">
            Last Updated: December 2024
          </p>

          <div className="space-y-8 text-[#A0A0A0]">
            <p>
              Increase Offer respects your privacy. This policy explains how we
              handle the sensitive personal data required to automate your job
              search.
            </p>

            <section>
              <h2 className="text-white text-xl font-medium mb-4">
                1. Data We Collect
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white">Profile Data:</strong> Name,
                  email, phone number, address, and LinkedIn profile URL.
                </li>
                <li>
                  <strong className="text-white">Career Documents:</strong>{" "}
                  Resumes (CVs), cover letters, portfolios, and transcripts
                  uploaded to our system.
                </li>
                <li>
                  <strong className="text-white">Job Preferences:</strong>{" "}
                  Salary expectations, desired roles, and willingness to
                  relocate.
                </li>
                <li>
                  <strong className="text-white">Automation Logs:</strong>{" "}
                  Records of which jobs we applied to on your behalf.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-xl font-medium mb-4">
                2. How We Use Your Data
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white">
                    Application Submission:
                  </strong>{" "}
                  To auto-fill application forms on third-party job boards and
                  company career pages.
                </li>
                <li>
                  <strong className="text-white">Matching:</strong> To match
                  your skills against job descriptions using AI algorithms.
                </li>
                <li>
                  <strong className="text-white">Service Improvement:</strong>{" "}
                  Anonymized application data (e.g., &quot;success rates&quot;)
                  may be used to improve our AI models.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-xl font-medium mb-4">
                3. Data Sharing
              </h2>
              <p className="mb-4">
                We do not sell your personal data to marketers. However, the
                core nature of our service requires sharing data:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white">Prospective Employers:</strong>{" "}
                  We transmit your resume and application data to companies and
                  recruiters when you instruct the Agent to apply.
                </li>
                <li>
                  <strong className="text-white">Service Providers:</strong> We
                  use trusted third-party vendors for hosting, AI processing
                  (e.g., OpenAI), and payment processing.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-xl font-medium mb-4">
                4. GDPR Rights (European Users)
              </h2>
              <div className="bg-[#171A18] border border-[#232A25] rounded-xl p-4 mb-4">
                <p className="text-[#00FF00] font-medium mb-2">
                  🇪🇺 For EEA, UK & Swiss Residents
                </p>
                <p>
                  If you are located in the EEA, UK, or Switzerland, you have
                  the following rights:
                </p>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white">Right to Access:</strong>{" "}
                  Request a copy of the personal data we hold.
                </li>
                <li>
                  <strong className="text-white">Right to Erasure:</strong>{" "}
                  Request that we delete your account and all stored resumes
                  (&quot;Right to be Forgotten&quot;).
                </li>
                <li>
                  <strong className="text-white">
                    Right to Rectification:
                  </strong>{" "}
                  Correct inaccurate data in your profile.
                </li>
                <li>
                  <strong className="text-white">Right to Portability:</strong>{" "}
                  Receive your data in a structured, machine-readable format.
                </li>
              </ul>
              <p className="mt-4">
                To exercise these rights, email:{" "}
                <a
                  href="mailto:privacy@increaseoffer.com"
                  className="text-[#00FF00] hover:underline"
                >
                  privacy@increaseoffer.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-medium mb-4">
                5. Data Retention
              </h2>
              <p>
                We retain your resume and application logs as long as your
                account is active. Upon cancellation, you may request immediate
                deletion; otherwise, data is archived for 90 days before
                permanent removal.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-medium mb-4">
                6. Security
              </h2>
              <p>
                We use encryption (SSL/TLS) to protect your documents in transit
                and at rest. However, remember that once a resume is sent to an
                employer, it is subject to <em>their</em> privacy policies.
              </p>
            </section>

            <section className="border-t border-[#232A25] pt-8">
              <h2 className="text-white text-xl font-medium mb-4">Contact</h2>
              <p>
                For privacy-related inquiries, please contact us at:{" "}
                <a
                  href="mailto:privacy@increaseoffer.com"
                  className="text-[#00FF00] hover:underline"
                >
                  privacy@increaseoffer.com
                </a>
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
