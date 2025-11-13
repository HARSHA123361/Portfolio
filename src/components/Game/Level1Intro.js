import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import './GameStyle.css';

function Level1Intro() {
    return (
        <div className="game-level level-1-bg" id="level-1">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="pixel-block" style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '4rem', textAlign: 'center' }}>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <motion.button
                                        className="game-button"
                                        style={{
                                            fontSize: '1.2rem',
                                            marginBottom: '2rem',
                                            background: '#27AE60',
                                            borderColor: '#229954',
                                            boxShadow: '0 4px 0 #229954',
                                            cursor: 'pointer'
                                        }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        animate={{
                                            boxShadow: ['0 4px 0 #229954', '0 8px 0 #229954', '0 4px 0 #229954'],
                                        }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                        onClick={() => {
                                            window.scrollTo({
                                                top: window.innerHeight,
                                                behavior: 'smooth'
                                            });
                                        }}
                                    >
                                        ▶ PRESS START
                                    </motion.button>
                                </motion.div>

                                {/* Direct Social Icons with Animations */}
                                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '2rem' }}>
                                    {/* GitHub Icon */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200 }}
                                        whileHover={{
                                            scale: 1.2,
                                            rotate: 360,
                                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => window.open("https://github.com/HARSHA123361")}
                                        style={{
                                            background: 'linear-gradient(135deg, #333 0%, #000 100%)',
                                            borderRadius: '20px',
                                            padding: '1.5rem',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '4px solid #000',
                                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
                                        }}
                                        title="GitHub"
                                    >
                                        <AiFillGithub style={{ fontSize: '3.5rem', color: '#fff' }} />
                                    </motion.div>

                                    {/* LinkedIn Icon */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
                                        whileHover={{
                                            scale: 1.2,
                                            rotate: 360,
                                            boxShadow: '0 10px 30px rgba(0, 119, 181, 0.4)'
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => window.open("https://www.linkedin.com/in/sai-harsha-somisetty-378ba21ba/")}
                                        style={{
                                            background: 'linear-gradient(135deg, #0095D5 0%, #0077B5 100%)',
                                            borderRadius: '20px',
                                            padding: '1.5rem',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '4px solid #0077B5',
                                            boxShadow: '0 8px 16px rgba(0, 119, 181, 0.3)'
                                        }}
                                        title="LinkedIn"
                                    >
                                        <FaLinkedinIn style={{ fontSize: '3.5rem', color: '#fff' }} />
                                    </motion.div>

                                    {/* LeetCode Icon */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 200 }}
                                        whileHover={{
                                            scale: 1.2,
                                            rotate: 360,
                                            boxShadow: '0 10px 30px rgba(255, 161, 22, 0.4)'
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => window.open("https://leetcode.com/u/Harsha0718/")}
                                        style={{
                                            background: 'linear-gradient(135deg, #FFB800 0%, #FFA116 100%)',
                                            borderRadius: '20px',
                                            padding: '1.5rem',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '4px solid #FFA116',
                                            boxShadow: '0 8px 16px rgba(255, 161, 22, 0.3)'
                                        }}
                                        title="LeetCode"
                                    >
                                        <SiLeetcode style={{ fontSize: '3.5rem', color: '#fff' }} />
                                    </motion.div>
                                </div>

                                {/* Hi I'm Section */}
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    style={{
                                        fontFamily: 'Poppins, sans-serif',
                                        fontSize: '2rem',
                                        fontWeight: '600',
                                        color: '#7F8C8D',
                                        marginBottom: '0.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem'
                                    }}
                                >
                                    Hi I'm
                                    <motion.span
                                        animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                                        style={{ display: 'inline-block', fontSize: '2.5rem' }}
                                    >
                                        👋
                                    </motion.span>
                                </motion.div>

                                <motion.h2
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    style={{
                                        fontFamily: 'Poppins, sans-serif',
                                        fontSize: '3.5rem',
                                        fontWeight: '900',
                                        color: '#2C3E50',
                                        marginBottom: '1.5rem',
                                        textShadow: '4px 4px 0 rgba(52, 152, 219, 0.3)',
                                        letterSpacing: '0.05em',
                                        lineHeight: '1.2'
                                    }}
                                >
                                    SAI HARSHA SOMISETTY
                                </motion.h2>

                                <div style={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '1.8rem',
                                    color: '#E74C3C',
                                    fontWeight: '700',
                                    marginBottom: '2rem',
                                    minHeight: '60px'
                                }}>
                                    <Typewriter
                                        options={{
                                            strings: [
                                                "Software Engineer 🚀",
                                                "Full-Stack Developer 💻",
                                                "AI/ML Engineer 🤖",
                                                "Tech Enthusiast ⚡",
                                                "Problem Solver 🧩"
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            deleteSpeed: 50,
                                            delay: 80,
                                        }}
                                    />
                                </div>

                                <p style={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '1rem',
                                    color: '#7F8C8D',
                                    marginBottom: '2rem',
                                    lineHeight: '1.8'
                                }}>
                                    Welcome! Scroll through my professional journey to explore my experience,
                                    skills, and projects. Let's build something amazing together! 🚀
                                </p>

                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    style={{
                                        fontFamily: '"Press Start 2P", cursive',
                                        fontSize: '0.8rem',
                                        color: '#95A5A6',
                                        textAlign: 'center',
                                        marginTop: '2rem'
                                    }}
                                >
                                    ⬇️ SCROLL TO START ⬇️
                                </motion.div>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Level1Intro;

