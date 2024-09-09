import { useEffect, useRef, useState } from "react";

// images will be added here
import car_1 from "../images/cars_1.png";
import car_2 from "../images/cars_2.png";
import car_3 from "../images/cars_3.png";
import car_4 from "../images/cars_4.png";
import car_5 from "../images/cars_5.png";
import car_6 from "../images/cars_6.png";

// import styling
import "../styles/header.css";

// fontawesome import
import {
  faAngleRight,
  faAngleLeft,
  faPlantWilt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Carousel = () => {
  const images = [car_1, car_2, car_3, car_4, car_5, car_6];
  const carouselRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (carouselRef.current) {
      const width = (carouselRef.current.children[0] as HTMLElement)
        .clientWidth;
      carouselRef.current.style.transform = `translateX(-${width * index}px)`;
      carouselRef.current.style.transition = "transform 0.5s ease-in-out";
    }
  }, [index]);

  const moveToNext = () => {
    if (index < (carouselRef.current?.children as HTMLCollection).length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  return (
    <header>
      <div id="carousel_container">
        <div id="carousel">
          <div id="images" ref={carouselRef}>
            {images.map((image) => (
              <div
                className="image_tag"
                key={image}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}
          </div>
          <div className="car_details">
            <p>premium car rentals</p>
            <div className="car_details_title">
              <p>DRIVE YOUR</p>
              <p>DREAM</p>
            </div>
            <p className="car_details_bio">In just couples of clicks...</p>
            <button className="button">Book Now</button>

            <div className="car_details_features">
              <div>
                <p>
                  <span className="material-symbols-outlined">
                    search_hands_free
                  </span>
                </p>
                <p>Free-Test-Drive</p>
                <p>
                  we provide the free test drive to everyone who wants to rent
                  car from us
                </p>
              </div>

              <div>
                <p>
                  <FontAwesomeIcon icon={faPlantWilt} />
                </p>
                <p>Fast & Easy</p>
                <p>
                  A drivers license and 10 minutes to draw up a contract is all
                  you need to start.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="button">
          <button
            style={{ display: index === 0 ? "none" : "block" }}
            onClick={() => setIndex(index - 1)}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>

          <button onClick={moveToNext} style={{ display: index === 5 ? "none" : "block" }}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Carousel;
