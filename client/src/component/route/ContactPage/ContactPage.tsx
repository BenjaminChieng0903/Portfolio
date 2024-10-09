import COntactMe from "../../ContactMe/ContactMe";
import GoogleJavascriptMaps from "../../Map/GoogleJavascriptMaps";
import TypingEffectRewindSlow from "../../TypingEffect/TypingEffectRewindSlow";
import "./ContactPage.css";

const ContactPage = () => {
  const texts = ["Contact"];
  return (
    <div className="contact-me-container">
      <header className="App-header-contact">
        <TypingEffectRewindSlow texts={texts} speed={150} />
      </header>
      <div className="background-image-container"></div>
      <div className="contact-page-body-container">
        <COntactMe></COntactMe>
        <div className="address-grid">
          <div className="phone-details">
            <span>&#123;phone&#125;</span>
            <span>434-589-236</span>
          </div>
          <div className="email-details">
            <span>&#123;email&#125;</span>
            <span>qianjingning0903@gmail.com</span>
          </div>
          <div className="address-details">
            <span>&#123;address&#125;</span>
            <span>8 Pearl River Rd, Docklands, VIC 3008</span>
          </div>
        </div>
        <GoogleJavascriptMaps></GoogleJavascriptMaps>
      </div>
    </div>
  );
};

export default ContactPage;
