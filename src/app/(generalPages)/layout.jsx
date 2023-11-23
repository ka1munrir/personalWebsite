import { Inter } from 'next/font/google'
import Link from 'next/link'
import grid from '../webGrid.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function GenLayout({ children }) {
  return (
      <div className={`${grid.content}`}>
        {children}
      </div>
  )
}
