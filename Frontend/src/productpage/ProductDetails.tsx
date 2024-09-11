import { useSelector } from "react-redux";
import { CarPropTypes, InitialStatePropTypes } from "../constant/interfaces";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// import styling
import "../styles/productdetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGasPump, faGauge } from "@fortawesome/free-solid-svg-icons";
import Footer from "../homepage/Footer";

const ProductDetails = () => {
  const { id, category } = useParams();
  useFetch("http://localhost:3000/cars", category || "SUV");
  const { cars } = useSelector((state: InitialStatePropTypes) => state.cars);
  const [filteredData, setFilteredData] = useState<CarPropTypes>();

  useEffect(() => {
    if (cars.length > 0) {
      const matchedCar = cars.find((car: CarPropTypes) => car._id === id);
      setFilteredData(matchedCar);
    }
  }, [cars, id]);

  console.log(filteredData);

  return (
    <>
      <main>
        <h1>Home / {category} Cars</h1>
        {filteredData && (
          <div id="product_details_container" key={filteredData._id}>
            <div>
              <img src={filteredData.image} alt="" />
              <div>
                <img src={filteredData.image} alt="" />
                <img src={filteredData.image} alt="" />
              </div>
            </div>
            <div>
              <h1>{filteredData.name}</h1>

              <div>
                <p>
                  <strong style={{ color: "var(--primary-color)" }}>
                    <span className="material-symbols-outlined">chair</span>
                  </strong>
                  {filteredData.seater}
                </p>
                <p>
                  <strong style={{ color: "var(--primary-color)" }}>
                    <span className="material-symbols-outlined">
                      search_hands_free
                    </span>
                  </strong>
                  {filteredData.transmission}
                </p>
              </div>
              <div>
                <p>
                  <strong style={{ color: "var(--primary-color)" }}>
                    <FontAwesomeIcon icon={faGauge} />{" "}
                  </strong>
                  {filteredData.mileage}{" "}
                  <sub style={{ fontSize: "1rem", fontStyle: "italic" }}>
                    kmph
                  </sub>
                </p>

                <p>
                  <strong style={{ color: "var(--primary-color)" }}>
                    <FontAwesomeIcon icon={faGasPump} />
                  </strong>
                  {filteredData.fuel}
                </p>
              </div>
              <div>
                <h2>Specifications</h2>
                <ul>
                  <li>
                    <strong>Powerful Performance:</strong> Features a 3.3-liter
                    V6 diesel engine for exceptional off-road power.
                  </li>
                  <li>
                    <strong>Advanced Off-Road Technologies:</strong> Equipped
                    with Vehicle Stability Control and Multi-Terrain Select for
                    superior handling.
                  </li>
                  <li>
                    <strong>Flexible Seating:</strong> Offers flexible seating
                    for up to 7 passengers in a luxurious and comfortable cabin.
                  </li>
                  <li>
                    <strong> Comprehensive Safety Features:</strong> Includes
                    advanced safety technologies like Pre-Collision System for
                    enhanced protection
                  </li>
                  <li>
                    <strong>Modern Connectivity:</strong> Provides Bluetooth,
                    USB connections, and smartphone integration for a seamless
                    driving experience.
                  </li>
                </ul>
              </div>

              <p>
                <span
                  style={{                 
                 fontSize: "1.5rem",
                    color: "var(--tertairy-color)",
                  }}
                >
                 Rent at: 
                </span>{" "}
                ${filteredData.bookingAmount}/day
              </p>
              <div>
                <button>Add To Wishlist</button>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default ProductDetails;
