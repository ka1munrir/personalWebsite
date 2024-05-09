import React from 'react'
import styles from './page.module.css'

export default function Project_3() {
  return (
    <>
        <div className={`${styles.video_container}`}>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/MtldEgywKbg?si=BF6k9ILG62khrvZd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className={`${styles.video_player}`}></iframe>
        </div>
    </>
  )
}
