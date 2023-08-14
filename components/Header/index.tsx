import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

export default function index() {
  return (
    <header className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}><Link href="/tes">Home</Link></li>
        <li className={styles.item}><Link href="/blog">Blog</Link></li>
        <li className={styles.item}><Link href="">Users</Link></li>
      </ul>
    </header>
  )
}
