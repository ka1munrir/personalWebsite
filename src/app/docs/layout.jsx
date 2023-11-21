import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from './layout.module.css'
import grid from '../webGrid.module.css'
import DocNavBarElements from './DocNavBarElements'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Juan\'s Docs',
  description: 'Documentation Juan cooked up from his own learning and interpretation of code.',
}

export default function DocsLayout({ children }) {
  return (
    <>
      <nav className={`${styles.docsHeader} ${grid.docsHeader}`}>
        <DocNavBarElements />
      </nav>
      <div className={`${styles.docsBody} ${grid.content}`}>
        {children}
      </div>
    </>
  )
}
