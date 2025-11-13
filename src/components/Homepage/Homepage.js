import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import { motion } from 'framer-motion';
import {
  AiFillGithub,
} from "react-icons/ai";
import {
  SiLeetcode,
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };


  return (
    <div className='homepagebackground d-flex align-items-center justify-content-center'>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Row>
            <Col md={7}>
              <motion.div variants={itemVariants}>
                <h2 className='headtext-greeting'>
                  Hello,
                </h2>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h1 className='nametext-modern'>
                  Sai Harsha here!
                </h1>
              </motion.div>

              <motion.div variants={itemVariants} className='subtitle-text'>
                <Text />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className='social-links-modern'
              >
                <motion.button
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open("https://github.com/HARSHA123361")}
                  className='social-btn-modern'
                >
                  <AiFillGithub className='social-icon-modern' />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open("https://www.linkedin.com/in/sai-harsha-somisetty-378ba21ba/")}
                  className='social-btn-modern'
                >
                  <FaLinkedinIn className='social-icon-modern' />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open("https://leetcode.com/u/Harsha0718/")}
                  className='social-btn-modern'
                >
                  <SiLeetcode className='social-icon-modern' />
                </motion.button>
              </motion.div>

              <motion.div variants={itemVariants} style={{ marginTop: '2rem' }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open("https://drive.google.com/file/d/1hVB-PpdJXKP1IO4owGN7uZoT8KYtTU3-/view?usp=sharing")}
                  className='cta-button-modern'
                >
                  View Resume →
                </motion.button>
              </motion.div>
            </Col>

            <Col md={5}>
              <motion.div
                className="imagedeveloper-modern"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <iframe
                  src="https://lottie.host/embed/a9e7dc58-7e63-4386-863d-c2b57ebbc4ce/wo3DuRSkrA.lottie"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  title="Intro Animation"
                  allowFullScreen
                />
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  )
}

export default Home