import {} from "react";

// import Styling
import "../styles/offroadandknowmore.css";
import off_road from "../images/off_road.jpg";

const OffRoadAndKnowMore = () => {
  return (
    <div id="static_section">
      <div id="off_road">
        <div id="off_road_first">
          <div>
            <h1>We Rent Powerful</h1>
            <h1>Off-Road Machines Too</h1>
          </div>
          <div>
            <p>
              Experience the thrill of adventure with our powerful off-road
              machines, built to conquer any terrain with ease.
            </p>
            <p>
              Take on the toughest trails with our rugged off-road vehicles,
              ready to handle any challenge you face.
            </p>
          </div>
        </div>

        <div id="off_road_second">
          <p>OFF ROAD CARS</p>
          <div className="off_road_image">
            <img
              style={{ width: "100%", height: "100%" }}
              src={off_road}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffRoadAndKnowMore;
