import {} from "react";

// import Styling
import "../styles/services.css";

// import images
import service_img from "../images/service_section_img.jpg";

const Services = () => {
  return (
    <div id="service_wrapper">
      <div id="services_container">
        <h1>Best Services and Luxuries Cars</h1>
        <div id="services_section">
          <div>
            <img src={service_img} alt="" />
          </div>
          <div>
            <div>
              <p>
                <span className="material-symbols-outlined">support_agent</span>
              </p>
              <div>
                <p>Customer Support 24/7</p>
                <p>
                  Quick assistance, hassle-free booking, and dedicated service
                  for a seamless experience.
                </p>
              </div>
            </div>
            <div>
              <p>
                <span className="material-symbols-outlined">location_on</span>
              </p>
              <div>
                <p>Available at Many Locations</p>
                <p>
                  Select from multiple convenient locations for easy vehicle
                  pick-up and drop-off, including airports, city centers, and
                  more.
                </p>
              </div>
            </div>

            <div>
              <p>
                <span className="material-symbols-outlined">cancel</span>
              </p>
              <div>
                <p>Free Cancellation</p>
                <p>
                  Cancel your booking at any time, and get a full refund. No
                  hidden fees or extra charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
