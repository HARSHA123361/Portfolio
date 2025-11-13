import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion';

function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Row className='textbackground' style={{
                        padding: '3rem',
                        background: 'white',
                        borderRadius: '25px',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)'
                    }}>
                        <Col md={5}>
                            <motion.div
                                className="webimage"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <iframe
                                    src="https://lottie.host/embed/597cb750-a7ed-49dc-a85b-3704fe202ced/nov0MZPUay.lottie"
                                    style={{ width: '100%', height: '100%', border: 'none' }}
                                    title="About Animation"
                                    allowFullScreen
                                />
                            </motion.div>
                        </Col>
                        <Col md={7}>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <h2 className='aboutmetext-modern' style={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontSize: '2.5rem',
                                    fontWeight: '800',
                                    marginBottom: '1.5rem',
                                    color: '#191919',
                                    letterSpacing: '-1px'
                                }}>
                                    About Me
                                </h2>
                                <div className='aboutdetails' style={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontSize: '1.05rem',
                                    lineHeight: '1.9',
                                    color: '#666'
                                }}>
                                    <p style={{ marginBottom: 0 }}>
                                        <strong style={{ color: '#191919' }}>Software Engineer</strong> with hands-on experience building full-stack applications, scalable microservices, and high-performance systems across modern <strong style={{ color: '#191919' }}>web and cloud environments</strong>. Skilled in <strong style={{ color: '#191919' }}>React.js, Node.js, Python, and TypeScript</strong>, with expertise in system design, SDLC, and scalability engineering. Delivered <strong style={{ color: '#191919' }}>30+ RESTful APIs</strong>, CI/CD pipelines, and data-driven services integrating <strong style={{ color: '#191919' }}>deep-learning and LLM-based workflows</strong>. Experienced in <strong style={{ color: '#191919' }}>Agile (Scrum), TDD</strong>, and code review practices, with a strong focus on security, troubleshooting, and cross-functional collaboration to deliver reliable, production-ready solutions.
                                    </p>
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
                </motion.div>
            </Container>
        </div>
    )
}

export default Aboutpage