import COntactMe from "../../ContactMe/ContactMe";
import TypingEffectRewindSlow from "../../TypingEffect/TypingEffectRewindSlow";
import "./AboutPage.css";
const AboutPage = () => {
  const texts = ["About me"];
  return (
    <div className="About-me-container">
      <header className="child-hierarchy App-header-about">
        <TypingEffectRewindSlow texts={texts} speed={150} />
        <div className="paragraph-container">
          <span>
            ...I have over 12 years of experience in web development, with a
            strong background in both front-end and back-end technologies.
            Nullam facilisis mollis mauris, vitae mollis leo viverra eu. In
            cursus commodo interdum;
          </span>
          <span>
            …lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            facilisis mollis mauris, vitae mollis leo viverra eu. In cursus
            commodo interdum. Duis vitae ex massa. Quisque luctus diam at mi
            mollis mollis. Proin nec ex non lectus molestie laoreet sollicitudin
            auctor urna. Suspendisse varius diam vel egestas finibus. Fusce vel
            aliquet lectus. Nulla dapibus, turpis nec sodales congue, lectus
            ipsum vehicula massa, nec pulvinar.
          </span>
        </div>
      </header>
      <div className="view-window child-hierarchy"></div>
      <div className="background-image-container">
        <div className="scrollable-content-top"></div>
      </div>
      <div className="about-page-body-container child-hierarchy">
        <section className="drives-section">
          <span className="any-section-title">&lt;What drives my work&gt;</span>
          <div className="drives">
            <div className="traits-container">
              <span>&#123;/&#125;</span>
              <span>_team work</span>
              <span>
                ...lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </span>
            </div>
            <div className="traits-container">
              <span>&#123;!&#125;</span>
              <span>_learning driven</span>
              <span>
                ...lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </span>
            </div>
            <div className="traits-container">
              <span>&#123;#&#125;</span>
              <span>_engineering mindset</span>
              <span>
                ...lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </span>
            </div>
            <div className="traits-container">
              <span>&#123;%&#125;</span>
              <span>_communication</span>
              <span>
                ...lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </span>
            </div>
          </div>
        </section>
        <COntactMe></COntactMe>
      </div>
    </div>
  );
};

export default AboutPage;
