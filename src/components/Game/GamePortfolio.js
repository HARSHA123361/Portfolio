import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './GameStyle.css';
import Level1Intro from './Level1Intro';
import Level2About from './Level2About';
import Level2Skills from './Level2Skills';
import Level3Experience from './Level3Experience';
import Level4Projects from './Level4Projects';
import Level5Contact from './Level5Contact';
import GameHUD from './GameHUD';

function GamePortfolio() {
    const [currentLevel, setCurrentLevel] = useState(1);
    const [score, setScore] = useState(0);
    const [coins, setCoins] = useState(0);
    const { scrollYProgress } = useScroll();

    // Character position based on scroll
    const characterX = useTransform(scrollYProgress, [0, 1], ['5%', '85%']);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

            // Update level
            if (scrollPercent < 0.15) setCurrentLevel(1);
            else if (scrollPercent < 0.3) setCurrentLevel(2);
            else if (scrollPercent < 0.5) setCurrentLevel(3);
            else if (scrollPercent < 0.7) setCurrentLevel(4);
            else if (scrollPercent < 0.85) setCurrentLevel(5);
            else setCurrentLevel(6);

            // Auto-increment score based on scroll progress
            const newScore = Math.floor(scrollPercent * 1000);
            setScore(newScore);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="game-container">
            {/* Game HUD - Top Bar */}
            <GameHUD currentLevel={currentLevel} score={score} coins={coins} />

            {/* Scrolling Character */}
            <motion.div
                className="game-character"
                style={{
                    left: characterX,
                    position: 'fixed',
                    bottom: '100px',
                    zIndex: 100
                }}
            >
                <div className="character-sprite running"></div>
            </motion.div>

            {/* Game Ground */}
            <div className="game-ground"></div>

            {/* Levels */}
            <div className="game-levels">
                <Level1Intro />
                <Level2About />
                <Level2Skills addCoin={() => setCoins(c => c + 1)} />
                <Level3Experience addScore={(points) => setScore(s => s + points)} />
                <Level4Projects />
                <Level5Contact />
            </div>

            {/* Background Clouds & Scenery */}
            <div className="game-background">
                <div className="clouds"></div>
                <div className="mountains"></div>
            </div>
        </div>
    );
}

export default GamePortfolio;

