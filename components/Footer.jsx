import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_text}>
                Developed by
                <span className={styles.span}>Jade Ferreira</span>
            </div>

            <div className={styles.footer_icons}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width={20} height={20}/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            </div>

        </footer>
    )
}

export default Footer