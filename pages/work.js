import styles from "../styles/Home.module.css";
import Head from "next/head";

const Work = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Work</title>
                <meta name="description" content="Work Experience Java Web Developer"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <h2 className={styles.subtitle}>Work Experience</h2>
            <main className={styles.main}>
                 <p className="text-center">Deleniti illum ipsam saepe. Ab asperiores cumque debitis ea esse et magnam.</p>
            </main>
        </div>
    )
}

export default Work