import React from 'react'
import styles from './PDFViewer.module.css'

export default function PDFViewer() {
  return (
    <div className={`${styles.pdfContainer}`}>
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vQuGBiaTR9hGimK2ZMvQVmZjG7lG2Ohoc03jjcVhmb5EtACRWvAfnJcam4YnG_8GFDE01v8clDM93Tz/pub?embedded=true"
        className={`${styles.pdf}`}></iframe>
    </div>
  )
}
