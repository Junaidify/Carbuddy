import { useNavigate, useParams } from "react-router-dom";

// import styling
import "../styles/productdetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGasPump, faGauge } from "@fortawesome/free-solid-svg-icons";
import Footer from "../homepage/Footer";
import { useProduct } from "../hooks/useProduct";
import { useSaveLater } from "../hooks/useSaveLater";

const ProductDetails = () => {
  const { id, category } = useParams();
  const saveCar = useProduct(id as string);
  const navigate = useNavigate();
  const { handleSaveLater } = useSaveLater();

  console.log(saveCar);

  return (
    <>
      <main>
        <h1>Home / {category} Cars</h1>
        {saveCar && (
          <div id="product_details_container" key={saveCar._id}>
            <div id="product_details_image">
              <img src={saveCar.image} alt="" />
              <div>
                <img src={saveCar.image} alt="" />
                <img src={saveCar.image} alt="" />
              </div>
            </div>
            <div id="product_details_content">
              <h1>{saveCar.name}</h1>

              <div id="product_details_features">
                <p>
                  <strong style={{ color: "var(--button-color)" }}>
                    <span className="material-symbols-outlined">chair</span>
                  </strong>
                  {saveCar.seater}
                </p>
                <p>
                  <strong style={{ color: "var(--button-color)" }}>
                    <span className="material-symbols-outlined">
                      search_hands_free
                    </span>
                  </strong>
                  {saveCar.transmission}
                </p>

                <p>
                  <strong style={{ color: "var(--button-color)" }}>
                    <FontAwesomeIcon icon={faGauge} />{" "}
                  </strong>
                  {saveCar.mileage}{" "}
                  <sub style={{ fontSize: "1rem", fontStyle: "italic" }}>
                    kmph
                  </sub>
                </p>

                <p>
                  <strong style={{ color: "var(--button-color)" }}>
                    <FontAwesomeIcon icon={faGasPump} />
                  </strong>
                  {saveCar.fuel}
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
                    color: "var(--primary-color)",
                  }}
                >
                  Rent at:
                </span>{" "}
                ${saveCar.bookingAmount}/day
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
                <button onClick={() => handleSaveLater(id as string)}>
                  Save to favourites
                </button>
                <button onClick={() => navigate(`/booking/${id}`)}>
                  Book Now
                </button>
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
