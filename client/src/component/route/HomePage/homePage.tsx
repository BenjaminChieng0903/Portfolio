import React from 'react'
import { useOutletContext } from 'react-router-dom'
import TypingEffectRewind from '../../TypingEffect/TypingEffectRewind'
import TypingEffect from '../../TypingEffect/TypingEffect'
import './homePage.css'
import COntactMe from '../../ContactMe/ContactMe'

const HomePage = () => {
  const texts = ['Web Developer', 'Software Engineer', 'Full-stack Developer']
  const navRef = useOutletContext<React.RefObject<HTMLDivElement>>()
  const backgroundImage = './images/Selfie/selfie.jpg'
  //   const [scienceIslandImages, setScienceIslandImages] = useState([]);

  // const importAllImages = (r) => {
  //   return r.keys();
  // };
  const scienceIslandImages = [
    './images/ScienceIsland/SI-game-login.jpg',
    './images/ScienceIsland/SI-game-user.jpg',
    './images/ScienceIsland/SI-teacher-portal.jpg',
  ]

  // importAllImages(
  //   require.context(
  //     `../images/ScienceIsland`,
  //     false,
  //     /\.(png|jpe?g|svg)$/
  //   )
  // );
  const natoursImages = [
    './images/Natours/NA-home-page.jpg',
    './images/Natours/NA-real-time-map.jpg',
    './images/Natours/NA-tour-detail.jpg',
    './images/Natours/NA-user-profile.jpg',
  ]

  // importAllImages(
  //   require.context(
  //     `../images/Natours`,
  //     false,
  //     /\.(png|jpe?g|svg)$/
  //   )
  // );
  const musicEvent = [
    './images/MusicEvent/ME-1.jpg',
    './images/MusicEvent/ME-2.jpg',
    './images/MusicEvent/ME-3.jpg',
    './images/MusicEvent/ME-4.jpg',
    './images/MusicEvent/ME-5.jpg',
  ]

  // importAllImages(
  //   require.context(
  //     `../images/MusicEvent`,
  //     false,
  //     /\.(png|jpe?g|svg)$/
  //   )
  // );
  const kingClothing = [
    './images/KingClothing/KC-1.jpg',
    './images/KingClothing/KC-2.jpg',
    './images/KingClothing/KC-3.jpg',
  ]

  // importAllImages(
  //   require.context(
  //     `../images/KingClothing`,
  //     false,
  //     /\.(png|jpe?g|svg)$/
  //   )
  // );

  const aubot = [
    './images/Aubot/aubot-banner.jpg',
    './images/Aubot/aubot-course-description.jpg',
    './images/Aubot/aubot-test-templates.jpg',
  ]

  // importAllImages(
  //   require.context(
  //     `../images/Aubot`,
  //     false,
  //     /\.(png|jpe?g|svg)$/
  //   )
  // );
  const scrollToSection = () => {
    navRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }
  return (
    <div className="App">
      <header className="child-hierarchy App-header">
        <span className="self-intro">Hi, I&apos;m BENJAMIN QIAN, A....</span>
        <TypingEffectRewind texts={texts} speed={150} />
        <button className="arrow-button">
          <div className="line"></div>
          <div className="line"></div>
          <div className="arrow"></div>
        </button>
      </header>
      <div className="view-window child-hierarchy"></div>
      <div className="background-image-container">
        <div
          className="scrollable-content-top"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* <img className="background-image" src="./images/selfie.jpg"/> */}
        </div>
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
                Software engineer graduated from master’s degree in software
                engineering at the University of Melbourne,
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
                  <br />
                  DevOps: Docker | GCP
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
            (//.. All the projects were created from scratch, half of projects
            were developed individually and another half through teamwork. The
            projects can be categorized as websites, web applications, and
            systems. Three of them are currently in business use.)
          </p>
          <div className="portfolio">
            <div className="portfolio-grid-1">
              <div className="portfolio-flex-box-row">
                <div className="portfolio-flex-box-column">
                  {/* <div className="portfolio-image-container"></div> */}
                  {natoursImages.map((item, index) => {
                    item = item.substring(2)
                    return (
                      <a
                        key={index}
                        href="https://github.com/BenjaminChieng0903/Natours"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={item}></img>
                      </a>
                    )
                  })}
                  <span className="img-title">&#123;Natours&#125;</span>
                  <p className="img-text">
                    (//.. Natours is a tourism website that introduces exciting
                    tours in America to customers.)
                  </p>
                </div>
                <div className="portfolio-flex-box-column">
                  {scienceIslandImages.map((item, index) => {
                    item = item.substring(2)
                    return (
                      <a
                        key={index}
                        href="https://www.scienceisland.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={item}></img>
                      </a>
                    )
                  })}
                  <span className="img-title">&#123;Science Island&#125;</span>
                  <p className="img-text">
                    (//.. Science Island is an engaging game-based online
                    educational platform tailored for children aged eight to
                    thirteen, focused on imparting STEM knowledge.)
                  </p>
                </div>
              </div>
            </div>
            <div className="portfolio-grid-2 portfolio-grid-row">
              <div className="portfolio-flex-box-column content-in-second-cell">
                {/* <div className="portfolio-image-container"></div> */}
                {musicEvent.map((item, index) => {
                  item = item.substring(2)
                  return (
                    <a
                      key={index}
                      href="https://github.com/SWEN900072023/Green-Day"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={item}></img>
                    </a>
                  )
                })}
                <span className="img-title">&#123;Music Event&#125;</span>
                <p className="img-text">
                  (//.. The Music Event System is an online website for people
                  to order tickets for various music events. The system with
                  beautiful UI incorporates multiple backend architecture
                  designs without utilizing any frameworks)
                </p>
              </div>
            </div>
            <div className="portfolio-grid-3 portfolio-grid-row">
              <div className="portfolio-flex-box-column content-in-second-cell">
                {/* <div className="portfolio-image-container"></div> */}
                {kingClothing.map((item, index) => {
                  item = item.substring(2)
                  return (
                    <a
                      key={index}
                      href="https://benevolent-basbousa-bf8c47.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={item}></img>
                    </a>
                  )
                })}
                <span className="img-title">&#123;King Clothing&#125;</span>
                <p className="img-text">
                  (//.. King-Clothing is an online e-commerce platform
                  specializing in fashion-forward apparel. Utilizing
                  cutting-edge front-end techniques and stunning web design,)
                </p>
              </div>
            </div>
            <div className="portfolio-grid-4 portfolio-grid-row">
              <div className="portfolio-flex-box-column content-in-second-cell">
                {/* <div className="portfolio-image-container"></div> */}
                {aubot.map((item, index) => {
                  item = item.substring(2)
                  return (
                    <>
                      {index != 2 ? (
                        <a
                          key={index}
                          href="https://aubot-academy.webflow.io/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={item}></img>
                        </a>
                      ) : (
                        <a
                          href="https://github.com/BenjaminChieng0903/Python-AST"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={item}></img>
                        </a>
                      )}
                    </>
                  )
                })}
                <span className="img-title">&#123;Aubot Academy&#125;</span>
                <p className="img-text">
                  (//.. &apos;Aubot academy&apos; which is an online educational
                  platform to teach programming languages to Australian students
                  from year 1 to year 12. Students can learn contemporary
                  mainstream programming languages and skills such as Java,
                  Python etc.)
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
            (//.. Front-end Development | Back-end Development | Web Development
            | Software Development | Data Integration)
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
              )
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
  )
}

export default HomePage
