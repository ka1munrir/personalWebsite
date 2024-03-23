import React from 'react'
import styles from './PDFViewer.module.css'

export default function ResponseLetterPDF() {
  return (
    <div className={`${styles.pdfContainer}`}>
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vRtwB22r263zqibwsfNB53BUBovr7W4l4D5PA0qhajNxQetLlUglVlW_fSH0GhW9ZOv6qoTFzcy1ooh/pub?embedded=true"
        className={`${styles.pdf}`}></iframe>
    </div>
  )
}
