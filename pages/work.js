import Image from 'next/image'
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

                <div className={styles.card_container}>

                    <div className={styles.card}>
                        <a href="https://inatel.br/" className={styles.a_section} target="_blank"
                           rel="noopener noreferrer">
                            <h4>Instituto Nacional de Telecomunicações</h4>
                        </a>
                        <h5>Java Developer</h5>
                        <h6>Oct 2020 - Date</h6>
                        <p>Outsourced to
                            <a href="https://www.ericsson.ca/en" className={styles.a_section} target="_blank"
                               rel="noopener noreferrer">
                                <span className={styles.eric_span}>Ericsson, Canada</span>
                            </a>
                        </p>
                    </div>

                    <div className={styles.card}>
                        <a href="https://tentaculo.digital/" className={styles.a_section} target="_blank"
                           rel="noopener noreferrer">
                            <h4>Tentáculo.Digital</h4>
                        </a>
                        <h5>Java Developer</h5>
                        <h6>June 2020 - Sept 2020</h6>
                        <p>Outsourced to a FinTech</p>
                    </div>

                    <div className={styles.card}>
                        <a href="https://hicss.hawaii.edu/" className={styles.a_section} target="_blank"
                           rel="noopener noreferrer">
                            <h4>HICSS</h4>
                        </a>
                        <h5>Guest Reviewer</h5>
                        <h6>July 2019 - Aug 2019</h6>
                    </div>

                    <div className={styles.card}>
                        <a href="https://www.huawei.com/br/" className={styles.a_section} target="_blank"
                           rel="noopener noreferrer">
                            <h4>Huawei Technologies</h4>
                        </a>
                        <h5>Microwave Engineer - Internship</h5>
                        <h6>Mar 2015 - Aug 2016</h6>
                    </div>

                </div>

            </main>
        </div>
    )
}

export default Work