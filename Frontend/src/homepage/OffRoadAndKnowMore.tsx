import {} from "react";

// import Styling
import "../styles/offroadandknowmore.css";
import off_road from "../images/off_road.jpg";
import social_1 from "../images/social_media_1.jpg";
import social_2 from "../images/social_media_2.jpg";
import social_3 from "../images/social_media_3.jpg";
import social_4 from "../images/social_media_4.jpg";

const OffRoadAndKnowMore = () => {
  const social = [social_1, social_2, social_3, social_4];
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

      <div id="know_more">
        <div id="know_more_header">
          <h1>Know More</h1>
          <h1>About Us</h1>
        </div>
        <div id="know_more_content">
          {social.map((image, index) => (
            <div id="know_more_card" key={index}>
              <div>
                <img style={{ width: "100%", height: "100%", borderRadius: "10px" }} src={image} alt="" />
              </div>
              <div>
                <p>{new Date(Date.now()).toLocaleDateString()}</p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tenetur, natus!
                </p>
                <p>Read more...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffRoadAndKnowMore;
