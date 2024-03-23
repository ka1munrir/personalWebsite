import React from 'react'
import styles from './page.module.css'

import ResponseLetterPDF from './ResponseLetterPDF'
import ComplaintLetterPDF from './ComplaintLetterPDF'

export default function Project_2() {
  return (
    <>
        <h2 className={`${styles.text}`}>Response Letter</h2>
        <ResponseLetterPDF />
        <h2 className={`${styles.text}`}>Complaint Letter</h2>
        <ComplaintLetterPDF />
    </>
  )
}
