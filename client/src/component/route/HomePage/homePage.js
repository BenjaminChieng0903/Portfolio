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
        <span className="any-section-title">&lt;About me&gt;</span>
        <p className="any-section-intro">
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
              <h1>Tech Stacks</h1>
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
        <div className="portfolio-section">
          <span>(!)</span>
          <span className="any-section-title">&lt;Portfolio&gt;</span>
          <p className="any-section-intro portfolio-intro">
            The projects varied from different tech stacks, most of the projects
            were developed with teamwork from the scratch
          </p>
          <div className="portfolio">
            <div className="portfolio-grid-1">
              <div className="portfolio-flex-box-row">
                <div className="portfolio-flex-box-column">
                  {/* <div className="portfolio-image-container"></div> */}
                  <img
                    src={`${process.env.PUBLIC_URL}/images/natours.jpg`}
                  ></img>
                  <span className="img-title">&#123;Natours&#125;</span>
                  <p className="img-text">prroject introduction</p>
                </div>
                <div className="portfolio-flex-box-column">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/science_island.jpg`}
                  ></img>
                  <span className="img-title">&#123;Science Island&#125;</span>
                  <p className="img-text">prroject introduction</p>
                </div>
              </div>
            </div>
            <div className="portfolio-grid-2">hi</div>
            <div className="portfolio-grid-3">hi</div>
            <div className="portfolio-grid-4">hi</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
