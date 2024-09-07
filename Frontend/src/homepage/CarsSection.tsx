import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useFetch } from "../hooks/useFetch";

// Import styling
import "../styles/carsection.css";
import { CarPropTypes, InitialStatePropTypes } from "../constant/interfaces";

const CarsSection = () => {
  // Custom hook to fetch cars data
  useFetch("http://localhost:3000/cars", "SUV");

  // Get the data from the Redux store
  const { isLoading, isError, cars } = useSelector(
    (state: InitialStatePropTypes) => state.cars
  );

  // Ref to the container holding car items
  const carRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState<number>(0);
  const [active, setActive] = useState<number>(0);

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
          {/* Navigation Links */}
          <div id="toprated_nav">
            <a href="#">SUV</a>
            <a href="#">Hatchback</a>
            <a href="#">Convertible</a>
            <a href="#">Sedan</a>
          </div>

          {/* Cars Carousel */}
          <div id="toprated_cars" ref={carRef}>
            {cars.map((car: CarPropTypes, idx: number) => (
              <div
                style={{ transform: `scale(${index === idx + 1 ? 1 : 0.6}) ` }}
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
                {/* Uncomment and complete this section if you need car details */}
                {/* 
                <div className="toprated_section_features">
                  <p>{car.name}</p>
                  <div className="toprated_car_features">
                    <p>{car.seater} Seater</p>
                    <p>
                      <span className="material-symbols-outlined">
                        search_hands_free
                      </span>
                      {car.transmission}
                    </p>
                    <p>{car.mileage} kmph</p>
                  </div>
                  <p className="toprated_car_price">
                    Starting at ${car.bookingAmount}
                  </p>
                  <div>
                    <p>Details</p>
                    <p>Book Now</p>
                  </div>
                </div> 
                */}
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="navigation-buttons">
            <button onClick={handlePrev} id="prev">
              Prev
            </button>
            <button onClick={handleNext} id="next">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsSection;
