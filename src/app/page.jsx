import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}> Hey, I'm <br/> Juan <br/>Ortiz-Acosta</h1>
        <p className={styles.shortDesc}>I'm a software engineer intern and a computer<br/> science student at Case Western Reserve University.</p>
      </div>
      <div className={styles.imageContainer}>
        
      </div>
    </div>
  )
}
