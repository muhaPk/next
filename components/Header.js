import Link from "next/link"
import styles from "@/styles/Header.module.scss";

export default function Header() {
  return (
      <>
          <header className={styles.header}>
              header
          </header>
          <nav className={styles.nav}>
              <Link href="/">Main</Link>
              <Link href="/post">Posts</Link>
              <Link href="/about">About</Link>
          </nav>
      </>

  )
}
