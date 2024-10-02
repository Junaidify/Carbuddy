import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

// Import styling
import "../styles/carcarousel.css";
import { CarPropTypes } from "../constant/interfaces";
import {
  faChevronLeft,
  faChevronRight,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSaveLater } from "../hooks/useSaveLater";
import { RootState } from "../utils/store";


const CarsSection = () => {
  const [category, setCategory] = useState<string>("SUV");
  useFetch("https://rent-wheels-1.onrender.com/cars", category);

  // Get the data from the Redux store
  const { isLoading, isError, cars } = useSelector(
    (state: RootState) => state.cars
  );

  // Ref to the container holding car items
  const carRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState<number>(3);
  const [active, setActive] = useState<number>(3);
  const { isSaved, handleSaveLater } = useSaveLater();
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

  return (
    <div id="car_carousel_container">
      <h1>Top Rated Cars</h1>
      <div id="car_carousel_buttons">
        <button onClick={() => setCategory("SUV")}>SUV</button>
        <button onClick={() => setCategory("Sedan")}>Sedan</button>
        <button onClick={() => setCategory("Convertible")}>Convertible</button>
        <button onClick={() => setCategory("Offroad")}>Off Road</button>
      </div>

      {/* Cars Carousel */}
      <div id="car_carousel_img_container">
        <div id="toprated_cars" ref={carRef}>
          {cars.map((car: CarPropTypes) => (
            <div className="cars_card" key={car._id}>
              <div className="car_carousel_img">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={car.image}
                  alt="toprated car image"
                />
              </div>

              <div
                className="car_carousel_details"
                onClick={() => navigate(`/${category.toLowerCase()}`)}
              >
                <h2>{car.name}</h2>
                <div>
                  <p>
                    <span className="material-symbols-outlined">chair</span>
                    {car.seater}
                  </p>
                  <p>
                    <span className="material-symbols-outlined">
                      auto_transmission
                    </span>
                    {car.transmission}
                  </p>
                </div>
              </div>

              <button
                className="car_carousel_wishlist_btn"
                onClick={() => handleSaveLater(car._id)}
                style={{
                  color: isSaved(car._id)
                    ? "var(--primary-color)"
                    : "var(--button-color)",
                }}
              >
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          ))}
        </div>

        <div className="move_car_btn_parent">
          <button
            onClick={handlePrev}
            style={
              index === 0 ? { visibility: "hidden" } : { visibility: "visible" }
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
  );
};

export default CarsSection;
