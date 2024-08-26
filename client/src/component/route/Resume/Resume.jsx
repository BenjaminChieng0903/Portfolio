import COntactMe from "../../ContactMe/ContactMe";
import TypingEffectRewindSlow from "../../TypingEffect/TypingEffectRewindSlow";
import "./Resume.css";
import ServiceTypingEffect from "../../TypingEffect/ServiceTypingEffect";
const Resume = () => {
  const texts = ["Resume"];
  const titles = [
    "Full-stack Developer",
    "Web Developer",
    "Full-stack Developer",
    "Software Engineer",
    "Web Developer"
  ];
  const workExperience = [{
    company:"ByteCroniX",
    period:"Jul 2024 - Present",
    description: "Developing the immigration web app/mobile app for people who are struggling with immigration plan in Australia. As a full stack developer in the dev team, I’m responsible for web app front-end development, microservices architecture for mobile and web, and using Docker to create isolated environments for each service. Deployment with GCP and implement CI/CD pipeline. "
  },{
    company:"University of Melbourne",
    period:"Sept 2023 - Nov 2023",
    description: "Developing the Music Event System which is an online web application for people to order tickets for various music events. With incorporates multiple backend architecture designs without utilizing any frameworks to simulate mainstream framework such as SpringBoot. Experienced in implementing many back-end architecture designs particularly used in complex software."
  },{
    company:"Natours",
    period:"Jul 2023 - Sept 2023",
    description: "Creating the whole project from scratch individually to meet requirements of client. Responsible for full-stack development with React, Node.js, Express.js and MongoDB. Skilled in front-end UI/UX design and back-end architecture design with trending model such as MVC. Experienced in web deployment and MERN project testing. "
  },{
    company:"Swinburne University",
    period:"Feb 2023 - Jun 2023",
    description: "As a software engineer in the team, assisting dev team in writing tech documentation and building teaching portal and built-in game. specialized in fixing bugs and delivered clear, reusable logical code. Experienced in game development with Unity, plus some classical functionalities were frequently used in modern games. "
  },{
    company:"Aubot",
    period:"Nov 2022 - Mar 2023",
    description: "Creating the API that will receive the coding test results from students on the website and reformat the Python file templates via Python AST for further purposes. Additionally, participated in front-end page development and implemented back-end APIs’ logic. "
  }];
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
              <div className="position-company-flexbox resume-grid-border">
                <div className="resume-grid-animation">
                  <span>&#123;{index + 1}&#125;</span>
                  <ServiceTypingEffect
                    title={title}
                    speed={150}
                    index={index}
                    key={index}
                  />
                </div>
                
                <div className="company-period-flexbox">
                <span>{workExperience[index].company}</span>
                <span>{workExperience[index].period}</span>
                </div>
          
                </div>
                
                <span className="resume-grid-border resume-grid-info-style">
                 {workExperience[index].description}
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
