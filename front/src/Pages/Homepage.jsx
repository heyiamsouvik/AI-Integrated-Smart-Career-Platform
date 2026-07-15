import React, { lazy, Suspense } from "react";
import Footer from "../Sections/Footer";
import ReviewsSection from "../Sections/ReviewsSection";
import LogoLoop from "@/components/LogoLoop";
import FeaturesSection from "@/Sections/FeaturesSection";

// Lazy load heavy sections
const HeroSection = lazy(() => import("../Sections/HeroSection"));
const CTASection = lazy(() => import("../Sections/CTASection"));

const logos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/1280px-Tata_Consultancy_Services_old_logo.svg.png",
    alt: "TCS",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_Deloitte.svg/1920px-Logo_of_Deloitte.svg.png",
    alt: "Deloitte",
  },
  {
    src: "https://img.icons8.com/?size=100&id=17949&format=png&color=000000",
    alt: "Google",
  },
  {
    src: "https://img.icons8.com/?size=100&id=RduYmqw5H7xm&format=png&color=000000",
    alt: "Atlassian",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/EY_logo_2019.svg/250px-EY_logo_2019.svg.png",
    alt: "EY",
  },
  {
    src: "https://pngimg.com/uploads/amazon/amazon_PNG27.png",
    alt: "Amazon",
  },
  {
    src: "https://pngimg.com/uploads/meta/meta_PNG5.png",
    alt: "Meta",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/1280px-Oracle_logo.svg.png",
    alt: "Oracle",
  },
];

const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center bg-amber-50">
    <div className="animate-pulse flex space-x-4">
      <div className="h-12 w-12 rounded-full bg-amber-200"></div>
      <div className="space-y-3">
        <div className="h-4 w-32 rounded bg-amber-200"></div>
        <div className="h-4 w-24 rounded bg-amber-200"></div>
      </div>
    </div>
  </div>
);

const Homepage = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Suspense fallback={<SectionLoader />}>
        <HeroSection />
      </Suspense>

      <section className="bg-amber-100 py-12 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <LogoLoop
            logos={logos}
            speed={70}
            gap={40}
            logoHeight={40}
            pauseOnHover
          />
        </div>
      </section>

      <FeaturesSection />

      <ReviewsSection />

      <Suspense fallback={<SectionLoader />}>
        <CTASection />
      </Suspense>

      <Footer />
    </main>
  );
};

export default Homepage;
