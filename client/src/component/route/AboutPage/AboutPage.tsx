import COntactMe from "../../ContactMe/ContactMe";
import TypingEffectRewindSlow from "../../TypingEffect/TypingEffectRewindSlow";
import "./AboutPage.css";
const AboutPage = () => {
  const texts = ["About me"];
  const backgroundImage = "./images/Selfie/selfie.jpg";
  return (
    <div className="About-me-container">
      <header className="child-hierarchy App-header-about">
        <TypingEffectRewindSlow texts={texts} speed={150} />
        <div className="paragraph-container">
          <span>
            ...I have over 4 years of experience in web development, with a
            strong background in both front-end with React and back-end with Node.js technologies(MERN stack). Experienced in
            DevOps and cloud deployment with Docker and GCP;
          </span>
          <span>
            …I see myself as a learning-driven developer, a desire of problem-solving and teamwork.
            I value team collaboration and the appreciation of brainstorming in team.
            Has a flexible engineering mindset, an advanced understanding of knowledge base change and make new techiques applicable
            to different requirements.
          </span>
        </div>
      </header>
      <div className="view-window child-hierarchy"></div>
      <div className="background-image-container">
        <div className="scrollable-content-top" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      </div>
      <div className="about-page-body-container child-hierarchy">
        <section className="drives-section">
          <span className="any-section-title">&lt;What drives my work&gt;</span>
          <div className="drives">
            <div className="traits-container">
              <span>&#123;/&#125;</span>
              <span>_team work</span>
              <span>
                ...Value teamwork and the appreciation of brainstorming
                in group discussion.
              </span>
            </div>
            <div className="traits-container">
              <span>&#123;!&#125;</span>
              <span>_learning driven</span>
              <span>
                ...A desire of prolem-solving, lifelong learners in software enineering
                industry.
              </span>
            </div>
            <div className="traits-container">
              <span>&#123;#&#125;</span>
              <span>_engineering mindset</span>
              <span>
                ...an appreciation of the design, conduct and reporting of software
engineering projects, an ability to evaluate and choose software technologies and
frameworks used in software engineering.
              </span>
            </div>
            <div className="traits-container">
              <span>&#123;%&#125;</span>
              <span>_communication</span>
              <span>
                ...A capacity to articulate the knowledge and understanding in oral
and written forms of communications.
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
