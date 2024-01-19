import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function ENGL2210_Layout({ children }) {
  return (
      <div className={``}>
        <nav className={`${styles.nav}`}>
            <div className={`${styles.linkContainer}`}>
                <Link href={`/ENGL2210/project-1`}>Project 1</Link>
            </div>
            <div className={`${styles.linkContainer}`}>
                <Link href={`/ENGL2210/project-2`}>Project 2</Link>
            </div>
            <div className={`${styles.linkContainer}`}>
                <Link href={`/ENGL2210/project-3`}>Project 3</Link>
            </div>
        </nav>
        {children}
      </div>
  )
}
