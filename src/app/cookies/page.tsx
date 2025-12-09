import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | Increase Offer",
  description: "Cookie Policy for Increase Offer - How we use cookies",
};

export default function CookiesPage() {
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
            Cookie Policy
          </h1>
          <p className="text-[#506858] text-sm mb-8">
            Last Updated: December 2024
          </p>

          <div className="space-y-8 text-[#A0A0A0]">
            <p>
              Increase Offer uses cookies to ensure our automation dashboard
              works correctly and to improve your experience.
            </p>

            <section>
              <h2 className="text-white text-xl font-medium mb-4">
                1. Essential Cookies
              </h2>
              <p>
                Required for you to log in, save your job search filters, and
                maintain your session while the Agent runs in the background.
                These cookies are necessary for the Service to function and
                cannot be disabled.
              </p>
              <div className="bg-[#171A18] border border-[#232A25] rounded-xl p-4 mt-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#232A25]">
                      <th className="text-left text-white py-2">Cookie</th>
                      <th className="text-left text-white py-2">Purpose</th>
                      <th className="text-left text-white py-2">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#232A25]">
                      <td className="py-2 text-[#00FF00]">session_id</td>
                      <td className="py-2">Maintains your login session</td>
                      <td className="py-2">Session</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-[#00FF00]">preferences</td>
                      <td className="py-2">Stores your dashboard settings</td>
                      <td className="py-2">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-white text-xl font-medium mb-4">
                2. Analytics Cookies
              </h2>
              <p>
                We use analytics tools to understand how users navigate our
                dashboard and which features (e.g., &quot;Auto-Apply&quot; vs.
                &quot;Manual Search&quot;) are used most. This helps us improve
                the Service.
              </p>
              <div className="bg-[#171A18] border border-[#232A25] rounded-xl p-4 mt-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#232A25]">
                      <th className="text-left text-white py-2">Cookie</th>
                      <th className="text-left text-white py-2">Purpose</th>
                      <th className="text-left text-white py-2">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#232A25]">
                      <td className="py-2 text-[#00FF00]">_ga</td>
                      <td className="py-2">
                        Google Analytics - distinguishes users
                      </td>
                      <td className="py-2">2 years</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-[#00FF00]">_fbp</td>
                      <td className="py-2">
                        Meta Pixel - measures ad effectiveness
                      </td>
                      <td className="py-2">3 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-white text-xl font-medium mb-4">
                3. Managing Cookies
              </h2>
              <p className="mb-4">
                You can disable cookies in your browser settings, but this may
                prevent the Agent from functioning correctly. Here&apos;s how to
                manage cookies in popular browsers:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white">Chrome:</strong> Settings →
                  Privacy and Security → Cookies
                </li>
                <li>
                  <strong className="text-white">Firefox:</strong> Settings →
                  Privacy & Security → Cookies
                </li>
                <li>
                  <strong className="text-white">Safari:</strong> Preferences →
                  Privacy → Cookies
                </li>
                <li>
                  <strong className="text-white">Edge:</strong> Settings →
                  Cookies and site permissions
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-xl font-medium mb-4">
                4. Your Consent
              </h2>
              <p>
                By using Increase Offer, you consent to our use of cookies as
                described in this policy. If you do not agree, please disable
                cookies in your browser or refrain from using our Service.
              </p>
            </section>

            <section className="border-t border-[#232A25] pt-8">
              <h2 className="text-white text-xl font-medium mb-4">Contact</h2>
              <p>
                For questions about our use of cookies, please contact us at:{" "}
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
