import COntactMe from "../../ContactMe/ContactMe";
import TypingEffectRewindSlow from "../../TypingEffect/TypingEffectRewindSlow";
import "./Resume.css";
import ServiceTypingEffect from "../../TypingEffect/ServiceTypingEffect";
const Resume = () => {
  const texts = ["Resume"];
  const titles = [
    "Web/Web apps",
    "Web Developer",
    "Software Engineer",
    "Full-stack Developer"
  ];
  return (
    <div className="resume-container">
      <header className="child-hierarchy App-header-resume">
        <TypingEffectRewindSlow texts={texts} speed={150} />

        <span className="resume-section-intro">
          …lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          facilisis mollis mauris, vitae mollis leo viverra eu. In cursus
          commodo interdum.
        </span>
      </header>
      <div className="view-window child-hierarchy"></div>
      <div className="background-image-container">
        <div className="scrollable-content-top"></div>
      </div>
      <div className="resume-page-body-container child-hierarchy">
        <span className="any-section-title">&lt;Experience&gt;</span>
        <section className="experience-info-container">
          {titles.map((title, index) => {
            return (
              <>
                <div className="grid-animation grid-border">
                  <span>&#123;{index + 1}&#125;</span>
                  <ServiceTypingEffect
                    title={title}
                    speed={150}
                    index={index}
                    key={index}
                  />
                </div>
                <span className="grid-border grid-info-style">
                  …lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Fusce ut dui tortor. Maecenas cursus velit sit amet orci
                  tincidunt hendrerit. Etiam tincidunt nisl at nibh ullamcorper,
                  at lacinia arcu egestas. Maecenas sed volutpat enim, ut
                  vulputate sapien;
                </span>
              </>
            );
          })}
        </section>
        <section className="skills-section">
          <span className="any-section-title">&lt;Skills&gt;</span>
          <div className="skills">
            <div className="traits-container">
              <span>&#123;/&#125;</span>
              <span>_react.js & node.js & express.js</span>
              <span>
                ...lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </span>
            </div>
            <div className="traits-container">
              <span>&#123;!&#125;</span>
              <span>_javascript & typescript & html & css</span>
              <span>
                ...lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </span>
            </div>
            <div className="traits-container">
              <span>&#123;#&#125;</span>
              <span>_mongodb & mysql & postgres</span>
              <span>
                ...lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </span>
            </div>
            <div className="traits-container">
              <span>&#123;%&#125;</span>
              <span>_gcp & ci/cd pipeline</span>
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

export default Resume;
