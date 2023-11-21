'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from './layout.module.css'

export default function DocNavBarElements() {
  const router = useRouter()
  return (
    <>
      <div className={styles.docsLinkContainer} onClick={() => router.push('/docs/python')}>
          <Link href={'/docs/python'}>Python</Link>
        </div>
        <div className={styles.docsLinkContainer} onClick={() => router.push('/docs/java')}>
          <Link href={'/docs/java'}>Java</Link>
        </div>
        <div className={styles.docsLinkContainer} onClick={() => router.push('/docs/javascript')}>
          <Link href={'/docs/javascript'}>JavaScript</Link>
        </div>
        <div className={styles.docsLinkContainer} onClick={() => router.push('/docs/sql')}>
          <Link href={'/docs/sql'}>SQL</Link>
        </div>
        <div className={styles.docsLinkContainer} onClick={() => router.push('/docs/react')}>
          <Link href={'/docs/react'}>React</Link>
        </div>
    </>
  )
}
