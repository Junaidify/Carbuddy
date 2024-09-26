import { lazy, Suspense } from "react";

// Importing dashboard components
const Carousel = lazy(() => import("../homepage/Carousel"));
const CarsCarousel = lazy(() => import("./CarCarousel"));
const OffRoadAndKnowMore = lazy(() => import("./OnlyForToday"));
const Footer = lazy(() => import("../homepage/Footer"));

// Importing styling
import "../styles/homepage.css";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";

const Homepage = () => {
  return (
    <div id="homepage">
      <Suspense fallback={<div>Loading...</div>}>
        <Carousel />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Services />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <CarsCarousel />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <WhyChooseUs />
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
