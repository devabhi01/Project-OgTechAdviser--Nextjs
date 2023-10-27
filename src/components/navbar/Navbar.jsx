import Link from 'next/link'
import styles from './navbar.module.css'
import AuthLink from '../authLink/AuthLink'
import ThemeToggle from '../themeToggle/ThemeToggle'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>OgTechAdviser</div>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <AuthLink />
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Navbar