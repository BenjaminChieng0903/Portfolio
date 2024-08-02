import COntactMe from "../../ContactMe/ContactMe";
import TypingEffectRewindSlow from "../../TypingEffect/TypingEffectRewindSlow";
import "./Portoflio.css";
const Portoflio = () => {
  const texts = ["Portfolio"];
  const filterTitle = [
    "All Projects",
    "Web Development",
    "Web Application",
    "System"
  ];
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
  return (
    <div className="portfolio-container">
      <header className="child-hierarchy App-header-portfolio">
        <TypingEffectRewindSlow texts={texts} speed={150} />
        <span className="portfolio-section-intro">
          …lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          elementum, eros at sagittis facilisis, ante est rutrum ligula, at
          interdum eros sapien vel magna.
        </span>
      </header>
      <div className="portfolio-page-body-container">
        <div className="portfolio-filter">
          <div className="filter">
            <button>{filterTitle[0]}</button>
            <button>{filterTitle[1]}</button>
            <button>{filterTitle[2]}</button>
            <button>{filterTitle[3]}</button>
          </div>
          <div className="project">
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
                      src={`${process.env.PUBLIC_URL}/images/Natours/${item}`}
                    ></img>
                  </a>
                );
              })}
              <span className="img-title">&#123;Natours&#125;</span>
              <p className="img-text">
                //.. Natours is a tourism website that introduces exciting tours
                in America to customers.
              </p>
            </div>
            <div className="portfolio-flex-box-column">
              {scienceIslandImages.map((item) => {
                item = item.substring(2);
                return (
                  <a href="https://www.scienceisland.com/" target="_blank">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/ScienceIsland/${item}`}
                    ></img>
                  </a>
                );
              })}
              <span className="img-title">&#123;Science Island&#125;</span>
              <p className="img-text">
                //.. Science Island is an engaging game-based online educational
                platform tailored for children aged eight to thirteen, focused
                on imparting STEM knowledge.
              </p>
            </div>
            <div className="portfolio-flex-box-column ">
              {/* <div className="portfolio-image-container"></div> */}
              {musicEvent.map((item) => {
                item = item.substring(2);
                return (
                  <a
                    href="https://github.com/SWEN900072023/Green-Day"
                    target="_blank"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/MusicEvent/${item}`}
                    ></img>
                  </a>
                );
              })}
              <span className="img-title">&#123;Music Event&#125;</span>
              <p className="img-text">
                //.. The Music Event System is an online website for people to
                order tickets for various music events. The system with
                beautiful UI incorporates multiple backend architecture designs
                without utilizing any frameworks
              </p>
            </div>
            <div className="portfolio-flex-box-column ">
              {/* <div className="portfolio-image-container"></div> */}
              {kingClothing.map((item) => {
                item = item.substring(2);
                return (
                  <a
                    href="https://benevolent-basbousa-bf8c47.netlify.app/"
                    target="_blank"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/KingClothing/${item}`}
                    ></img>
                  </a>
                );
              })}
              <span className="img-title">&#123;King Clothing&#125;</span>
              <p className="img-text">
                //.. King-Clothing is an online e-commerce platform specializing
                in fashion-forward apparel. Utilizing cutting-edge front-end
                techniques and stunning web design,
              </p>
            </div>
            <div className="portfolio-flex-box-column">
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
                          src={`${process.env.PUBLIC_URL}/images/Aubot/${item}`}
                        ></img>
                      </a>
                    ) : (
                      <a
                        href="https://github.com/BenjaminChieng0903/Python-AST"
                        target="_blank"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/images/Aubot/${item}`}
                        ></img>
                      </a>
                    )}
                  </>
                );
              })}
              <span className="img-title">&#123;Aubot Academy&#125;</span>
              <p className="img-text">
                //.. 'Aubot academy' which is an online educational platform to
                teach programming languages to Australian students from year 1
                to year 12. Students can learn contemporary mainstream
                programming languages and skills such as Java, Python etc.
              </p>
            </div>
          </div>
        </div>
        <COntactMe></COntactMe>
      </div>
    </div>
  );
};

export default Portoflio;
