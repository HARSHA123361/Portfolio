import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCode, FaCogs, FaDatabase, FaChartBar, FaCloud, FaBrain, FaLightbulb, FaUsers } from "react-icons/fa";
import './GameStyle.css';

function Level2Skills({ addCoin }) {
    const skillCategories = [
        {
            title: "Languages",
            icon: <FaCode />,
            skills: ["Java", "Python", "C", "C++", ".NET", "C#", "JavaScript", "TypeScript", "Go", "Rust", "Scala", "Bash", "Swift", "Kotlin", "Objective-C"]
        },
        {
            title: "Frameworks",
            icon: <FaCogs />,
            skills: ["React.js", "Node.js", "Express.js", "Next.js", "Spring Boot", "Ruby on Rails", "Angular", "RESTful API", "RabbitMQ", "Redux", "Apache Spark", "HDFS (Hadoop)", "Kafka", "Flink", "HTML", "XML", "CSS", "SLURM", "Selenium", "JMeter", "Linux", "Git", "Postman", "GraphQL", "Django"]
        },
        {
            title: "Databases",
            icon: <FaDatabase />,
            skills: ["SQL (Oracle, Sybase)", "MongoDB", "Cassandra", "HBase", "Druid", "Firebase", "InfluxDB", "DynamoDB", "Scylla", "MySQL", "PostgreSQL"]
        },
        {
            title: "Monitoring & Logging",
            icon: <FaChartBar />,
            skills: ["ELK Stack", "Grafana", "Prometheus", "IntelliJ", "Maven", "CI/CD Pipelines", "Jenkins", "Nginx", "A/B Testing", "Unit Testing"]
        },
        {
            title: "Cloud Technologies",
            icon: <FaCloud />,
            skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "Helm", "YAML", "Ansible", "Lambda", "DevOps"]
        },
        {
            title: "AI/ML",
            icon: <FaBrain />,
            skills: ["TensorFlow", "Keras", "PyTorch", "Hugging Face", "OpenCV", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Large Language Models"]
        },
        {
            title: "Development Practices",
            icon: <FaLightbulb />,
            skills: ["SDLC", "Agile", "Scrum", "Kanban", "TDD", "Code Review", "Automation", "Scalability", "Reliability", "Performance Optimization", "Security", "Troubleshooting", "Debugging", "Cross-Functional Collaboration"]
        },
        {
            title: "Soft Skills",
            icon: <FaUsers />,
            skills: ["Analytical Thinking", "Problem-Solving", "Innovation", "Attention to Detail", "Communication", "Collaboration", "Customer Focus", "Adaptability", "Continuous Learning", "Stakeholder Management"]
        }
    ];

    return (
        <div className="game-level level-2-bg" id="level-3">
            <Container>
                <motion.h2
                    className="level-title"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                >
                    ⚡ LEVEL 3: POWER-UP ZONE ⚡
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: 'center',
                        color: '#fff',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '1.2rem',
                        marginBottom: '4rem',
                        textShadow: '2px 2px 0 #000'
                    }}
                >
                    Click skills to collect coins! 🪙
                </motion.p>

                <Row style={{ justifyContent: 'center' }}>
                    {skillCategories.map((category, index) => (
                        <Col xs={12} md={6} lg={4} key={index} style={{ marginBottom: '2.5rem', display: 'flex' }}>
                            <motion.div
                                className="pixel-card"
                                initial={{ opacity: 0, y: 50, rotateY: -90 }}
                                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    type: "spring",
                                    stiffness: 80
                                }}
                                style={{ width: '100%', height: '100%' }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1.2rem',
                                    marginBottom: '2rem',
                                    paddingBottom: '1.2rem',
                                    borderBottom: '4px solid #ECF0F1'
                                }}>
                                    <div style={{
                                        fontSize: '2.5rem',
                                        color: '#3498DB',
                                        background: '#E3F2FD',
                                        padding: '1rem',
                                        borderRadius: '15px',
                                        border: '4px solid #3498DB',
                                        boxShadow: '0 4px 0 #2980B9'
                                    }}>
                                        {category.icon}
                                    </div>
                                    <h4 style={{
                                        fontFamily: 'Poppins, sans-serif',
                                        fontWeight: '800',
                                        fontSize: '1.4rem',
                                        margin: 0,
                                        color: '#2C3E50',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}>
                                        {category.title}
                                    </h4>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.8rem'
                                }}>
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skillIndex}
                                            whileHover={{ scale: 1.1, background: '#2980B9' }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => {
                                                if (addCoin) {
                                                    addCoin();
                                                }
                                            }}
                                            style={{
                                                background: '#3498DB',
                                                border: '3px solid #2980B9',
                                                color: 'white',
                                                padding: '0.7rem 1.3rem',
                                                fontFamily: 'Poppins, sans-serif',
                                                fontSize: '0.95rem',
                                                fontWeight: '600',
                                                borderRadius: '20px',
                                                display: 'inline-block',
                                                boxShadow: '0 3px 0 #2980B9',
                                                transition: 'all 0.1s',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </Col>
                    ))}
                </Row>

                {/* Floating Coins with Better Animation */}
                <motion.div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '3rem',
                        marginTop: '4rem',
                        flexWrap: 'wrap'
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <motion.div
                            key={i}
                            className="coin"
                            animate={{
                                y: [0, -25, 0],
                                rotate: [0, 180, 360]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeInOut"
                            }}
                            whileHover={{
                                scale: 1.3,
                                rotate: 720,
                                transition: { duration: 0.5 }
                            }}
                        >
                            🪙
                        </motion.div>
                    ))}
                </motion.div>

                {/* Power-up Instruction */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 }}
                    style={{
                        textAlign: 'center',
                        marginTop: '3rem',
                        fontFamily: '"Press Start 2P", cursive',
                        fontSize: '0.8rem',
                        color: '#F1C40F',
                        textShadow: '2px 2px 0 #000'
                    }}
                >
                    ⬆️ COLLECT ALL POWER-UPS ⬆️
                </motion.div>
            </Container>
        </div>
    );
}

export default Level2Skills;

