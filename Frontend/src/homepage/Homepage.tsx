import { lazy, Suspense } from "react";

// Importing dashboard components
const Carousel = lazy(() => import("../homepage/Carousel"));
const CarsSection = lazy(() => import("../homepage/CarsSection"));
const OffRoadAndKnowMore = lazy(() => import("../homepage/OffRoadAndKnowMore"));
const Footer = lazy(() => import("../homepage/Footer"));

// Importing styling
import "../styles/homepage.css";

const Homepage = () => {
  return (
    <div id="homepage">
      <Suspense fallback={<div>Loading...</div>}>
        <Carousel />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <CarsSection />
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
