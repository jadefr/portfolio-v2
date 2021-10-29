import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";

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

                <div className={styles.card}>
                    <a href="https://inatel.br/" className={styles.a_work} target="_blank" rel="noopener noreferrer">
                        <h4>Universidade Federal de Juiz de Fora</h4>
                    </a>
                    <h5>Master of Science - Software Engineer</h5>
                    <h6>2017 - 2019</h6>
                </div>

                <div className={styles.card}>
                    <a href="https://tentaculo.digital/" className={styles.a_work} target="_blank" rel="noopener noreferrer">
                        <h4>Universidade Federal Fluminense</h4>
                    </a>
                    <h5>Telecommunications Engineering</h5>
                    <h6>2010 - 2016</h6>
                </div>

                <div className={styles.card}>
                    <a href="https://hicss.hawaii.edu/" className={styles.a_work} target="_blank" rel="noopener noreferrer">
                        <h4>National University of Ireland, Maynooth</h4>
                    </a>
                    <h5>Electronic Engineering</h5>
                    <h6>2013 - 2014</h6>
                </div>

            </main>
        </div>
    )
}

export default Education