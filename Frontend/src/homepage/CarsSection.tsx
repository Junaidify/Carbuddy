import {} from "react";

// import images
import top_1 from "../images/toprated_1.jpg";
import top_3 from "../images/toprated_3.jpeg";
import top_4 from "../images/toprated_4.jpeg";
import top_5 from "../images/toprated_5.jpg";

// import styling
import "../styles/carsection.css";

const CarsSection = () => {
  const images = [top_1, top_3, top_4, top_5];
  return (
    <div id="cars_section">
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
            <p>PickUp a Date</p>
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

      <div id="toprated_container">
        <h1>Top Rated Cars</h1>
        <div id="toprated">
          <div id="toprated_nav">
            <a href="#">SUV</a>
            <a href="#">Hetchback</a>
            <a href="#">Convertable</a>
            <a href="#">Sedan</a>
          </div>

          <div id="toprated_cars">
            {images.map((image) => (
              <div key={image}>
                <div className="toprated_img_section">
                  <img style={{ width: "100%", height: "100%" }} src={image} alt="" />
                </div>
                <div className="toprated_section_features">
                  <p>Premium Car</p>
                  <div className="toprated_car_features">
                    <p>4 Seater</p>
                    <p>
                      <span className="material-symbols-outlined">
                        search_hands_free
                      </span>
                      Manual
                    </p>
                    <p>5km/ltr</p>
                  </div>
                  <p className="toprated_car_price">Starting at $500/day</p>
                  <div>
                    <p>Details</p>
                    <p>Book Now</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsSection;
