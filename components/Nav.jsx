import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => {
    return (
            <nav className="nav p-3 border-bottom align-items-center">
                <Link href="/" passHref>
                    <a className={styles.a}><h2 className="pointer">Jade Ferreira</h2></a>
                </Link>

                <Link href="/work" passHref>
                    <a className={styles.a}><p className="ms-5 pointer lead my-auto">Work</p></a>
                </Link>

                <Link href="/education" passHref>
                    <a className={styles.a}><p className="ms-5 pointer lead my-auto">Education</p></a>
                </Link>

                <Link href="/projects" passHref>
                    <a className={styles.a}><p className="ms-5 pointer lead my-auto">Projects</p></a>
                </Link>
            </nav>
    )
}

export default Nav