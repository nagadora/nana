// components/Header.js
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/layout.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/assets/logo.png" alt="ロゴ" width={100} height={100} />
      </div>
      <h1>かわいいテンプレート</h1>
      <nav>
        <ul className={styles.navList}>
          <li><Link href="/">ホーム</Link></li>
          <li><Link href="/about">このサイトについて</Link></li>
        </ul>
      </nav>
    </header>
  )
}
