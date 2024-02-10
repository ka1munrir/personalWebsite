import React from 'react'
import styles from './page.module.css'
import PDFViewer from './PDFViewer'

export default function Project_1() {
  return (
    <>
        {/* <h1 className={`${styles.text}`}>Project 1</h1> */}
        <PDFViewer />
        <h1 className={`${styles.text}`}>Bio</h1>
        <p className={`${styles.text}`}>Juan Ortiz-Acosta is a computer science student at the University of New Mexico 
        with extensive full stack software engineering training from Flatiron School. While he initially 
        decided to study electrical engineering, his interest in circuits turned into a passion for programming. 
        He has experience developing mobile and web applications using Python, JavaScript, Java, SQL, JSON, HTML, 
        CSS, and many web frameworks. He loves problem solving, collaborating, and learning new things. His 
        interests lie in technologies ranging from web, mobile, and app development to machine learning and 
        artificial intelligence.</p>
        
    </>
  )
}
