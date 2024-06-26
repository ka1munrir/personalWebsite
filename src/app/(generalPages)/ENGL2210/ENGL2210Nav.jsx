'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import styles from './ENGL2210Nav.module.css'

export default function ENGL2210Nav() {
  const route = useRouter();
  return (
    <nav className={`${styles.nav}`}>
      <div onClick={() => route.push(`/ENGL2210/project-1`)} className={`${styles.linkContainer}`}>
        <Link href={`/ENGL2210/project-1`}>Project 1</Link>
      </div>
      <div onClick={() => route.push(`/ENGL2210/project-2`)} className={`${styles.linkContainer}`}>
        <Link href={`/ENGL2210/project-2`}>Project 2</Link>
      </div>
      <div onClick={() => route.push(`/ENGL2210/project-3`)} className={`${styles.linkContainer}`}>
        <Link href={`/ENGL2210/project-3`}>Project 3</Link>
      </div>
      <div onClick={() => route.push(`/ENGL2210/SLO-Reflections`)} className={`${styles.linkContainer}`}>
        <Link href={`/ENGL2210/project-3`}>SLO Reflections</Link>
      </div>
    </nav>
  )
}
