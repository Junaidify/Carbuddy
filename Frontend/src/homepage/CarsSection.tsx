import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

// Import styling
import "../styles/carsection.css";
import { CarPropTypes, InitialStatePropTypes } from "../constant/interfaces";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CarsSection = () => {
  const [category, setCategory] = useState<string>("SUV");
  useFetch("http://localhost:3000/cars", category);

  // Get the data from the Redux store
  const { isLoading, isError, cars } = useSelector(
    (state: InitialStatePropTypes) => state.cars
  );

  // Ref to the container holding car items
  const carRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState<number>(0);
  const [active, setActive] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (carRef.current) {
      const width = carRef.current.children[index].clientWidth;
      carRef.current.style.transform = `translateX(-${width * index}px)`;
      carRef.current.style.transition = "transform 0.5s ease-in-out";

      Array.from(carRef.current.children).forEach((child, idx) => {
        const childDiv = child as HTMLDivElement;

        // Reset the transform for all children first
        childDiv.style.transform = "scale(0.6) perspective(16px) rotateY(0deg)";

        if (idx < active) {
          // Left side of the active element
          childDiv.style.transform = `scale(0.6) perspective(16px) rotateY(1deg)`;
        } else if (idx > active) {
          // Right side of the active element
          childDiv.style.transform = `scale(0.6) perspective(16px) rotateY(-1deg)`;
        }

        if (idx === active) {
          // Active element
          childDiv.style.transform = `scale(1) perspective(16px) rotateY(0deg)`;
          childDiv.style.zIndex = "10";
        }

        childDiv.style.transition = "transform 0.5s ease-in-out";
      });
    }
  }, [index, cars, active]);

  // Handle Next button click
  const handleNext = () => {
    setIndex((prev) => (prev + 1 < cars.length ? prev + 1 : prev));
    setActive((prev) => (prev + 1 < cars.length ? prev + 1 : prev));
  };

  // Handle Previous button click
  const handlePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
    setActive((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // Handle loading and error states
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error occurred while fetching cars.</p>;
  if (!cars || cars.length === 0) return <p>No cars available</p>;

  console.log(category.toLowerCase());

  return (
    <div id="cars_section">
      {/* How It Works Section */}
      <div id="howitworks_section">
        <h1>How it works</h1>

        <div id="howitworks">
          <div>
            <p>
              <span className="material-symbols-outlined">location_on</span>
            </p>
            <p>Choose Location</p>
            <p>
              Select from multiple convenient locations for easy vehicle pick-up
              and drop-off, including airports, city centers, and more.
            </p>
          </div>
          <div>
            <p>
              <span className="material-symbols-outlined">inventory_2</span>
            </p>
            <p>Pick Up a Date</p>
            <p>
              Select from multiple convenient locations for easy vehicle pick-up
              and drop-off, including airports, city centers, and more.
            </p>
          </div>
          <div>
            <p>
              <span className="material-symbols-outlined">directions_car</span>
            </p>
            <p>Book a Car</p>
            <p>
              Select from multiple convenient locations for easy vehicle pick-up
              and drop-off, including airports, city centers, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Top Rated Cars Section */}
      <div id="toprated_container">
        <h1>Top Rated Cars</h1>
        <div id="toprated">
          <div>
            <button onClick={() => setCategory("SUV")}>SUV</button>
            <button onClick={() => setCategory("Sedan")}>Sedan</button>
            <button onClick={() => setCategory("Convertible")}>
              Convertible
            </button>
            <button onClick={() => setCategory("Offroad")}>Off Road</button>
          </div>

          {/* Cars Carousel */}
          <div id="toprated_cards_container">
            <div id="toprated_cars" ref={carRef}>
              {cars.map((car: CarPropTypes) => (
                <div
                  onClick={() => navigate(`/${category.toLowerCase()}`)}
                  className="cars_card"
                  key={car._id}
                >
                  <div className="toprated_img_section">
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={car.image}
                      alt="toprated car image"
                    />
                  </div>

                  <div className="toprated_section_features">{car.name}</div>
                </div>
              ))}
            </div>

            <div className="toprated_nav_btn">
              <button
                onClick={handlePrev}
                style={
                  index === 0
                    ? { visibility: "hidden" }
                    : { visibility: "visible" }
                }
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                onClick={handleNext}
                style={
                  index === cars.length - 1
                    ? { visibility: "hidden" }
                    : { visibility: "visible" }
                }
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsSection;
