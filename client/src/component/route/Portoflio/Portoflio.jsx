import { useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);
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
  const projectInfo = [
    {
      name: "natours",
      type: "Web Development",
      photos: natoursImages,
      link: ["https://github.com/BenjaminChieng0903/Natours"],
      text: "//.. Natours is a tourism website that introduces exciting tours in America to customers."
    },
    {
      name: "scienceIsland",
      type: "Web Application",
      photos: scienceIslandImages,
      link: ["https://www.scienceisland.com/"],
      text: "//.. Science Island is an engaging game-based online educational platform tailored for children aged eight to thirteen, focused on imparting STEM knowledge."
    },
    {
      name: "musicEvent",
      type: "System",
      photos: musicEvent,
      link: ["https://github.com/SWEN900072023/Green-Day"],
      text: "//.. The Music Event System is an online website for people to order tickets for various music events. The system with beautiful UI incorporates multiple backend architecture designs without utilizing any frameworks"
    },
    {
      name: "kingClothing",
      type: "Web Development",
      photos: kingClothing,
      link: ["https://benevolent-basbousa-bf8c47.netlify.app/"],
      text: "//.. King-Clothing is an online e-commerce platform specializing in fashion-forward apparel. Utilizing cutting-edge front-end techniques and stunning web design."
    },
    {
      name: "aubot",
      type: "Web Application",
      photos: aubot,
      link: [
        "https://aubot-academy.webflow.io/",
        "https://github.com/BenjaminChieng0903/Python-AST"
      ],
      text: "//.. 'Aubot academy' which is an online educational platform to teach programming languages to Australian students from year 1 to year 12. Students can learn contemporary mainstream programming languages and skills such as Java, Python etc."
    }
  ];
  const [projects, setProjects] = useState(projectInfo);
  const nonFilter = () => {
    setProjects(projectInfo);
  };
  const filterWebDevelopment = () => {
    setProjects(projectInfo.filter((item) => item.type == "Web Development"));
  };
  const filterWebApp = () => {
    setProjects(projectInfo.filter((item) => item.type == "Web Application"));
  };
  const filterSystem = () => {
    setProjects(projectInfo.filter((item) => item.type == "System"));
  };
  const filterFuncArr = [
    nonFilter,
    filterWebDevelopment,
    filterWebApp,
    filterSystem
  ];

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
            {filterTitle.map((title, index) => {
              return (
                <button
                  key={index}
                  className={`button-style${
                    activeIndex === index ? "-active" : ""
                  }`}
                  onClick={() => {
                    filterFuncArr[index]();
                    setActiveIndex(index);
                  }}
                >
                  {title}
                </button>
              );
            })}
          </div>
          <div className="project">
            {projects.map((project) => {
              console.log(project.link.length);
              return (
                <div className="portfolio-flex-box-column">
                  {project.photos.map((photo, index) => {
                    const pho = photo.substring(2);
                    return (
                      <>
                        {project.link.length == 1 ? (
                          <a href={project.link[0]} target="_blank">
                            <img
                              key={index}
                              src={`${process.env.PUBLIC_URL}/images/${project.name}/${pho}`}
                            ></img>
                          </a>
                        ) : (
                          <>
                            {index != 2 ? (
                              <a href={project.link[0]} target="_blank">
                                <img
                                  key={index}
                                  src={`${process.env.PUBLIC_URL}/images/${project.name}/${pho}`}
                                ></img>
                              </a>
                            ) : (
                              <a href={project.link[1]} target="_blank">
                                <img
                                  key={index}
                                  src={`${process.env.PUBLIC_URL}/images/${project.name}/${pho}`}
                                ></img>
                              </a>
                            )}
                          </>
                        )}
                      </>
                    );
                  })}
                  <span className="img-title">&#123;{project.name}&#125;</span>
                  <p className="img-text">{project.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <COntactMe></COntactMe>
      </div>
    </div>
  );
};

export default Portoflio;
