import "../styles/onlyfortoday.css";
import today from "../images/today.png";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OffRoadAndKnowMore = () => {
  return (
    <>
      <div id="only_for_today">
        <div id="today_title">
          <h1>Only today $75/day</h1>
          <p>
            Don't miss out! Book today and enjoy our special rate of just $75
            per day for your rental.
          </p>
        </div>

        <div id="today_wrapper">
          <div id="today_container">
            <div id="today_card">
              <h2>Cadillic Escalade</h2>
              <div id="today_card_content_box">
                <div id="today_card_content">
                  <p>
                    <span>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{" "}
                    For upto 8 Passengers
                  </p>

                  <p>
                    <span>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{" "}
                    Tinted Windows
                  </p>

                  <p>
                    <span>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{" "}
                    Incredible Sound System
                  </p>

                  <p>
                    <span>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{" "}
                    Divider with Premium Style
                  </p>
                </div>
                <div id="today_card_content">
                  <p>
                    <span>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Fiber Optic Lights
                  </p>

                  <p>
                    <span>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{" "}
                    Multipurpose designed Limo
                  </p>

                  <p>
                    <span>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{" "}
                    Bar Area with Fridge
                  </p>

                  <p>
                    <span>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{" "}
                    Chill Air Conditioning
                  </p>
                </div>
              </div>
              <button>Reserve Now</button>
            </div>

            <div className="today_img">
              <img src={today} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffRoadAndKnowMore;
