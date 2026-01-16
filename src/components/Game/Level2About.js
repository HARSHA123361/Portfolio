import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import './GameStyle.css';

function Level2About() {
    return (
        <div className="game-level" id="level-2" style={{
            background: 'linear-gradient(180deg, #9B59B6 0%, #8E44AD 100%)'
        }}>
            <Container>
                <motion.h2
                    className="level-title"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    LEVEL 2: ABOUT ZONE
                </motion.h2>

                <Row>
                    <Col md={5}>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{
                                background: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: '20px',
                                padding: '2rem',
                                border: '4px dashed rgba(255, 255, 255, 0.5)'
                            }}
                        >
                            <iframe
                                src="https://lottie.host/embed/597cb750-a7ed-49dc-a85b-3704fe202ced/nov0MZPUay.lottie"
                                style={{ width: '100%', height: '400px', border: 'none' }}
                                title="About Animation"
                                allowFullScreen
                            />
                        </motion.div>
                    </Col>

                    <Col md={7}>
                        <motion.div
                            className="pixel-card"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ background: 'white' }}
                        >
                            <div style={{
                                background: '#3498DB',
                                color: 'white',
                                padding: '1rem',
                                marginBottom: '2rem',
                                fontFamily: 'Press Start 2P',
                                fontSize: '1rem',
                                textAlign: 'center',
                                border: '3px solid #2980B9'
                            }}>
                                CHARACTER INFO
                            </div>

                            <p style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '1.05rem',
                                lineHeight: '1.9',
                                color: '#2C3E50'
                            }}>
                                <strong style={{ color: '#3498DB' }}>Software Engineer</strong> with hands-on experience building full-stack applications, scalable microservices, and high-performance systems across modern <strong style={{ color: '#3498DB' }}>web and cloud environments</strong>. Skilled in <strong style={{ color: '#3498DB' }}>React.js, Node.js, Python, and TypeScript</strong>, with expertise in system design, SDLC, and scalability engineering. Delivered <strong style={{ color: '#3498DB' }}>30+ RESTful APIs</strong>, CI/CD pipelines, and data-driven services integrating <strong style={{ color: '#3498DB' }}>deep-learning and LLM-based workflows</strong>. Experienced in <strong style={{ color: '#3498DB' }}>Agile (Scrum), TDD</strong>, and code review practices, with a strong focus on security, troubleshooting, and cross-functional collaboration to deliver reliable, production-ready solutions.
                            </p>

                            {/* Achievement Badges */}
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '1rem',
                                marginTop: '2rem',
                                justifyContent: 'center'
                            }}>
                                {['🎓 MS CS @ UF', '💼 2+ Years', '🚀 30+ APIs', '⚡ Full-Stack', '🤖 AI/ML'].map((badge, index) => (
                                    <motion.div
                                        key={index}
                                        className="pixel-block"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        style={{
                                            background: '#F1C40F',
                                            border: '3px solid #F39C12',
                                            padding: '0.8rem 1.5rem',
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '0.9rem',
                                            fontWeight: '700',
                                            color: '#fff',
                                            textShadow: '2px 2px 0 rgba(0, 0, 0, 0.2)'
                                        }}
                                    >
                                        {badge}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Level2About;

