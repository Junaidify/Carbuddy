import { useEffect, useRef, useState } from "react";
import "../styles/carousel.css";

import carousel_1 from "../images/carousel_1.jpg";
import carousel_2 from "../images/carousel_2.jpg";
import carousel_3 from "../images/carousel_3.jpg";
import carousel_4 from "../images/carousel_4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  const imgRef = useRef<HTMLDivElement>();
  const [currentItem, setCurrentItem] = useState<number>(0);

  useEffect(() => {
    if (imgRef) {
      const currentWidth = (
        imgRef.current as unknown as HTMLDivElement
      ).children[0].getBoundingClientRect().width;
      (
        imgRef.current as unknown as HTMLDivElement
      ).style.transform = `translateX(-${currentWidth * currentItem}px)`;
      (imgRef.current as unknown as HTMLDivElement).style.transition =
        "transform 0.5s linear";
    }
  }, [currentItem]);

  const movePrev = () => {
    setCurrentItem((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const moveNext = () => {
    setCurrentItem((prev) =>
      prev < (imgRef.current as unknown as HTMLDivElement).children.length - 1
        ? prev + 1
        : prev
    );
  };
  return (
    <>
      <main id="carousel">
        <div className="carousel_img" ref={imgRef as React.RefObject<HTMLDivElement>}> 
          <div>
            <img src={carousel_1} alt="" />
          </div>
          <div>
            <img src={carousel_2} alt="" />
          </div>
          <div>
            <img src={carousel_3} alt="" />
          </div>
          <div>
            <img src={carousel_4} alt="" />
          </div>
        </div>

        <div id="carousel_move_btn">
          <button onClick={movePrev}><FontAwesomeIcon icon={faAngleLeft} /></button>
          <button onClick={moveNext}><FontAwesomeIcon icon={faAngleRight} /></button>
        </div>

        <div id="carousel_content">
          <h1>Rent Luxury At</h1>
          <h2>Affortable Price</h2>
          <p>
             Offering seamless booking, and flexible
            rental options, CarBuddy ensures a hassle-free experience.{" "}
          </p>
          <button>Open Fleet</button>
        </div>
      </main>
    </>
  );
};

export default Carousel;
