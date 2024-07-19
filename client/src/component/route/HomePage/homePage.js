import { useOutletContext } from "react-router-dom";
import TypingEffect from "../../TypingEffect/TypingEffect";
import "./homePage.css";
const HomePage = () => {
  const texts = ["Software Engineer", "Full-stack Developer"];
  const navRef = useOutletContext();

  const scrollToSection = () => {
    navRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="App">
      <header className="child-hierarchy App-header">
        <span className="self-intro">Hi, I'm BENJAMIN QIAN, A....</span>
        <TypingEffect texts={texts} speed={150} />
        <button class="arrow-button">
          <div class="line"></div>
          <div class="line"></div>
          <div class="arrow"></div>
        </button>
      </header>
      <div className="child-hierarchy view-window"></div>
      <div className="background-image-container">
        <div class="scrollable-content"></div>
      </div>
      <div className="child-hierarchy about-me-container">
        <span className="about-me-banner">&#123;/&#125;</span>
        <span className="about-me">&lt;About me&gt;</span>
        <p className="about-me-intro">
          Software Engineer | Full-stack Developer
        </p>
        <div className="about-me-details">
          <div className="details-grid">
            <div className="details-grid-intro">
              Software engineer just graduated from master’s degree in software
              engineering at the University of Melbourne,
              <span className="highlighter"> 3</span> years of real-world
              software development experience with more than
              <span className="highlighter"> 10</span> formal projects.
            </div>
            <div className="details-grid-tech-skills">
              <t1>Tech Stacks</t1>
              <p>
                Front-end Development: React.js | Javascript/Typescript | HTML |
                SASS/CSS
                <br />
                Back-end Development: Node.js | Express.js | Java/Springboot |
                Python/Flask <br />
                Database: MongoDB | MySql | PostgresSql
              </p>
            </div>
          </div>

          <button className="read-more" onClick={() => scrollToSection()}>
            「read_more」
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
