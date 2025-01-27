import React from 'react'
import COntactMe from '../../ContactMe/ContactMe'
import TypingEffectRewindSlow from '../../TypingEffect/TypingEffectRewindSlow'
import ServiceTypingEffect from '../../TypingEffect/ServiceTypingEffect'
import './ServicesPage.css'
const ServicesPage = () => {
  const texts = ['Services']
  const titles = [
    'Web/Web apps',
    'Web Developer',
    'Software Engineer',
    'Full-stack Developer',
  ]
  return (
    <div className="services-container">
      <header className="child-hierarchy App-header-services">
        <TypingEffectRewindSlow texts={texts} speed={150} />
        <span className="services-section-intro">
          …I deliver comprehensive solutions tailored to clients&apos; needs,
          ensuring each project is built with precision and scalability. My
          services cover everything from dynamic web applications to full-stack
          development, all backed by a commitment to quality and customer
          satisfaction
        </span>
      </header>
      <div className="background-image-container"></div>
      <div className="services-page-body-container">
        <section className="services-info-container">
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
                {index == 0 ? (
                  <span className="grid-border grid-info-style">
                    …I specialize in creating high-quality websites and web
                    applications tailored to your business needs. From
                    responsive design to seamless user experience, my solutions
                    are crafted with the latest technologies to ensure
                    scalability, security, and performance. Whether you&apos;re
                    launching a new website, enhancing an existing platform, or
                    building a custom web app, I am dedicated to delivering
                    results that drive success and growth for your business.
                  </span>
                ) : index == 1 ? (
                  <span className="grid-border grid-info-style">
                    …As a web developer with expertise in building dynamic and
                    responsive user interfaces, I specialize in React,
                    TypeScript, Redux, HTML, and CSS. And I am dedicated to
                    crafting intuitive and high-performance web applications
                    that provide exceptional user experiences. My skill set
                    allows me to efficiently develop scalable solutions,
                    ensuring that your web applications are not only visually
                    appealing but also robust and maintainable.
                  </span>
                ) : index == 2 ? (
                  <span className="grid-border grid-info-style">
                    …As a dedicated software engineer, I specialize in crafting
                    robust, scalable, and efficient software solutions tailored
                    to meet diverse business needs. My approach focuses on
                    understanding the unique challenges of each project,
                    delivering quality code, and collaborating seamlessly across
                    teams to ensure that every solution is both innovative and
                    reliable. Whether developing from the ground up or enhancing
                    existing systems, I strive to build software that empowers
                    users and drives business success.
                  </span>
                ) : (
                  <span className="grid-border grid-info-style">
                    …As a full-stack Developer, I specialize in building
                    dynamic, full-stack web applications using MongoDB,
                    Express.js, React, and Node.js. My expertise lies in
                    creating seamless, high-performance applications with
                    intuitive user interfaces and efficient back-end
                    architecture. From developing RESTful APIs to designing
                    responsive front-end components, I leverage the power of the
                    MERN stack to deliver scalable solutions that meet modern
                    web development needs.
                  </span>
                )}
              </>
            )
          })}
        </section>
        <COntactMe></COntactMe>
      </div>
    </div>
  )
}

export default ServicesPage
