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
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h4>Java 8, Spring Boot, REST API, Spring Batch, MySQL</h4>
                        <a href="https://github.com/jadefr/cidades-api" className={styles.a_section} target="_blank"
                           rel="noopener noreferrer">
                            <p>cidades-api</p>
                        </a>
                        <a href="https://github.com/jadefr/stock-quote-manager" className={styles.a_section}
                           target="_blank"
                           rel="noopener noreferrer">
                            <p>stock-quote-manager</p>
                        </a>
                        <a href="https://github.com/jadefr/batch-basics" className={styles.a_section} target="_blank"
                           rel="noopener noreferrer">
                            <p>batch-basics</p>
                        </a>
                        <a href="https://github.com/jadefr/java-streams-basics" className={styles.a_section}
                           target="_blank"
                           rel="noopener noreferrer">
                            <p>java-streams-basics</p>
                        </a>
                        <a href="https://github.com/jadefr/crud-basics" className={styles.a_section} target="_blank"
                           rel="noopener noreferrer">
                            <p>crud-basics</p>
                        </a>
                    </div>

                    <div className={styles.card}>
                        <h4>Algorithms & Data Structures, Java</h4>
                        <a href="https://github.com/jadefr/algorithms-and-data-structures" className={styles.a_section}
                           target="_blank"
                           rel="noopener noreferrer">
                            <p>algorithms-and-data-structures</p>
                        </a>
                        <a href="https://github.com/jadefr/estruturas-de-dados" className={styles.a_section}
                           target="_blank"
                           rel="noopener noreferrer">
                            <p>estruturas-de-dados</p>
                        </a>
                        <a href="https://github.com/jadefr/algoritmos" className={styles.a_section} target="_blank"
                           rel="noopener noreferrer">
                            <p>algoritmos</p>
                        </a>
                        <a href="https://github.com/jadefr/binary-search-tree" className={styles.a_section}
                           target="_blank"
                           rel="noopener noreferrer">
                            <p>binary-search-tree</p>
                        </a>
                        <a href="https://github.com/jadefr/stack" className={styles.a_section} target="_blank"
                           rel="noopener noreferrer">
                            <p>stack</p>
                        </a>
                        <a href="https://github.com/jadefr/queue" className={styles.a_section} target="_blank"
                           rel="noopener noreferrer">
                            <p>queue</p>
                        </a>
                        <a href="https://github.com/jadefr/linked-list" className={styles.a_section} target="_blank"
                           rel="noopener noreferrer">
                            <p>linked-list</p>
                        </a>
                    </div>

                    <div className={styles.card}>
                        <h4>Vue.js, Vuetify, Sass</h4>

                            <p>distinctio (
                                <a href="https://github.com/jadefr/distinctio" className={styles.a_section} target="_blank" rel="noopener noreferrer">
                                    repo
                                </a>,
                                <a href="https://distinto.io/" className={styles.a_section} target="_blank" rel="noopener noreferrer">
                                    website
                                </a>
                                    )</p>

                        <a href="https://github.com/jadefr/landing-page-first" className={styles.a_section} target="_blank"
                           rel="noopener noreferrer">
                            <p>landing-page-first</p>
                        </a>
                        <a href="https://github.com/jadefr/quiz" className={styles.a_section} target="_blank"
                           rel="noopener noreferrer">
                            <p>quiz</p>
                        </a>
                    </div>

                    <div className={styles.card}>
                        <h4>Node.js, Next.js</h4>
                        <a href="https://github.com/jadefr/node-crud-mysql" className={styles.a_section} target="_blank"
                           rel="noopener noreferrer">
                            <p>node-crud-mysql</p>
                        </a>
                        <a href="https://github.com/jadefr/portfolio-v2" className={styles.a_section} target="_blank"
                           rel="noopener noreferrer">
                            <p>portfolio-v2</p>
                        </a>
                    </div>

                    <div className={styles.card}>
                        <h4>Research</h4>
                        <a href="https://github.com/jadefr/semantic-iot" className={styles.a_section} target="_blank"
                           rel="noopener noreferrer">
                            <p>semantic-iot</p>
                        </a>
                        <a href="https://github.com/jadefr/iot-data-retriever" className={styles.a_section} target="_blank"
                           rel="noopener noreferrer">
                            <p>iot-data-retriever</p>
                        </a>
                        <a href="https://github.com/pgcc/e-seco" className={styles.a_section} target="_blank"
                           rel="noopener noreferrer">
                            <p>e-seco</p>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Projects