import {} from "react";

import "../styles/whychooseus.css";
import booking from "../images/booking.png";
import driver from "../images/driver.png";
import car from "../images/3d-car.png";
import payment from "../images/cashless-payment.png";

const WhyChooseUs = () => {
  return (
    <div id="why_choose_us">
      <div className="why_title">
        <h1>Why Choose Us</h1>
        <p>
          Choose us for reliable service, a wide vehicle selection, professional
          drivers, and easy online booking.
        </p>
      </div>

      <div className="choose_container">
        <div className="choose_content">
          <div>
            <p>
              <img src={booking} alt="" />
            </p>
          </div>
          <h2>Easy Online Booking</h2>
          <p>
            Enjoy quick, hassle-free online booking with secure payments for all
            your travel needs.
          </p>
        </div>

        <div className="choose_content ">
          <div>
            <p>
              <img src={driver} alt="" />
            </p>
          </div>
          <h2>Professional Drivers</h2>
          <p>Travel safely with our expert, professional drivers.</p>
        </div>

        <div className="choose_content">
          <div>
            <p>
              <img src={car} alt="" />
            </p>
          </div>
          <h2>Verity of car brands</h2>
          <p>
            Choose from a wide selection of top car brands to suit your
            preferences and needs.
          </p>
        </div>

        <div className="choose_content">
          <div>
            <p>
              <img src={payment} alt="" />
            </p>
          </div>
          <h2>Online Payment</h2>
          <p>
            Make secure and convenient online payments for all your bookings
            with ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
