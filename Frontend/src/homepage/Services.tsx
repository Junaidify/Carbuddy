import serviceImg_1 from "../images/services_1.jpg";
import serviceImg_2 from "../images/services_2.webp";
import serviceImg_3 from "../images/services_3.webp";
import serviceImg_4 from "../images/services_4.jpeg";

import "../styles/serviceandourfleet.css";

const Services = () => {
  return (
    <div id="services">
      <h1>Services</h1>

      <div id="services_container">
        <div >
          <div className="service_img">
            <img src={serviceImg_1} alt="" />
          </div>
          <div className="service_content">
            <h2>Airport transfers</h2>
            <p>
              Book hassle-free airport transfers with our website, offering
              reliable rides, timely pickups, and comfortable travel to your
              destination.
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div>
          <div className="service_img">
            <img src={serviceImg_2} alt="" />
          </div>
          <div className="service_content">
            <h2>Intercity Trips</h2>
            <p>
              Easily book intercity trips with our platform, offering reliable
              transport, affordable pricing, and comfortable travel between
              cities.
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div>
          <div className="service_img">
            <img src={serviceImg_3} alt="" />
          </div>
          <div className="service_content">
            <h2>Wedding Events</h2>
            <p>
              Book seamless wedding event transportation with our service,
              ensuring reliable, stylish rides for your special day and guests.
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div>
          <div className="service_img">
            <img src={serviceImg_4} alt="" />
          </div>
          <div className="service_content">
            <h2>Business Meetings</h2>
            <p>
              Arrange reliable transportation for business meetings with our
              service, ensuring punctual, comfortable rides for professionals on
              the go.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
