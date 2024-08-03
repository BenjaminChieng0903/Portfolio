import { useOutletContext } from "react-router-dom";
import TypingEffectRewind from "../../TypingEffect/TypingEffectRewind";
import TypingEffect from "../../TypingEffect/TypingEffect";
import "./homePage.css";
import COntactMe from "../../ContactMe/ContactMe";

const HomePage = () => {
  const texts = ["Web Developer", "Software Engineer", "Full-stack Developer"];
  const navRef = useOutletContext();
  //   const [scienceIslandImages, setScienceIslandImages] = useState([]);

  const importAllImages = (r) => {
    return r.keys();
  };
  const scienceIslandImages = importAllImages(
    require.context(
      `../../../../public/images/ScienceIsland`,
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const natoursImages = importAllImages(
    require.context(
      `../../../../public/images/Natours`,
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const musicEvent = importAllImages(
    require.context(
      `../../../../public/images/MusicEvent`,
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const kingClothing = importAllImages(
    require.context(
      `../../../../public/images/KingClothing`,
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const aubot = importAllImages(
    require.context(
      `../../../../public/images/Aubot`,
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const scrollToSection = () => {
    navRef.current.scrollIntoView({
      behavior: "smooth"
    });
  };
  return (
    <div className="App">
      <header className="child-hierarchy App-header">
        <span className="self-intro">Hi, I'm BENJAMIN QIAN, A....</span>
        <TypingEffectRewind texts={texts} speed={150} />
        <button class="arrow-button">
          <div class="line"></div>
          <div class="line"></div>
          <div class="arrow"></div>
        </button>
      </header>
      <div className="view-window child-hierarchy"></div>
      <div className="background-image-container">
        <div className="scrollable-content-top"></div>
      </div>
      <div className="home-page-body-container child-hierarchy">
        <section className="about-me-section">
          <span className="about-me-banner">&#123;/&#125;</span>
          <span className="any-section-title">&lt;About me&gt;</span>
          <p className="any-section-intro">
            Web Developer | Software Engineer | Full-stack Developer
          </p>
          <div className="about-me-details">
            <div className="details-grid">
              <div className="details-grid-intro">
                Software engineer just graduated from master’s degree in
                software engineering at the University of Melbourne,
                <span className="highlighter"> 3</span> years of real-world
                software development experience with more than
                <span className="highlighter"> 10</span> formal projects.
              </div>
              <div className="details-grid-tech-skills">
                <h1>Tech Stacks</h1>
                <p>
                  Front-end Development: React.js | Javascript/Typescript | HTML
                  | SASS/CSS
                  <br />
                  Back-end Development: Node.js | Express.js | Java/Springboot |
                  Python/Flask <br />
                  Database: MongoDB | MySql | PostgresSql
                </p>
              </div>
            </div>

            <button
              className="homepage-button"
              onClick={() => scrollToSection()}
            >
              「read_more」
            </button>
          </div>
        </section>
        <section className="portfolio-section">
          <span>(!)</span>
          <span className="any-section-title">&lt;Portfolio&gt;</span>
          <p className="any-section-intro portfolio-intro">
            //.. The projects varied from different tech stacks, most of the
            projects were developed with teamwork from the scratch
          </p>
          <div className="portfolio">
            <div className="portfolio-grid-1">
              <div className="portfolio-flex-box-row">
                <div className="portfolio-flex-box-column">
                  {/* <div className="portfolio-image-container"></div> */}
                  {natoursImages.map((item) => {
                    item = item.substring(2);
                    return (
                      <a
                        href="https://github.com/BenjaminChieng0903/Natours"
                        target="_blank"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/images/natours/${item}`}
                        ></img>
                      </a>
                    );
                  })}
                  <span className="img-title">&#123;Natours&#125;</span>
                  <p className="img-text">
                    //.. Natours is a tourism website that introduces exciting
                    tours in America to customers.
                  </p>
                </div>
                <div className="portfolio-flex-box-column">
                  {scienceIslandImages.map((item) => {
                    item = item.substring(2);
                    return (
                      <a href="https://www.scienceisland.com/" target="_blank">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/scienceIsland/${item}`}
                        ></img>
                      </a>
                    );
                  })}
                  <span className="img-title">&#123;Science Island&#125;</span>
                  <p className="img-text">
                    //.. Science Island is an engaging game-based online
                    educational platform tailored for children aged eight to
                    thirteen, focused on imparting STEM knowledge.
                  </p>
                </div>
              </div>
            </div>
            <div className="portfolio-grid-2 portfolio-grid-row">
              <div className="portfolio-flex-box-column content-in-second-cell">
                {/* <div className="portfolio-image-container"></div> */}
                {musicEvent.map((item) => {
                  item = item.substring(2);
                  return (
                    <a
                      href="https://github.com/SWEN900072023/Green-Day"
                      target="_blank"
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/images/musicEvent/${item}`}
                      ></img>
                    </a>
                  );
                })}
                <span className="img-title">&#123;Music Event&#125;</span>
                <p className="img-text">
                  //.. The Music Event System is an online website for people to
                  order tickets for various music events. The system with
                  beautiful UI incorporates multiple backend architecture
                  designs without utilizing any frameworks
                </p>
              </div>
            </div>
            <div className="portfolio-grid-3 portfolio-grid-row">
              <div className="portfolio-flex-box-column content-in-second-cell">
                {/* <div className="portfolio-image-container"></div> */}
                {kingClothing.map((item) => {
                  item = item.substring(2);
                  return (
                    <a
                      href="https://benevolent-basbousa-bf8c47.netlify.app/"
                      target="_blank"
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/images/kingClothing/${item}`}
                      ></img>
                    </a>
                  );
                })}
                <span className="img-title">&#123;King Clothing&#125;</span>
                <p className="img-text">
                  //.. King-Clothing is an online e-commerce platform
                  specializing in fashion-forward apparel. Utilizing
                  cutting-edge front-end techniques and stunning web design,
                </p>
              </div>
            </div>
            <div className="portfolio-grid-4 portfolio-grid-row">
              <div className="portfolio-flex-box-column content-in-second-cell">
                {/* <div className="portfolio-image-container"></div> */}
                {aubot.map((item, index) => {
                  item = item.substring(2);
                  return (
                    <>
                      {index != 2 ? (
                        <a
                          href="https://aubot-academy.webflow.io/"
                          target="_blank"
                        >
                          <img
                            src={`${process.env.PUBLIC_URL}/images/aubot/${item}`}
                          ></img>
                        </a>
                      ) : (
                        <a
                          href="https://github.com/BenjaminChieng0903/Python-AST"
                          target="_blank"
                        >
                          <img
                            src={`${process.env.PUBLIC_URL}/images/aubot/${item}`}
                          ></img>
                        </a>
                      )}
                    </>
                  );
                })}
                <span className="img-title">&#123;Aubot Academy&#125;</span>
                <p className="img-text">
                  //.. 'Aubot academy' which is an online educational platform
                  to teach programming languages to Australian students from
                  year 1 to year 12. Students can learn contemporary mainstream
                  programming languages and skills such as Java, Python etc.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="service-section">
          <span>(#)</span>
          <h1 className="any-section-title service-section-title">
            &lt;Services&gt;
          </h1>
          <p className="any-section-intro">
            //.. Front-end Development | Back-end Development | Web Development
            | Software Development | Data Integration
          </p>
          <div className="services-container">
            {texts.map((title, index) => {
              return (
                <TypingEffect
                  title={title}
                  speed={150}
                  index={index}
                  key={index}
                />
              );
            })}
          </div>
          <button className="homepage-button" onClick={() => scrollToSection()}>
            &#123;all_services&#125;
          </button>
        </section>
        {/* <div className="view-window child-hierarchy"></div>
        <div className="background-image-container">
          <div className="scrollable-content-bottom"></div>
        </div> */}
        <COntactMe></COntactMe>
      </div>
    </div>
  );
};

export default HomePage;
