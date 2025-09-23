import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Projects.module.css'

export default function Projects() {
    const [selectedFilter, setSelectedFilter] = useState('all')

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Microservices Platform',
            description: 'A scalable e-commerce platform built with microservices architecture, handling 100K+ concurrent users with high availability and fault tolerance.',
            longDescription: 'This project involved designing and implementing a complete e-commerce platform using microservices architecture. The system includes user management, product catalog, order processing, payment integration, and inventory management services. Built with Spring Boot and deployed on Kubernetes with auto-scaling capabilities.',
            technologies: ['Java', 'Spring Boot', 'Kubernetes', 'Docker', 'PostgreSQL', 'Redis', 'Kafka'],
            category: 'backend',
            status: 'completed',
            github: 'https://github.com/jade-ferreira/ecommerce-microservices',
            demo: 'https://ecommerce-demo.example.com',
            features: [
                'Microservices architecture with 8 independent services',
                'Event-driven communication using Apache Kafka',
                'Auto-scaling and load balancing with Kubernetes',
                'Comprehensive monitoring and logging',
                'CI/CD pipeline with automated testing',
                'Payment gateway integration'
            ]
        },
        {
            id: 2,
            title: 'Real-time Analytics Dashboard',
            description: 'A real-time analytics dashboard for monitoring system performance, user behavior, and business metrics with live data visualization.',
            longDescription: 'Built a comprehensive analytics platform that processes millions of events per day. The system includes data ingestion, real-time processing, and interactive dashboards. Features include custom metrics, alerting, and data export capabilities.',
            technologies: ['Node.js', 'React', 'MongoDB', 'Redis', 'Socket.io', 'D3.js', 'AWS'],
            category: 'fullstack',
            status: 'completed',
            github: 'https://github.com/jade-ferreira/analytics-dashboard',
            demo: 'https://analytics-demo.example.com',
            features: [
                'Real-time data processing and visualization',
                'Interactive charts and graphs with D3.js',
                'Custom metrics and KPI tracking',
                'Automated alerting system',
                'Data export and reporting features',
                'Responsive design for mobile and desktop'
            ]
        },
        {
            id: 3,
            title: 'Distributed Task Queue System',
            description: 'A high-performance distributed task queue system built for handling background jobs at scale with priority queuing and retry mechanisms.',
            longDescription: 'Developed a distributed task queue system similar to Celery but optimized for Java environments. The system supports priority queues, task scheduling, retry mechanisms, and horizontal scaling. Includes a web-based monitoring interface.',
            technologies: ['Java', 'Spring Boot', 'Redis', 'RabbitMQ', 'Vue.js', 'Docker'],
            category: 'backend',
            status: 'completed',
            github: 'https://github.com/jade-ferreira/distributed-task-queue',
            demo: 'https://taskqueue-demo.example.com',
            features: [
                'Priority-based task queuing',
                'Distributed task execution',
                'Automatic retry with exponential backoff',
                'Task scheduling and cron support',
                'Web-based monitoring interface',
                'Horizontal scaling capabilities'
            ]
        },
        {
            id: 4,
            title: 'API Gateway & Service Mesh',
            description: 'A custom API gateway with service mesh capabilities for managing microservices communication, routing, and security.',
            longDescription: 'Built a comprehensive API gateway solution that handles service discovery, load balancing, authentication, rate limiting, and monitoring. Includes a service mesh for secure inter-service communication with mTLS encryption.',
            technologies: ['Go', 'Envoy Proxy', 'Kubernetes', 'Istio', 'Prometheus', 'Grafana'],
            category: 'infrastructure',
            status: 'in-progress',
            github: 'https://github.com/jade-ferreira/api-gateway',
            demo: null,
            features: [
                'Dynamic service discovery and routing',
                'JWT-based authentication and authorization',
                'Rate limiting and throttling',
                'Circuit breaker pattern implementation',
                'Comprehensive metrics and monitoring',
                'Service mesh with mTLS encryption'
            ]
        }
    ]

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'backend', label: 'Backend' },
        { id: 'fullstack', label: 'Full Stack' },
        { id: 'infrastructure', label: 'Infrastructure' }
    ]

    const filteredProjects = selectedFilter === 'all' 
        ? projects 
        : projects.filter(project => project.category === selectedFilter)

    const [selectedProject, setSelectedProject] = useState(null)

    return (
        <>
            <Head>
                <title>Projects | Jade Ferreira</title>
                <meta name="description" content="Portfolio of backend engineering projects by Jade Ferreira"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={styles.projectsPage}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Projects</h1>
                        <p className={styles.subtitle}>
                            A showcase of my backend engineering projects and technical solutions
                        </p>
                    </div>

                    <div className={styles.filterTabs}>
                        {categories.map(category => (
                            <button
                                key={category.id}
                                className={`${styles.filterTab} ${selectedFilter === category.id ? styles.active : ''}`}
                                onClick={() => setSelectedFilter(category.id)}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    <div className={styles.projectsGrid}>
                        {filteredProjects.map((project, index) => (
                            <div key={project.id} className={styles.projectCard}>
                                <div className={styles.cardImage}>
                                    <div className={styles.imagePlaceholder}>
                                        <span className={styles.imageIcon}>🚀</span>
                                    </div>
                                    <div className={styles.statusBadge}>
                                        <span className={`${styles.status} ${styles[project.status]}`}>
                                            {project.status}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className={styles.cardContent}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <p className={styles.projectDescription}>{project.description}</p>
                                    
                                    <div className={styles.technologies}>
                                        {project.technologies.slice(0, 4).map((tech, idx) => (
                                            <span key={idx} className={styles.techTag}>
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <span className={styles.techMore}>
                                                +{project.technologies.length - 4} more
                                            </span>
                                        )}
                                    </div>
                                    
                                    <div className={styles.cardActions}>
                                        <button 
                                            className={styles.viewDetailsBtn}
                                            onClick={() => setSelectedProject(project)}
                                        >
                                            View Details
                                        </button>
                                        <div className={styles.links}>
                                            {project.github && (
                                                <a href={project.github} className={styles.link} target="_blank" rel="noopener noreferrer">
                                                    GitHub
                                                </a>
                                            )}
                                            {project.demo && (
                                                <a href={project.demo} className={styles.link} target="_blank" rel="noopener noreferrer">
                                                    Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {selectedProject && (
                        <div className={styles.modal} onClick={() => setSelectedProject(null)}>
                            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                                <button 
                                    className={styles.closeBtn}
                                    onClick={() => setSelectedProject(null)}
                                >
                                    ×
                                </button>
                                
                                <div className={styles.modalHeader}>
                                    <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
                                    <div className={styles.modalMeta}>
                                        <span className={`${styles.status} ${styles[selectedProject.status]}`}>
                                            {selectedProject.status}
                                        </span>
                                        <span className={styles.category}>
                                            {selectedProject.category}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className={styles.modalBody}>
                                    <p className={styles.modalDescription}>
                                        {selectedProject.longDescription}
                                    </p>
                                    
                                    <div className={styles.features}>
                                        <h4 className={styles.featuresTitle}>Key Features:</h4>
                                        <ul className={styles.featuresList}>
                                            {selectedProject.features.map((feature, idx) => (
                                                <li key={idx} className={styles.feature}>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className={styles.technologiesFull}>
                                        <h4 className={styles.techTitle}>Technologies Used:</h4>
                                        <div className={styles.techTagsFull}>
                                            {selectedProject.technologies.map((tech, idx) => (
                                                <span key={idx} className={styles.techTagFull}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className={styles.modalActions}>
                                        {selectedProject.github && (
                                            <a href={selectedProject.github} className={styles.actionBtn} target="_blank" rel="noopener noreferrer">
                                                View Code
                                            </a>
                                        )}
                                        {selectedProject.demo && (
                                            <a href={selectedProject.demo} className={styles.actionBtn} target="_blank" rel="noopener noreferrer">
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
