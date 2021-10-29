import styles from "../styles/Home.module.css";
import Head from "next/head";

const Projects = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Projects</title>
                <meta name="description" content="Full Stack Projects"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <h2 className={styles.subtitle}>Projects</h2>
            <main className={styles.main}>
                <p className="text-center">Deleniti illum ipsam saepe. Ab asperiores cumque debitis ea esse et magnam.</p>
            </main>
        </div>
    )
}

export default Projects