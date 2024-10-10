# Portfolio
Personal portoflio website

## Table of Contents

- [Intro](#Intro)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
  
## Intro
This is Benjamin's portfolio website, including Home, About, Portfolio, Services, Resume, Contact pages. With nearly four years of web development experience, I will show you my previous working experience, previous formal projects and some intuitive client-side eye-catching special effects to introduce myself.

The whole project was created and finished with React/Typescript, adopted with client-server separation architectural design and deployed with Heroku.

## Project Structure
```
.
├── Procfile
├── README.md
├── client
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── images
│   │   │   ├── Aubot
│   │   │   │   ├── aubot-banner.jpg
│   │   │   │   ├── aubot-course-description.jpg
│   │   │   │   └── aubot-test-templates.jpg
│   │   │   ├── Icons
│   │   │   │   ├── icons8-github (2).svg
│   │   │   │   ├── icons8-gmail.svg
│   │   │   │   └── icons8-linkedin.svg
│   │   │   ├── KingClothing
│   │   │   │   ├── KC-1.jpg
│   │   │   │   ├── KC-2.jpg
│   │   │   │   └── KC-3.jpg
│   │   │   ├── MusicEvent
│   │   │   │   ├── ME-1.jpg
│   │   │   │   ├── ME-2.jpg
│   │   │   │   ├── ME-3.jpg
│   │   │   │   ├── ME-4.jpg
│   │   │   │   └── ME-5.jpg
│   │   │   ├── Natours
│   │   │   │   ├── NA-home-page.jpg
│   │   │   │   ├── NA-real-time-map.jpg
│   │   │   │   ├── NA-tour-detail.jpg
│   │   │   │   └── NA-user-profile.jpg
│   │   │   ├── ScienceIsland
│   │   │   │   ├── SI-game-login.jpg
│   │   │   │   ├── SI-game-user.jpg
│   │   │   │   └── SI-teacher-portal.jpg
│   │   │   ├── Selfie
│   │   │   │   └── selfie.jpg
│   │   │   ├── code-line.jpg
│   │   │   └── icons8-menu-50.png
│   │   └── index.html
│   ├── sample.env
│   ├── src
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── axiosApi
│   │   │   └── app.js
│   │   ├── component
│   │   │   ├── ContactMe
│   │   │   │   ├── ContactMe.css
│   │   │   │   └── ContactMe.tsx
│   │   │   ├── Map
│   │   │   │   └── GoogleJavascriptMaps.tsx
│   │   │   ├── TypingEffect
│   │   │   │   ├── ServiceTypingEffect.css
│   │   │   │   ├── ServiceTypingEffect.tsx
│   │   │   │   ├── TypeingEffect.css
│   │   │   │   ├── TypingEffect.tsx
│   │   │   │   ├── TypingEffectRewind.css
│   │   │   │   ├── TypingEffectRewind.tsx
│   │   │   │   ├── TypingEffectRewindSlow.css
│   │   │   │   ├── TypingEffectRewindSlow.tsx
│   │   │   │   └── typeInterface
│   │   │   │       ├── PropsTypeTypingEffect.ts
│   │   │   │       └── PropsTypeTypingEffectRewind.ts
│   │   │   └── route
│   │   │       ├── AboutPage
│   │   │       │   ├── AboutPage.css
│   │   │       │   └── AboutPage.tsx
│   │   │       ├── ContactPage
│   │   │       │   ├── ContactPage.css
│   │   │       │   └── ContactPage.tsx
│   │   │       ├── HomePage
│   │   │       │   ├── homePage.css
│   │   │       │   └── homePage.tsx
│   │   │       ├── NavigationBar
│   │   │       │   ├── NavigationBar.css
│   │   │       │   └── NavigationBar.tsx
│   │   │       ├── Portoflio
│   │   │       │   ├── Portoflio.css
│   │   │       │   └── Portoflio.tsx
│   │   │       ├── Resume
│   │   │       │   ├── Resume.css
│   │   │       │   └── Resume.tsx
│   │   │       └── ServicesPage
│   │   │           ├── ServicesPage.css
│   │   │           └── ServicesPage.tsx
│   │   ├── index.css
│   │   └── index.js
│   └── tsconfig.json
├── package.json
└── server
    ├── package-lock.json
    ├── package.json
    └── src
        ├── controller
        │   └── homeController.js
        ├── index.js
        ├── routes
        │   ├── homeRouter.js
        │   └── index.js
        ├── tests
        │   └── homecontroller.test.js
        └── utils
            └── sendEmail.js

```
## Installation

### Project
1. Clone this project in your local environment via http link or ssh
   
2. Open cloned project with code editor (vsCode for example)

3. Create two terminals in the code editor and enter client/ and server/ directory in each terminal respectively

4. Paste the command below into two terminals 
```
npm install
```

## Usage

Once installation is finished, use command ```npm run start``` in each terminal to start the project.
