import Head from 'next/head'
import styles from '../styles/Education.module.css'

const Education = () => {
    const education = [
        {
            id: 1,
            institution: 'Universidade Federal de Juiz de Fora',
            degree: 'Master of Science in Software Engineering',
            duration: '2017 - 2019',
            location: 'Juiz de Fora, Brazil',
            description: 'Advanced studies in software engineering with focus on distributed systems, microservices architecture, and cloud computing.',
            highlights: [
                'Research in microservices architecture and containerization',
                'Thesis on "Scalable Backend Systems for High-Traffic Applications"',
                'Collaboration with Ericsson Canada for industry research',
                'Published 2 papers in international conferences',
                'GPA: 3.8/4.0'
            ],
            logo: '/ufjf.png',
            website: 'https://www.ufjf.br/',
            type: 'graduate'
        },
        {
            id: 2,
            institution: 'Universidade Federal Fluminense',
            degree: 'Bachelor of Telecommunications Engineering',
            duration: '2010 - 2016',
            location: 'Niterói, Brazil',
            description: 'Comprehensive engineering education with focus on telecommunications, networking, and software development.',
            highlights: [
                'Specialization in network protocols and distributed systems',
                'Final project on "IoT Communication Protocols"',
                'Internship at FinTech startup working on payment systems',
                'Active member of IEEE student chapter',
                'GPA: 3.6/4.0'
            ],
            logo: '/uff.png',
            website: 'https://www.uff.br/',
            type: 'undergraduate'
        },
        {
            id: 3,
            institution: 'National University of Ireland, Maynooth',
            degree: 'Exchange Program - Electronic Engineering',
            duration: '2013 - 2014',
            location: 'Maynooth, Ireland',
            description: 'International exchange program focusing on advanced electronic engineering and embedded systems.',
            highlights: [
                'Cross-cultural learning experience in international environment',
                'Advanced coursework in embedded systems and microcontrollers',
                'Research project on "Wireless Sensor Networks"',
                'Cultural exchange and language development',
                'Academic collaboration with international peers'
            ],
            logo: '/nuim.jpg',
            website: 'https://www.maynoothuniversity.ie/',
            type: 'exchange'
        }
    ]

    const certifications = [
        {
            name: 'AWS Certified Solutions Architect',
            issuer: 'Amazon Web Services',
            date: '2023',
            credential: 'SAA-C03',
            description: 'Demonstrates ability to design and deploy scalable systems on AWS'
        },
        {
            name: 'Certified Kubernetes Administrator',
            issuer: 'Cloud Native Computing Foundation',
            date: '2022',
            credential: 'CKA',
            description: 'Validates skills in Kubernetes cluster management and troubleshooting'
        },
        {
            name: 'Oracle Certified Java Developer',
            issuer: 'Oracle',
            date: '2021',
            credential: 'OCPJP 11',
            description: 'Certifies advanced Java programming skills and best practices'
        },
        {
            name: 'Docker Certified Associate',
            issuer: 'Docker Inc.',
            date: '2020',
            credential: 'DCA',
            description: 'Validates expertise in containerization and Docker ecosystem'
        }
    ]

    return (
        <>
            <Head>
                <title>Education | Jade Ferreira</title>
                <meta name="description" content="Educational background and certifications of Jade Ferreira, Backend Engineer"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={styles.educationPage}>
                <div className={styles.container}>
                    {/* Header */}
                    <div className={styles.header}>
                        <h1 className={styles.title}>Education</h1>
                        <p className={styles.subtitle}>
                            My academic journey and professional certifications
                        </p>
                    </div>

                    {/* Education Timeline */}
                    <div className={styles.educationSection}>
                        <h2 className={styles.sectionTitle}>Academic Background</h2>
                        <div className={styles.educationTimeline}>
                            {education.map((edu, index) => (
                                <div key={edu.id} className={styles.educationCard}>
                                    <div className={styles.cardHeader}>
                                        <div className={styles.logoContainer}>
                                            <div className={styles.logoPlaceholder}>
                                                <span className={styles.logoIcon}>🎓</span>
                                            </div>
                                        </div>
                                        <div className={styles.cardInfo}>
                                            <h3 className={styles.institution}>{edu.institution}</h3>
                                            <h4 className={styles.degree}>{edu.degree}</h4>
                                            <div className={styles.meta}>
                                                <span className={styles.duration}>{edu.duration}</span>
                                                <span className={styles.location}>{edu.location}</span>
                                                <span className={`${styles.type} ${styles[edu.type]}`}>
                                                    {edu.type === 'graduate' ? 'Graduate' : 
                                                     edu.type === 'undergraduate' ? 'Undergraduate' : 'Exchange'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.cardBody}>
                                        <p className={styles.description}>{edu.description}</p>
                                        
                                        <div className={styles.highlights}>
                                            <h5 className={styles.highlightsTitle}>Key Highlights:</h5>
                                            <ul className={styles.highlightsList}>
                                                {edu.highlights.map((highlight, idx) => (
                                                    <li key={idx} className={styles.highlight}>
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div className={styles.cardActions}>
                                            <a href={edu.website} className={styles.websiteLink} target="_blank" rel="noopener noreferrer">
                                                Visit Institution
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className={styles.certificationsSection}>
                        <h2 className={styles.sectionTitle}>Professional Certifications</h2>
                        <div className={styles.certificationsGrid}>
                            {certifications.map((cert, index) => (
                                <div key={index} className={styles.certCard}>
                                    <div className={styles.certHeader}>
                                        <div className={styles.certIcon}>
                                            <span className={styles.icon}>🏆</span>
                                        </div>
                                        <div className={styles.certMeta}>
                                            <span className={styles.certDate}>{cert.date}</span>
                                            <span className={styles.certCredential}>{cert.credential}</span>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.certBody}>
                                        <h3 className={styles.certName}>{cert.name}</h3>
                                        <p className={styles.certIssuer}>{cert.issuer}</p>
                                        <p className={styles.certDescription}>{cert.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills Acquired */}
                    <div className={styles.skillsSection}>
                        <h2 className={styles.sectionTitle}>Skills Acquired Through Education</h2>
                        <div className={styles.skillsGrid}>
                            <div className={styles.skillCategory}>
                                <h4 className={styles.categoryTitle}>Software Engineering</h4>
                                <ul className={styles.skillsList}>
                                    <li>System Design & Architecture</li>
                                    <li>Microservices Development</li>
                                    <li>API Design & Development</li>
                                    <li>Database Design & Optimization</li>
                                    <li>Testing & Quality Assurance</li>
                                </ul>
                            </div>
                            
                            <div className={styles.skillCategory}>
                                <h4 className={styles.categoryTitle}>Cloud & DevOps</h4>
                                <ul className={styles.skillsList}>
                                    <li>Containerization (Docker)</li>
                                    <li>Orchestration (Kubernetes)</li>
                                    <li>Cloud Platforms (AWS, Azure)</li>
                                    <li>CI/CD Pipeline Development</li>
                                    <li>Infrastructure as Code</li>
                                </ul>
                            </div>
                            
                            <div className={styles.skillCategory}>
                                <h4 className={styles.categoryTitle}>Programming Languages</h4>
                                <ul className={styles.skillsList}>
                                    <li>Java (Advanced)</li>
                                    <li>JavaScript/Node.js</li>
                                    <li>Python</li>
                                    <li>Go</li>
                                    <li>SQL</li>
                                </ul>
                            </div>
                            
                            <div className={styles.skillCategory}>
                                <h4 className={styles.categoryTitle}>Research & Analysis</h4>
                                <ul className={styles.skillsList}>
                                    <li>Academic Research</li>
                                    <li>Technical Writing</li>
                                    <li>Data Analysis</li>
                                    <li>Problem Solving</li>
                                    <li>Project Management</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education