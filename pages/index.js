import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    const skills = [
        { name: 'Java', level: 90 },
        { name: 'Kubernetes', level: 85 },
        { name: 'Docker', level: 88 },
        { name: 'JavaScript', level: 80 },
        { name: 'Node.js', level: 82 },
        { name: 'Python', level: 75 },
        { name: 'AWS', level: 78 },
        { name: 'Microservices', level: 85 }
    ]

    const technologies = [
        'Java', 'Spring Boot', 'Kubernetes', 'Docker', 'AWS', 
        'JavaScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
        'Redis', 'RabbitMQ', 'Git', 'Jenkins', 'Terraform'
    ]

    return (
        <>
            <Head>
                <title>Jade Ferreira | Backend Engineer</title>
                <meta name="description" content="Experienced Backend Engineer specializing in Java, Kubernetes, Docker, and scalable system design"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <h1 className={styles.heroTitle}>
                            Hello, I'm <span className={styles.gradientText}>Jade Ferreira</span>
                        </h1>
                        <h2 className={styles.heroSubtitle}>
                            Backend Engineer & System Architect
                        </h2>
                        <p className={styles.heroDescription}>
                            I build scalable, robust backend systems and microservices. 
                            Passionate about clean code, system design, and solving complex problems.
                        </p>
                        <div className={styles.heroButtons}>
                            <a href="#about" className={styles.primaryButton}>
                                Learn More
                            </a>
                            <a href="/projects" className={styles.secondaryButton}>
                                View Projects
                            </a>
                        </div>
                    </div>
                    <div className={styles.heroVisual}>
                        <div className={styles.codeBlock}>
                            <div className={styles.codeHeader}>
                                <div className={styles.codeDots}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span className={styles.codeTitle}>BackendService.java</span>
                            </div>
                            <div className={styles.codeContent}>
                                <pre>{`@RestController
@RequestMapping("/api/v1")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        return ResponseEntity.ok(userService.findById(id));
    }
    
    @PostMapping("/users")
    public ResponseEntity<User> createUser(@RequestBody UserRequest request) {
        User user = userService.create(request);
        return ResponseEntity.status(201).body(user);
    }
}`}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className={styles.about}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>About Me</h2>
                        <p className={styles.sectionSubtitle}>
                            Passionate about building reliable, scalable systems
                        </p>
                    </div>
                    <div className={styles.aboutContent}>
                        <div className={styles.aboutText}>
                            <p>
                                I'm a Backend Engineer with extensive experience in Java, microservices architecture, 
                                and cloud technologies. I specialize in building robust, scalable systems that can 
                                handle millions of requests while maintaining high performance and reliability.
                            </p>
                            <p>
                                My expertise includes system design, API development, containerization with Docker 
                                and Kubernetes, and working with various cloud platforms. I'm passionate about 
                                clean code, best practices, and mentoring other developers.
                            </p>
                            <div className={styles.stats}>
                                <div className={styles.stat}>
                                    <span className={styles.statNumber}>5+</span>
                                    <span className={styles.statLabel}>Years Experience</span>
                                </div>
                                <div className={styles.stat}>
                                    <span className={styles.statNumber}>50+</span>
                                    <span className={styles.statLabel}>Projects Completed</span>
                                </div>
                                <div className={styles.stat}>
                                    <span className={styles.statNumber}>10+</span>
                                    <span className={styles.statLabel}>Technologies</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.skillsContainer}>
                            <h3 className={styles.skillsTitle}>Core Skills</h3>
                            <div className={styles.skillsList}>
                                {skills.map((skill, index) => (
                                    <div key={index} className={styles.skillItem}>
                                        <div className={styles.skillInfo}>
                                            <span className={styles.skillName}>{skill.name}</span>
                                            <span className={styles.skillLevel}>{skill.level}%</span>
                                        </div>
                                        <div className={styles.skillBar}>
                                            <div 
                                                className={styles.skillProgress} 
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className={styles.technologies}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Technologies & Tools</h2>
                        <p className={styles.sectionSubtitle}>
                            Technologies I work with to build amazing solutions
                        </p>
                    </div>
                    <div className={styles.techGrid}>
                        {technologies.map((tech, index) => (
                            <div key={index} className={styles.techCard}>
                                <span className={styles.techName}>{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={styles.contact}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Let's Work Together</h2>
                        <p className={styles.sectionSubtitle}>
                            Ready to build something amazing? Let's connect!
                        </p>
                    </div>
                    <div className={styles.contactContent}>
                        <div className={styles.contactInfo}>
                            <h3>Get In Touch</h3>
                            <p>
                                I'm always interested in new opportunities and exciting projects. 
                                Whether you have a question or just want to say hi, feel free to reach out!
                            </p>
                            <div className={styles.contactLinks}>
                                <a href="mailto:jade@example.com" className={styles.contactLink}>
                                    📧 jade@example.com
                                </a>
                                <a href="https://linkedin.com/in/jade-ferreira" className={styles.contactLink}>
                                    💼 LinkedIn
                                </a>
                                <a href="https://github.com/jade-ferreira" className={styles.contactLink}>
                                    🐙 GitHub
                                </a>
                            </div>
                        </div>
                        <div className={styles.contactForm}>
                            <form>
                                <div className={styles.formGroup}>
                                    <input 
                                        type="text" 
                                        placeholder="Your Name" 
                                        className={styles.formInput}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <input 
                                        type="email" 
                                        placeholder="Your Email" 
                                        className={styles.formInput}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <textarea 
                                        placeholder="Your Message" 
                                        rows="5"
                                        className={styles.formInput}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className={styles.submitButton}>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
