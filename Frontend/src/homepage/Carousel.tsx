import { useEffect, useRef, useState } from "react";

// images will be added here
import car_1 from "../images/carousel_1.jpg";
import car_2 from "../images/carousel_1.webp";
import car_3 from "../images/carousel_3.jpg";
import car_4 from "../images/carousel_4.jpg";
import car_5 from "../images/carousel_5.jpg";

// import styling
import "../styles/header.css";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Carousel = () => {
  const images = [car_1, car_2, car_3, car_4, car_5];
  const carouselRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (carouselRef.current) {
      const width = (
        carouselRef.current.children[0] as HTMLElement
      ).getBoundingClientRect().width;
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
    <header id="carousel_wrapper">
      <div id="image_container" ref={carouselRef}>
        {images.map((image, i) => (
          <div key={i} className="image">
            <img
              style={{ width: "100%", height: "100%", aspectRatio: "16/9 " }}
              src={image}
              alt=""
            />
          </div>
        ))}
      </div>
      <div id="button">
        <button
          style={
            index === 0 ? { visibility: "hidden" } : { visibility: "visible" }
          }
          onClick={() => setIndex((prev) => prev - 1)}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button
          style={
            index === images.length - 1
              ? { visibility: "hidden" }
              : { visibility: "visible" }
          }
          onClick={moveToNext}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </header>
  );
};

export default Carousel;
