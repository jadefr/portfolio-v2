import styles from "../styles/Home.module.css";
import Head from "next/head";

const Education = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Education</title>
                <meta name="description" content="Computer Science Education"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <h2 className={styles.subtitle}>Education</h2>
            <main className={styles.main}>
                <p className="text-center">Deleniti illum ipsam saepe. Ab asperiores cumque debitis ea esse et magnam.</p>
            </main>
        </div>
    )
}

export default Education