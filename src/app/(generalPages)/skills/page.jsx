import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'

import cssIcon from './skill_icons/css.svg'
import flaskIcon from './skill_icons/flask.svg'
import html5Icon from './skill_icons/html5.svg'
import javaIcon from './skill_icons/java.svg'
import javascriptIcon from './skill_icons/javascript.svg'
import nextjsIcon from './skill_icons/next-dot-js.svg'
import pythonIcon from './skill_icons/python.svg'
import reactIcon from './skill_icons/react.svg'
import sqlIcon from './skill_icons/sql.svg'
import sqlalchemyIcon from './skill_icons/SQLAlchemy.svg'
import tailwindIcon from './skill_icons/tailwind.svg'
import viteIcon from './skill_icons/vite.svg'
import gitIcon from './skill_icons/git.svg'
import jsonIcon from './skill_icons/json.svg'
import cIcon from './skill_icons/c.svg'
import cppIcon from './skill_icons/cpp.svg'


export default function About() {
  const skillsKnown = [
    ['Python', pythonIcon],
    ['JavaScript', javascriptIcon],
    ['HTML', html5Icon],
    ['CSS', cssIcon],
    ['SQL', sqlIcon],
    ['JSON', jsonIcon],
    ['TailwindCSS', tailwindIcon],
    ['React.js', reactIcon],
    ['Vite.js', viteIcon],
    ['Next.js', nextjsIcon],
    ['React Native', reactIcon],
    ['SQLAlchemy', sqlalchemyIcon],
    ['Flask', flaskIcon],
    ['Git', gitIcon],
    ['Java', javaIcon],
  ]

  const skillsLearning = [
    ['C', cIcon],
    ['C++', cppIcon],
  ]
  return (
    <>
      <h1 className={`${styles.titles}`}>Skills</h1>
      <div className={`${styles.skillCardContainer}`}>
        {
          skillsKnown.map((skill, index) => 
            <div key={index} className={`${styles.skillCard}`}>
              <h3 className={`${styles.skillTitle}`}>{skill[0]}</h3>
              <Image 
                src={skill[1]}
                className={`${styles.skillSVG}`}
                alt={`${skill[0]} Icon`}
              />
            </div>)
        }
      </div>
      <h1 className={`${styles.titles}`}>Learning</h1>
      <div className={`${styles.skillCardContainer}`}>
        {
          skillsLearning.map((skill, index) => 
            <div key={index} className={`${styles.skillCard}`}>
              <h3 className={`${styles.skillTitle}`}>{skill[0]}</h3>
              <Image 
                src={skill[1]}
                className={`${styles.skillSVG}`}
                alt={`${skill[0]} Icon`}
              />
            </div>)
        }
      </div>
    </>
  )
}