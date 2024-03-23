import React from 'react'
import styles from './PDFViewer.module.css'

export default function ComplaintLetterPDF() {
  return (
    <div className={`${styles.pdfContainer}`}>
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vRxnAK4DtjtSpzVFOJJD0raImMwi1BEDpQvQ5FdV5gxRLnK7oAvo2mmyrjCXAH5aCKZx4CTq3e1Igl9/pub?embedded=true"
        className={`${styles.pdf}`}></iframe>
    </div>
  )
}
