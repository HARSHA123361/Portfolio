import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import './GameStyle.css';

function Level5Contact() {
    return (
        <div className="game-level level-5-bg" id="level-6">
            <Container>
                <motion.h2
                    className="level-title"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    LEVEL 5: FINAL CASTLE
                </motion.h2>

                <Row style={{ justifyContent: 'center' }}>
                    <Col xs={12} md={8}>
                        <motion.div
                            className="pixel-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                background: 'white',
                                textAlign: 'center',
                                padding: '3rem'
                            }}
                        >
                            {/* Victory Flag */}
                            <motion.div
                                animate={{ rotate: [-5, 5, -5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                style={{ fontSize: '5rem', marginBottom: '2rem' }}
                            >
                                🏁
                            </motion.div>

                            <h2 style={{
                                fontFamily: 'Press Start 2P',
                                fontSize: '1.5rem',
                                color: '#27AE60',
                                marginBottom: '2rem',
                                textShadow: '3px 3px 0 rgba(39, 174, 96, 0.3)'
                            }}>
                                YOU WIN!
                            </h2>

                            <h3 style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '2rem',
                                fontWeight: '800',
                                color: '#2C3E50',
                                marginBottom: '1.5rem'
                            }}>
                                Let's Connect!
                            </h3>

                            <p style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '1.1rem',
                                color: '#7F8C8D',
                                marginBottom: '3rem',
                                lineHeight: '1.8'
                            }}>
                                Ready to team up? Send me a message and let's build something amazing together!
                            </p>

                            {/* Contact Info as Power-ups */}
                            <Row style={{ marginBottom: '2rem', justifyContent: 'center' }}>
                                <Col xs={12} lg={4}>
                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        style={{
                                            background: '#E3F2FD',
                                            padding: '2rem 1rem',
                                            borderRadius: '12px',
                                            border: '3px solid #3498DB',
                                            marginBottom: '1rem',
                                            minHeight: '180px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📍</div>
                                        <h5 style={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontWeight: '700',
                                            fontSize: '1.1rem',
                                            color: '#2C3E50',
                                            marginBottom: '0.8rem'
                                        }}>
                                            LOCATION
                                        </h5>
                                        <p style={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '0.9rem',
                                            color: '#34495E',
                                            margin: 0,
                                            fontWeight: '600',
                                            textAlign: 'center'
                                        }}>
                                            United States of America
                                        </p>
                                    </motion.div>
                                </Col>

                                <Col xs={12} lg={4}>
                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        style={{
                                            background: '#FCE4EC',
                                            padding: '2rem 1rem',
                                            borderRadius: '12px',
                                            border: '3px solid #E91E63',
                                            marginBottom: '1rem',
                                            minHeight: '180px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📞</div>
                                        <h5 style={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontWeight: '700',
                                            fontSize: '1.1rem',
                                            color: '#2C3E50',
                                            marginBottom: '0.8rem'
                                        }}>
                                            CALL
                                        </h5>
                                        <p style={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '0.9rem',
                                            color: '#34495E',
                                            margin: 0,
                                            fontWeight: '600',
                                            textAlign: 'center'
                                        }}>
                                            +1 352-246-5909
                                        </p>
                                    </motion.div>
                                </Col>

                                <Col xs={12} lg={4}>
                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        style={{
                                            background: '#F3E5F5',
                                            padding: '2rem 2rem',
                                            borderRadius: '12px',
                                            border: '3px solid #9C27B0',
                                            marginBottom: '1rem',
                                            minHeight: '180px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✉️</div>
                                        <h5 style={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontWeight: '700',
                                            fontSize: '1.1rem',
                                            color: '#2C3E50',
                                            marginBottom: '0.8rem'
                                        }}>
                                            EMAIL
                                        </h5>
                                        <p style={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '0.75rem',
                                            color: '#34495E',
                                            margin: 0,
                                            fontWeight: '600',
                                            textAlign: 'center',
                                            lineHeight: '1.6',
                                            padding: '0 0.8rem'
                                        }}>
                                            saiharshasomisetty12@gmail.com
                                        </p>
                                    </motion.div>
                                </Col>
                            </Row>

                            {/* Email Button */}
                            <motion.a
                                href="mailto:saiharshasomisetty12@gmail.com"
                                className="game-button resume-btn"
                                style={{
                                    fontSize: '1rem',
                                    padding: '1.2rem 3rem',
                                    display: 'inline-block'
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                📧 SEND MESSAGE
                            </motion.a>

                            {/* Trophy */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                                style={{
                                    fontSize: '4rem',
                                    marginTop: '3rem',
                                    filter: 'drop-shadow(0 4px 8px rgba(241, 196, 15, 0.5))'
                                }}
                            >
                                🏆
                            </motion.div>

                            <p style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '0.9rem',
                                color: '#95A5A6',
                                marginTop: '2rem'
                            }}>
                                Thank you for playing! ✨
                            </p>
                        </motion.div>
                    </Col>
                </Row>

                {/* Victory Animation */}
                <div style={{
                    position: 'absolute',
                    bottom: '150px',
                    right: '10%',
                    fontSize: '8rem'
                }}>
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        🏰
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}

export default Level5Contact;

