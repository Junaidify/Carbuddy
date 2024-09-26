// importing logo image

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
        <div className="footer_container">
          <div className="footer_logo">
            <h2>CARBUDDY</h2>
            <div>
              <p>Subscribe to the newsletter</p>
              <input type="text" placeholder="abc@gmail.com" />
            </div>
          </div>

          <div className="footer_content_box">
            <div className="footer_content">
              <h3>Top cities</h3>
              <div>
                <p>New Delhi</p>
                <p>Bangalore</p>
                <p>Mumbai</p>
                <p>Chennai</p>
                <p>Kolkata</p>
              </div>
            </div>

            <div className="footer_content">
              <h3>Explore</h3>
              <div>
                <p>Intercity rides</p>
                <p>Weekend getaways</p>
                <p>Private car service</p>
                <p>Airport transfers</p>
                <p>Intercity Trips</p>
              </div>
            </div>

            <div className="footer_content">
              <h3>Intercity rides</h3>
              <div>
                <p>Delhi to Mumbai</p>
                <p>Delhi to Gurugram</p>
                <p>Delhi to Noida</p>
                <p>Bangalore to Hyderabad</p>
                <p>Mumbai to Pune</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer_copyright">
          <p>© 2024 CARBUDDY.</p>

          <div className="footer_copyright_content">
            <p>Terms</p>
            <p>Privacy Policy</p>
            <p>Legal notice</p>
            <p>Accessiblity</p>
          </div>

          <div className="footer_copyright_social">
            <p>
              <FontAwesomeIcon icon={faGithub} />
            </p>
            <p>
              <FontAwesomeIcon icon={faLinkedin} />
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
