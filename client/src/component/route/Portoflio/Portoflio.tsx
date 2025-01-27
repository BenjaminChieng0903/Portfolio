import React from 'react'
import { useState } from 'react'
import COntactMe from '../../ContactMe/ContactMe'
import TypingEffectRewindSlow from '../../TypingEffect/TypingEffectRewindSlow'
import './Portoflio.css'
type ProjectInfo = {
  name: string
  type: string
  photos: string[]
  link: string[]
  text: string
}[]

const Portoflio = () => {
  const texts = ['Portfolio']
  const filterTitle = [
    'All Projects',
    'Web Development',
    'Web Application',
    'System',
  ]
  const [activeIndex, setActiveIndex] = useState(0)
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
  const projectInfo: ProjectInfo = [
    {
      name: 'natours',
      type: 'Web Development',
      photos: natoursImages,
      link: ['https://github.com/BenjaminChieng0903/Natours'],
      text: '//.. Natours is a tourism website that introduces exciting tours in America to customers.',
    },
    {
      name: 'scienceIsland',
      type: 'Web Application',
      photos: scienceIslandImages,
      link: ['https://www.scienceisland.com/'],
      text: '//.. Science Island is an engaging game-based online educational platform tailored for children aged eight to thirteen, focused on imparting STEM knowledge.',
    },
    {
      name: 'musicEvent',
      type: 'System',
      photos: musicEvent,
      link: ['https://github.com/SWEN900072023/Green-Day'],
      text: '//.. The Music Event System is an online website for people to order tickets for various music events. The system with beautiful UI incorporates multiple backend architecture designs without utilizing any frameworks',
    },
    {
      name: 'kingClothing',
      type: 'Web Development',
      photos: kingClothing,
      link: ['https://benevolent-basbousa-bf8c47.netlify.app/'],
      text: '//.. King-Clothing is an online e-commerce platform specializing in fashion-forward apparel. Utilizing cutting-edge front-end techniques and stunning web design.',
    },
    {
      name: 'aubot',
      type: 'Web Application',
      photos: aubot,
      link: [
        'https://aubot-academy.webflow.io/',
        'https://github.com/BenjaminChieng0903/Python-AST',
      ],
      text: "//.. 'Aubot academy' which is an online educational platform to teach programming languages to Australian students from year 1 to year 12. Students can learn contemporary mainstream programming languages and skills such as Java, Python etc.",
    },
  ]
  const [projects, setProjects] = useState(projectInfo)
  const nonFilter = () => {
    setProjects(projectInfo)
  }
  const filterWebDevelopment = () => {
    setProjects(projectInfo.filter((item) => item.type == 'Web Development'))
  }
  const filterWebApp = () => {
    setProjects(projectInfo.filter((item) => item.type == 'Web Application'))
  }
  const filterSystem = () => {
    setProjects(projectInfo.filter((item) => item.type == 'System'))
  }
  const filterFuncArr = [
    nonFilter,
    filterWebDevelopment,
    filterWebApp,
    filterSystem,
  ]

  return (
    <div className="portfolio-container">
      <header className="child-hierarchy App-header-portfolio">
        <TypingEffectRewindSlow texts={texts} speed={150} />
        <span className="portfolio-section-intro">
          …All the projects were created from scratch, half of projects were
          developed individually and another half through teamwork. The projects
          can be categorized as websites, web applications, and systems. Three
          of them are currently in business use.
        </span>
      </header>
      <div className="background-image-container"></div>
      <div className="portfolio-page-body-container">
        <div className="portfolio-filter">
          <div className="filter">
            {filterTitle.map((title, index) => {
              return (
                <button
                  key={index}
                  className={`button-style${
                    activeIndex === index ? '-active' : ''
                  }`}
                  onClick={() => {
                    filterFuncArr[index]()
                    setActiveIndex(index)
                  }}
                >
                  {title}
                </button>
              )
            })}
          </div>
          <div className="project">
            {projects.map((project, index) => {
              console.log(project.link.length)
              return (
                <div className="portfolio-flex-box-column" key={index}>
                  {project.photos.map((photo, index) => {
                    // const pho = photo.substring(2);
                    return (
                      <>
                        {project.link.length == 1 ? (
                          <a
                            href={project.link[0]}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img key={index} src={photo}></img>
                          </a>
                        ) : (
                          <>
                            {index != 2 ? (
                              <a
                                href={project.link[0]}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img key={index} src={photo}></img>
                              </a>
                            ) : (
                              <a
                                href={project.link[1]}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img key={index} src={photo}></img>
                              </a>
                            )}
                          </>
                        )}
                      </>
                    )
                  })}
                  <span className="img-title">&#123;{project.name}&#125;</span>
                  <p className="img-text">{project.text}</p>
                </div>
              )
            })}
          </div>
        </div>
        <COntactMe></COntactMe>
      </div>
    </div>
  )
}

export default Portoflio
