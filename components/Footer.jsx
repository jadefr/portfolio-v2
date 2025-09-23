import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h3 className={styles.footerTitle}>Jade Ferreira</h3>
                    <p className={styles.footerDescription}>
                        Backend Engineer passionate about building scalable systems and solving complex problems.
                    </p>
                </div>
                
                <div className={styles.footerSection}>
                    <h4 className={styles.footerSubtitle}>Quick Links</h4>
                    <ul className={styles.footerLinks}>
                        <li><a href="#about">About</a></li>
                        <li><a href="/work">Experience</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/education">Education</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                
                <div className={styles.footerSection}>
                    <h4 className={styles.footerSubtitle}>Connect</h4>
                    <div className={styles.socialLinks}>
                        <a href="https://linkedin.com/in/jade-ferreira" className={styles.socialLink}>
                            LinkedIn
                        </a>
                        <a href="https://github.com/jade-ferreira" className={styles.socialLink}>
                            GitHub
                        </a>
                        <a href="mailto:jade@example.com" className={styles.socialLink}>
                            Email
                        </a>
                    </div>
                </div>
            </div>
            
            <div className={styles.footerBottom}>
                <p className={styles.copyright}>
                    © 2024 Jade Ferreira. All rights reserved.
                </p>
                <p className={styles.madeWith}>
                    Built with Next.js and ❤️ (and AI!)
                </p>
            </div>
        </footer>
    )
}

export default Footer