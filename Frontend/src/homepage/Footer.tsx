// importing logo image
import logo from "../images/logo.jpeg";

// importing styling
import "../styles/footer.css";

// fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div id="footer_first">
          <div>
            <img
              style={{ width: "100%", height: "100%" }}
              src={logo}
              alt="logo image"
            />
          </div>
          <p>
            Our mission at Rent Wheels is to provide a seamless car rental
            experience with convenience, variety, and exceptional service,
            making your journey effortless and enjoyable.
          </p>
        </div>
        <div id="footer_second">
          <div id="footer_second_children">
            <h1>Contact Info</h1>
            <div>
              <p>
                <span className="material-symbols-outlined">call</span>{" "}
                9582870760
              </p>
              <p>
                <span className="material-symbols-outlined">
                  mark_email_unread
                </span>{" "}
                junaidkhan23785@gmail.com
              </p>
              <p>
                <span className="material-symbols-outlined">home_pin</span> New
                Delhi, Delhi India
              </p>
            </div>
          </div>
          <div id="footer_second_children">
            <h1>Follow Us</h1>
            <div>
              <p>
                <a
                  href="https://www.linkedin.com/in/junaidify-khan/"
                  target="_blank"
                >
                  <span>
                    <FontAwesomeIcon icon={faLinkedin} />{" "}
                  </span>
                  LinkedIn
                </a>
              </p>
              <p>
                <a href="https://github.com/Junaidify" target="_blank">
                  <span>
                    <FontAwesomeIcon icon={faGithub} />
                  </span>{" "}
                  Github
                </a>
              </p>
            </div>
          </div>
          <div id="footer_second_last_child">
            <h1>Subscribe to our Newsletter</h1>
            <div>
              <div>
                <input type="text" placeholder="Enter Email" />
                <button>Subscribe</button>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/junaidify-khan/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/Junaidify" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />{" "}
                </a>
                <button>
                  <FontAwesomeIcon icon={faEnvelope} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="copyright">
          <p>@Rent Wheels</p>
          <p>© 2023 Rent Wheels. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
