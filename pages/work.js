import Head from 'next/head'
import styles from '../styles/Work.module.css'

export default function Work() {
    const experiences = [
        {
            id: 1,
            company: 'TechCorp Solutions',
            position: 'Senior Backend Engineer',
            duration: '2022 - Present',
            location: 'Remote',
            description: 'Leading backend development for microservices architecture serving 10M+ users.',
            achievements: [
                'Designed and implemented scalable microservices architecture reducing response time by 40%',
                'Led migration from monolithic to microservices architecture for 5 core services',
                'Mentored 3 junior developers and established coding standards and best practices',
                'Implemented CI/CD pipelines using Kubernetes and Docker, reducing deployment time by 60%'
            ],
            technologies: ['Java', 'Spring Boot', 'Kubernetes', 'Docker', 'AWS', 'PostgreSQL', 'Redis'],
            type: 'full-time'
        },
        {
            id: 2,
            company: 'InnovateLabs',
            position: 'Backend Developer',
            duration: '2020 - 2022',
            location: 'São Paulo, Brazil',
            description: 'Developed RESTful APIs and backend services for fintech applications.',
            achievements: [
                'Built high-performance APIs handling 1M+ transactions daily',
                'Implemented real-time data processing using Apache Kafka and Redis',
                'Optimized database queries resulting in 50% improvement in response times',
                'Collaborated with frontend team to design API specifications'
            ],
            technologies: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'Kafka', 'Docker', 'Jenkins'],
            type: 'full-time'
        },
        {
            id: 3,
            company: 'StartupXYZ',
            position: 'Full Stack Developer',
            duration: '2019 - 2020',
            location: 'Remote',
            description: 'Full-stack development for a SaaS platform serving small businesses.',
            achievements: [
                'Developed complete backend infrastructure from scratch',
                'Implemented user authentication and authorization system',
                'Built real-time notification system using WebSockets',
                'Designed and optimized database schema for multi-tenant architecture'
            ],
            technologies: ['Node.js', 'Express', 'MongoDB', 'JavaScript', 'AWS', 'Socket.io'],
            type: 'full-time'
        },
        {
            id: 4,
            company: 'Freelance Projects',
            position: 'Backend Consultant',
            duration: '2018 - 2019',
            location: 'Various',
            description: 'Provided backend development services for various clients.',
            achievements: [
                'Developed custom APIs for e-commerce platforms',
                'Implemented payment gateway integrations',
                'Built data processing pipelines for analytics platforms',
                'Provided technical consultation for system architecture decisions'
            ],
            technologies: ['Java', 'Python', 'Django', 'PostgreSQL', 'AWS', 'Docker'],
            type: 'freelance'
        }
    ]

    const certifications = [
        {
            name: 'AWS Certified Solutions Architect',
            issuer: 'Amazon Web Services',
            date: '2023',
            credential: 'SAA-C03'
        },
        {
            name: 'Certified Kubernetes Administrator',
            issuer: 'Cloud Native Computing Foundation',
            date: '2022',
            credential: 'CKA'
        },
        {
            name: 'Oracle Certified Java Developer',
            issuer: 'Oracle',
            date: '2021',
            credential: 'OCPJP 11'
        }
    ]

    return (
        <>
            <Head>
                <title>Work Experience | Jade Ferreira</title>
                <meta name="description" content="Professional work experience and achievements of Jade Ferreira, Backend Engineer"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={styles.workPage}>
                <div className={styles.container}>
                    {/* Header */}
                    <div className={styles.header}>
                        <h1 className={styles.title}>Work Experience</h1>
                        <p className={styles.subtitle}>
                            My professional journey in backend engineering and system architecture
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className={styles.timeline}>
                        {experiences.map((exp, index) => (
                            <div key={exp.id} className={styles.timelineItem}>
                                <div className={styles.timelineMarker}>
                                    <div className={styles.markerDot}></div>
                                    {index !== experiences.length - 1 && <div className={styles.markerLine}></div>}
                                </div>
                                <div className={styles.timelineContent}>
                                    <div className={styles.experienceCard}>
                                        <div className={styles.cardHeader}>
                                            <div className={styles.companyInfo}>
                                                <h3 className={styles.companyName}>{exp.company}</h3>
                                                <h4 className={styles.position}>{exp.position}</h4>
                                            </div>
                                            <div className={styles.metaInfo}>
                                                <span className={styles.duration}>{exp.duration}</span>
                                                <span className={styles.location}>{exp.location}</span>
                                                <span className={`${styles.type} ${styles[exp.type]}`}>{exp.type}</span>
                                            </div>
                                        </div>
                                        
                                        <p className={styles.description}>{exp.description}</p>
                                        
                                        <div className={styles.achievements}>
                                            <h5 className={styles.achievementsTitle}>Key Achievements:</h5>
                                            <ul className={styles.achievementsList}>
                                                {exp.achievements.map((achievement, idx) => (
                                                    <li key={idx} className={styles.achievement}>
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div className={styles.technologies}>
                                            <h5 className={styles.techTitle}>Technologies Used:</h5>
                                            <div className={styles.techTags}>
                                                {exp.technologies.map((tech, idx) => (
                                                    <span key={idx} className={styles.techTag}>
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div className={styles.certifications}>
                        <h2 className={styles.sectionTitle}>Certifications</h2>
                        <div className={styles.certGrid}>
                            {certifications.map((cert, index) => (
                                <div key={index} className={styles.certCard}>
                                    <div className={styles.certHeader}>
                                        <h3 className={styles.certName}>{cert.name}</h3>
                                        <span className={styles.certDate}>{cert.date}</span>
                                    </div>
                                    <p className={styles.certIssuer}>{cert.issuer}</p>
                                    <span className={styles.certCredential}>{cert.credential}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}