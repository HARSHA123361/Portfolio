import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import './GameStyle.css';

function Level4Projects() {
    const projects = [
        {
            number: "01",
            title: "AI-Powered Ingredient Substitution System",
            description: "Developed a machine learning system for ingredient substitution using NLP embeddings (Word2Vec, BERT), achieving 89% accuracy in predicting replacements. Built data-driven pipelines with Scikit-learn and TensorFlow for model training, integrated Pandas for preprocessing, and optimized performance for real-world recipe datasets.",
            tags: ["Python", "NLP", "Word2Vec", "BERT", "Scikit-learn", "TensorFlow", "Pandas"],
            github: "https://github.com/HARSHA123361/Ingredients-System",
            bossName: "ML Dragon"
        },
        {
            number: "02",
            title: "Crypto Dashboard",
            description: "Built a responsive cryptocurrency dashboard with real-time prices, multi-API fallback (CoinGecko, CoinPaprika, CoinLore, Coinranking), caching, and retry mechanisms for reliable uptime and accuracy. Designed a resilient frontend with dark/light theming, CORS proxy rotation, progressive loading indicators, and mobile-optimized UI, deployed seamlessly on Vercel and Firebase Hosting.",
            tags: ["Next.js", "React", "Tailwind CSS", "Context API", "CoinGecko API", "Firebase", "Vercel"],
            github: "https://github.com/HARSHA123361/Crypto_DashBoard",
            bossName: "Crypto Beast"
        },
        {
            number: "03",
            title: "Expense Tracker",
            description: "Built a cross-platform expense tracker app with budget management, expense logging, and interactive visualizations, achieving 92% accuracy in spending insights. Designed a responsive UI for higher engagement and optimized performance using Redux for efficient state handling, Node.js/Express APIs, and Firebase sync.",
            tags: ["React Native", "TypeScript", "Redux", "Node.js", "Express", "MongoDB", "Firebase"],
            github: "https://github.com/HARSHA123361/ExpenseTracker",
            bossName: "Budget Boss"
        },
        {
            number: "04",
            title: "Incident Analysis Web App",
            description: "Developed a web application that extracts incident data from Norman Police Department PDFs/URLs using PyMuPDF, enriches datasets with geocoding and feature engineering, and visualizes insights through clustering maps, bar charts, and pie charts. Built an interactive Streamlit interface with file upload and URL input, integrated K-Means clustering, Plotly visualizations, and automated test coverage with pytest for data validation and geocoding accuracy.",
            tags: ["Python", "Streamlit", "Pandas", "scikit-learn", "PyMuPDF", "Plotly", "Geopy", "Nominatim API"],
            github: "https://github.com/HARSHA123361/cis6930fa24-project3",
            bossName: "Data Wizard"
        },
        {
            number: "05",
            title: "Virtual Healthcare Assistant",
            description: "Developed a virtual healthcare assistant using NLP models (BERT) to provide instant medical advice and triage support, achieving 92% accuracy in intent classification and symptom mapping. Built custom ML models with TensorFlow to predict potential conditions with 87% precision and implemented a recommendation engine suggesting next steps such as doctor consultations or OTC medication.",
            tags: ["Python", "NLP", "BERT", "TensorFlow", "Scikit-learn"],
            github: "https://github.com/HARSHA123361/Virtual-Health-Assiatant",
            bossName: "Health Titan"
        },
        {
            number: "06",
            title: "Online School Management System",
            description: "Developed a full-stack school management system enabling schools to add, edit, delete, and manage student records with a relational MySQL backend. Built dynamic web pages with JSP and JavaScript for responsive interactivity, deployed on Apache Tomcat, ensuring efficient data handling and seamless browser-based access.",
            tags: ["Java", "JSP", "HTML", "CSS", "JavaScript", "MySQL", "Apache Tomcat"],
            github: "https://github.com/HARSHA123361/Online_School_Management_System",
            bossName: "School Master"
        },
        {
            number: "07",
            title: "Music Recommendation using Facial Expressions",
            description: "Trained a deep learning model with TensorFlow & Keras using OpenCV, mapping emotions to music playlists. Integrated the model into a Flask web app for real-time facial emotion detection and personalized music recommendations, enhancing accuracy by 92%, reducing latency, and boosting user engagement.",
            tags: ["Python", "OpenCV", "TensorFlow", "Keras", "Flask"],
            github: "https://github.com/HARSHA123361/Emotion-Detection-using-Facial-Expression",
            bossName: "Emotion King"
        }
    ];

    return (
        <div className="game-level level-4-bg" id="level-5">
            <Container>
                <motion.h2
                    className="level-title"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    LEVEL 4: BOSS BATTLES
                </motion.h2>

                <p style={{
                    textAlign: 'center',
                    color: '#fff',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.2rem',
                    marginBottom: '3rem',
                    textShadow: '2px 2px 0 #000'
                }}>
                    ⚔️ Defeat each project boss to unlock achievements! ⚔️
                </p>

                <Row>
                    {projects.map((project, index) => (
                        <Col xs={12} md={6} key={index} style={{ marginBottom: '3rem' }}>
                            <motion.div
                                className="boss-container"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Boss Number */}
                                <div className="project-number-game">
                                    {project.number}
                                </div>

                                {/* Boss Name Banner */}
                                <div style={{
                                    background: '#000',
                                    color: '#F1C40F',
                                    padding: '1rem',
                                    textAlign: 'center',
                                    fontFamily: 'Press Start 2P',
                                    fontSize: '0.9rem',
                                    marginBottom: '1rem',
                                    border: '3px solid #F1C40F'
                                }}>
                                    👹 BOSS: {project.bossName.toUpperCase()}
                                </div>

                                {/* Health Bar */}
                                <div className="boss-health-bar">
                                    <motion.div
                                        className="boss-health-fill"
                                        initial={{ width: '0%' }}
                                        whileInView={{ width: '100%' }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                    ></motion.div>
                                </div>

                                {/* Project Card */}
                                <div className="pixel-card" style={{ background: 'white', padding: '2.5rem' }}>
                                    <h3 style={{
                                        fontFamily: 'Poppins, sans-serif',
                                        fontWeight: '800',
                                        fontSize: '1.8rem',
                                        color: '#2C3E50',
                                        marginBottom: '1.5rem',
                                        lineHeight: '1.3'
                                    }}>
                                        {project.title}
                                    </h3>

                                    <p style={{
                                        fontFamily: 'Poppins, sans-serif',
                                        fontSize: '1.05rem',
                                        color: '#7F8C8D',
                                        lineHeight: '1.8',
                                        marginBottom: '2rem'
                                    }}>
                                        {project.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.7rem' }}>
                                        {project.tags.map((tag, tIndex) => (
                                            <span
                                                key={tIndex}
                                                style={{
                                                    background: '#E74C3C',
                                                    border: '3px solid #C0392B',
                                                    color: 'white',
                                                    padding: '0.6rem 1.2rem',
                                                    fontFamily: 'Poppins, sans-serif',
                                                    fontSize: '0.9rem',
                                                    fontWeight: '600',
                                                    borderRadius: '20px',
                                                    display: 'inline-block',
                                                    boxShadow: '0 3px 0 #C0392B'
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Attack Button */}
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        className="game-button"
                                        style={{ width: '100%', textAlign: 'center', display: 'block' }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        ⚔️ ATTACK ON GITHUB <AiFillGithub style={{ marginLeft: '0.5rem' }} />
                                    </motion.a>
                                </div>

                                {/* Victory Stars */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: '1rem',
                                    marginTop: '1rem'
                                }}>
                                    {[1, 2, 3].map((star) => (
                                        <motion.div
                                            key={star}
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 1 + star * 0.2 }}
                                            style={{ fontSize: '2rem' }}
                                        >
                                            ⭐
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Level4Projects;

