import { lazy, Suspense } from "react";

// Importing dashboard components
const Carousel = lazy(() => import("../homepage/Carousel"));
const CarsSection = lazy(() => import("../homepage/CarsSection"));
const Services = lazy(() => import("../homepage/Services"));
const OffRoadAndKnowMore = lazy(() => import("../homepage/OffRoadAndKnowMore"));
const Footer = lazy(() => import("../homepage/Footer"));

const Homepage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Carousel />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <CarsSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Services />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <OffRoadAndKnowMore />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Homepage;
