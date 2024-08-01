import COntactMe from "../../ContactMe/ContactMe";
import GoogleJavascriptMaps from "../../Map/GoogleJavascriptMaps";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-me-container">
      <div className="background-image-container"></div>
      <div className="contact-page-body-container">
        <COntactMe></COntactMe>
        <div className="address-grid">
          <div className="phone-details">
            <span>&#123;phone&#125;</span>
            <span>123456</span>
          </div>
          <div className="email-details">
            <span>&#123;email&#125;</span>
          </div>
          <div className="address-details">
            <span>&#123;address&#125;</span>
          </div>
        </div>
        <GoogleJavascriptMaps></GoogleJavascriptMaps>
      </div>
    </div>
  );
};

export default ContactPage;
