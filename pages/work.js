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
                        <Image src="/inatel.jpg" alt="Inatel Logo" width={238.5} height={123} />
                        <div className={styles.text_block}>
                            <a href="https://inatel.br/" className={styles.a_work} target="_blank" rel="noopener noreferrer">
                                <h4 className={styles.h4}>Instituto Nacional de Telecomunicações</h4>
                            </a>
                            <h5>Java Developer</h5>
                            <h6>Oct 2020 - Date</h6>
                            <p>Outsourced to Ericsson, Canada</p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.image}>
                            <Image src="/tentaculo.png" alt="Tentaculo Digital Logo" width={100} height={100} />
                        </div>
                        <div className={styles.text_block}>
                            <a href="https://tentaculo.digital/" className={styles.a_work} target="_blank" rel="noopener noreferrer">
                                <h4>Tentáculo.Digital</h4>
                            </a>
                            <h5>Java Developer</h5>
                            <h6>Jun 2020 - Oct 2020</h6>
                            <p>Outsourced to a FinTech</p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.image}>
                            <Image src="/hicss.jpg" alt="HICSS Logo" width={150} height={75} />
                        </div>
                        <div className={styles.text_block}>
                            <a href="https://hicss.hawaii.edu/" className={styles.a_work} target="_blank" rel="noopener noreferrer">
                                <h4>HICSS</h4>
                            </a>
                            <h5>Guest Reviewer</h5>
                            <h6>Jul 2019 - Aug 2019</h6>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.image}>
                            <Image src="/huawei.png" alt="Huawei Logo" width={100} height={100} />
                        </div>
                        <div className={styles.text_block}>
                            <a href="https://www.huawei.com/br/" className={styles.a_work} target="_blank" rel="noopener noreferrer">
                                <h4>Huawei Technologies</h4>
                            </a>
                            <h5>Microwave Engineer - Internship</h5>
                            <h6>Mar 2015 - Aug 2016</h6>
                        </div>
                    </div>

                </div>

            </main>
        </div>
    )
}

export default Work