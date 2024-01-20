import { Inter } from 'next/font/google'
import Link from 'next/link'

import ENGR2210Nav from './ENGL2210Nav'

const inter = Inter({ subsets: ['latin'] })

export default function ENGL2210_Layout({ children }) {
  return (
      <div className={``}>
        <ENGR2210Nav />
        {children}
      </div>
  )
}
