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
        decided to study electrical engineering at Case Western Reserve University, his interest in circuits 
        turned into a passion for programming. He gained experience in Python, JavaScript, Java, SQL, JSON, 
        HTML, CSS, and many web frameworks in Flatiron School where he built many web applications and a 
        mobile application, and he learned Java during his time at Case Western Reserve University. He loves 
        problem solving, collaborating, and learning new things of which he is currently learning Japanese, C, 
        C++, drawing, philosophy, and piano. Juan&#39;s current interests lie in technologies ranging from 
        web, mobile, and computer app development to machine learning and artificial intelligence. He is 
        currently working on a Python desktop application to expand his knowledge of Python and delve into 
        his interest of computer app development.</p>
        
    </>
  )
}
