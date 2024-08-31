import "./App.css";
import Carousel from "./homepage/Carousel";
import CarsSection from "./homepage/CarsSection";
import Footer from "./homepage/Footer";
import OffRoadAndKnowMore from "./homepage/OffRoadAndKnowMore";
import Services from "./homepage/Services";


function App() {
  return (
    <>
      <Carousel />
      <CarsSection />
      <Services />
      <OffRoadAndKnowMore />
      <Footer/>
    </>
  );
}

export default App;
