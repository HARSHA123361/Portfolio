import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './GameStyle.css';

function GameHUD({ currentLevel, score, coins }) {
    const [showWarpMenu, setShowWarpMenu] = useState(false);

    const scrollToLevel = (levelNum) => {
        const levelElement = document.getElementById(`level-${levelNum}`);
        if (levelElement) {
            levelElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setShowWarpMenu(false);
        }
    };
    return (
        <motion.div
            className="game-hud"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="hud-container">
                <div className="hud-left">
                    <div className="pixel-text">SAIHARSHA</div>
                    <div className="hud-stats">
                        <span className="hud-item">
                            <span className="coin-icon">🪙</span> × {coins}
                        </span>
                        <span className="hud-item">
                            <span className="star-icon">⭐</span> {score}
                        </span>
                    </div>
                </div>

                <div className="hud-center">
                    <div className="level-display">
                        LEVEL {currentLevel} - {getLevelName(currentLevel)}
                    </div>
                </div>

                <div className="hud-right" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    {/* Warp Menu */}
                    <div style={{ position: 'relative' }}>
                        <motion.button
                            onClick={() => setShowWarpMenu(!showWarpMenu)}
                            className="game-button warp-btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            style={{
                                background: '#27AE60',
                                border: '4px solid #229954',
                                color: 'white',
                                padding: '0.6rem 1rem',
                                fontFamily: '"Press Start 2P", cursive',
                                fontSize: '0.7rem',
                                cursor: 'pointer',
                                boxShadow: '0 4px 0 #1E8449',
                                borderRadius: '8px'
                            }}
                        >
                            🎯 QUICK JUMP
                        </motion.button>

                        <AnimatePresence>
                            {showWarpMenu && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                    style={{
                                        position: 'absolute',
                                        top: '120%',
                                        right: 0,
                                        background: '#2C3E50',
                                        border: '4px solid #34495E',
                                        borderRadius: '12px',
                                        padding: '1rem',
                                        boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                                        zIndex: 1000,
                                        minWidth: '220px'
                                    }}
                                >
                                    <div style={{
                                        fontFamily: '"Press Start 2P", cursive',
                                        fontSize: '0.6rem',
                                        color: '#ECF0F1',
                                        marginBottom: '0.8rem',
                                        textAlign: 'center',
                                        paddingBottom: '0.5rem',
                                        borderBottom: '2px solid #34495E'
                                    }}>
                                        SELECT LEVEL
                                    </div>
                                    {[
                                        { num: 1, name: 'INTRO', icon: '🏁', color: '#E74C3C' },
                                        { num: 2, name: 'ABOUT', icon: '👨‍💻', color: '#3498DB' },
                                        { num: 3, name: 'SKILLS', icon: '⚡', color: '#F39C12' },
                                        { num: 4, name: 'EXPERIENCE', icon: '💼', color: '#9B59B6' },
                                        { num: 5, name: 'PROJECTS', icon: '🎮', color: '#E74C3C' },
                                        { num: 6, name: 'CONTACT', icon: '📧', color: '#27AE60' }
                                    ].map(level => (
                                        <motion.button
                                            key={level.num}
                                            onClick={() => scrollToLevel(level.num)}
                                            whileHover={{ scale: 1.05, x: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                            style={{
                                                width: '100%',
                                                background: currentLevel === level.num ? level.color : '#34495E',
                                                border: `3px solid ${level.color}`,
                                                color: 'white',
                                                padding: '0.7rem',
                                                marginBottom: '0.5rem',
                                                fontFamily: 'Poppins, sans-serif',
                                                fontSize: '0.75rem',
                                                fontWeight: '700',
                                                cursor: 'pointer',
                                                borderRadius: '8px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                transition: 'all 0.2s',
                                                boxShadow: currentLevel === level.num ? `0 3px 0 ${level.color}` : 'none'
                                            }}
                                        >
                                            <span style={{ fontSize: '1rem' }}>{level.icon}</span>
                                            <span>{level.num}. {level.name}</span>
                                        </motion.button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <motion.a
                        href="https://drive.google.com/file/d/1hVB-PpdJXKP1IO4owGN7uZoT8KYtTU3-/view?usp=sharing"
                        target="_blank"
                        className="game-button resume-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        📄 RESUME
                    </motion.a>
                </div>
            </div>

            {/* Health/Progress Bar */}
            <div className="progress-bar-container">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${(currentLevel / 6) * 100}%` }}
                ></div>
            </div>
        </motion.div>
    );
}

function getLevelName(level) {
    const names = {
        1: 'START',
        2: 'ABOUT ZONE',
        3: 'SKILLS WORLD',
        4: 'EXPERIENCE PATH',
        5: 'BOSS BATTLES',
        6: 'FINAL CASTLE'
    };
    return names[level] || 'UNKNOWN';
}

export default GameHUD;

