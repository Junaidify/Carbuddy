import { useSelector } from "react-redux";
import { CarPropTypes, InitialStatePropTypes } from "../constant/interfaces";
import { useFetch } from "../hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();

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
            <div id="product_details_image">
              <img src={filteredData.image} alt="" />
              <div>
                <img src={filteredData.image} alt="" />
                <img src={filteredData.image} alt="" />
              </div>
            </div>
            <div id="product_details_content">
              <h1>{filteredData.name}</h1>

              <div id="product_details_features">
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
              <div id="product_details_specifications">
                <h2>Technology Included</h2>
                <ul>
                  <li>Bluetooth Connectivity</li>
                  <li>GPS Navigation</li>
                  <li>USB Charging Ports</li>
                  <li>Voice Controls</li>
                  <li>Advanced Driver Assistance Systems (ADAS)</li>
                </ul>
              </div>

              <div id="product_details_price">
                <span
                  style={{
                    fontSize: "1.3rem",
                    color: "var(--tertairy-color)",
                  }}
                >
                  Rent at:
                </span>{" "}
                ${filteredData.bookingAmount}/day
              </div>

              <hr />
              <div id="product_details_availability">
                <h3>Check Availability</h3>
                <div>
                  <input type="date" />
                  <p>Available</p>
                </div>
              </div>
           
              <div id="product_details_buttons">
                <button>Save to favourites</button>
                <button onClick={() => navigate("/booking")}>Book Now</button>
              </div>
              <hr />
              <div id="product_details_specifications">
                <h2>Specifications</h2>
                <ul>
                  <li>Powerful Performance</li>
                  <li>Advanced Off-Road Technologies</li>
                  <li>Flexible Seating</li>
                  <li>Advanced safety technologies</li>
                  <li>Modern Connectivity</li>
                </ul>
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
