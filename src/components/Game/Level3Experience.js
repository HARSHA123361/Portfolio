import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import './GameStyle.css';

function Level3Experience({ addScore }) {
    const experiences = [
        {
            title: "Software Engineer Intern",
            company: "Intersect Healthcare Systems | Gainesville, FL, USA",
            date: "Aug 2025 - Present",
            points: [
                "Developed a full-stack healthcare application with React.js and TypeScript, integrating Node.js, Express.js & RESTful APIs to enable secure data exchange, improving real-time patient data access speed by 30% and reducing delays in clinical workflows.",
                "Automated quality workflows through CI/CD pipelines in GitHub Actions and test automation with Selenium and JMeter, demonstrating attention to detail and a customer-focused approach that reduced deployment failures by 25%.",
                "Deployed Azure services using Docker, Kubernetes, and Cosmos DB, resulting in higher scalability and a 35% drop in downtime.",
                "Collaborated with cross-functional teams and stakeholders, applying Kanban-based project tracking, strong communication, and collaboration to enhance reliability and maintain scalability."
            ],
            color: '#3498DB'
        },
        {
            title: "Graduate Research Assistant",
            company: "University of Florida | Gainesville, FL, USA",
            date: "July 2025 - Present",
            points: [
                "Enhanced a data-processing pipeline analyzing medical brain-slice imaging data using spaCy, Regex, and DocSift, improving extraction accuracy by 47% through analytical thinking and innovation.",
                "Integrated the pipeline into a Flask-RESTful framework with asynchronous tasks and LLM-based retrieval using Hugging Face and BERT, showcasing adaptability and technical depth to reduce latency by 38%.",
                "Developed deep-learning models (TensorFlow, Keras, PyTorch) for tissue classification, combining ML and vision tools (scikit-learn, OpenCV) while maintaining continuous learning and code quality via Docker-based CI/CD automation.",
                "Created executive-ready presentations summarizing metrics, pipeline progress, and improvements, demonstrating clear communication and coordination in collaborative research environments."
            ],
            color: '#9B59B6'
        },
        {
            title: "Software Development Engineer",
            company: "Dollar Kirana | Kurnool, India",
            date: "Jan 2023 - May 2024",
            points: [
                "Built a SaaS-based cloud-native e-commerce and fintech-ready platform using React.js, Node.js, and PostgreSQL within a Service-Oriented Architecture (SOA) model, enabling secure payment processing, and improving scalability by 55%.",
                "Integrated Kafka and RabbitMQ asynchronous messaging to handle cart updates and order events with zero data loss, maintaining high throughput, reliability, and strong customer focus even during peak traffic conditions.",
                "Streamlined sales and inventory reporting pipelines using Python and Cassandra, applying analytical thinking and attention to detail to enhance forecasting accuracy by 40%.",
                "Optimized microservices deployment and monitoring via Docker, Kubernetes, Grafana, and Prometheus, demonstrating strong problem-solving that ensured consistent low-latency (<200 ms) API responses and faster feature rollouts."
            ],
            color: '#E67E22'
        }
    ];

    return (
        <div className="game-level level-3-bg" id="level-4">
            <Container>
                <motion.h2
                    className="level-title"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    LEVEL 3: EXPERIENCE PLATFORMS
                </motion.h2>

                {experiences.map((exp, index) => (
                    <Row key={index} style={{ marginBottom: '3rem' }}>
                        <Col xs={12}>
                            <motion.div
                                className="experience-platform"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                style={{
                                    borderColor: exp.color,
                                    position: 'relative'
                                }}
                            >
                                {/* Platform Number */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-25px',
                                    left: '20px',
                                    background: exp.color,
                                    color: 'white',
                                    padding: '0.5rem 1.5rem',
                                    fontFamily: 'Press Start 2P',
                                    fontSize: '0.8rem',
                                    border: '3px solid #000',
                                    boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.3)'
                                }}>
                                    STAGE {index + 1}
                                </div>

                                <h3 style={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: '800',
                                    fontSize: '1.8rem',
                                    color: '#2C3E50',
                                    marginBottom: '0.5rem'
                                }}>
                                    {exp.title}
                                </h3>

                                <h5 style={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: '700',
                                    fontSize: '1.2rem',
                                    color: '#2C3E50',
                                    marginBottom: '0.5rem'
                                }}>
                                    {exp.company}
                                </h5>

                                <p style={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '1rem',
                                    color: '#34495E',
                                    marginBottom: '1.5rem',
                                    fontWeight: '700'
                                }}>
                                    {exp.date}
                                </p>

                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    {exp.points.map((point, pIndex) => (
                                        <motion.li
                                            key={pIndex}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: pIndex * 0.1 }}
                                            style={{
                                                fontFamily: 'Poppins, sans-serif',
                                                fontSize: '0.95rem',
                                                color: '#2C3E50',
                                                marginBottom: '1rem',
                                                paddingLeft: '2rem',
                                                position: 'relative',
                                                lineHeight: '1.8'
                                            }}
                                        >
                                            <span style={{
                                                position: 'absolute',
                                                left: '0',
                                                color: exp.color,
                                                fontSize: '1.2rem',
                                                fontWeight: 'bold'
                                            }}>
                                                ▶
                                            </span>
                                            {point}
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Achievement Star */}
                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        bottom: '20px',
                                        right: '20px',
                                        fontSize: '2rem'
                                    }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                >
                                    ⭐
                                </motion.div>
                            </motion.div>
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    );
}

export default Level3Experience;

