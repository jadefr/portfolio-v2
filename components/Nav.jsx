import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Nav.module.css'

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logo}>
                    <div>
                        <span className={styles.logoText}>Jade Ferreira</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className={styles.navMenu}>
                    <Link href="/#about" className={styles.navLink}>
                        About
                    </Link>
                    <Link href="/work" className={styles.navLink}>
                        Experience
                    </Link>
                    <Link href="/projects" className={styles.navLink}>
                        Projects
                    </Link>
                    <Link href="/education" className={styles.navLink}>
                        Education
                    </Link>
                    <Link href="/#contact" className={styles.navLink}>
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className={styles.menuButton}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <Link href="/#about" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
                    About
                </Link>
                <Link href="/work" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
                    Experience
                </Link>
                <Link href="/projects" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
                    Projects
                </Link>
                <Link href="/education" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
                    Education
                </Link>
                <Link href="/#contact" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
                    Contact
                </Link>
            </div>
        </nav>
    )
}

export default Nav