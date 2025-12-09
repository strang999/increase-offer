import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import Footer from "@/components/Footer";

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Increase Offer",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI agent that applies to jobs for you automatically and delivers a daily list of valid job openings tailored to your skills and preferences.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "1",
  },
};

// Organization structured data
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Increase Offer",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://increaseoffer.com",
  logo: `${
    process.env.NEXT_PUBLIC_SITE_URL || "https://increaseoffer.com"
  }/Increase offer_Pictogram.svg`,
  sameAs: [],
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <div className="min-h-screen bg-[#0F100F]">
        <Header />
        <main>
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <Footer />
        </main>
      </div>
    </>
  );
}
