import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import {
  AiFillGithub,
  // AiOutlineTwitter,
} from "react-icons/ai";
import {
  SiLeetcode,
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
// Using lottie-player web component via script in public/index.html

function Home() {
  return (
    <div className='homepagebackground d-flex align-items-center justify-content-center'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext' style={{ fontFamily: "aveneir next" }}>Hello <span className='wave'>👋 </span></h2>
            <h2 className='nametext' style={{ fontFamily: "aveneir next" }}>I'm Sai Harsha Somisetty</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/HARSHA123361");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/sai-harsha-somisetty-378ba21ba/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("https://leetcode.com/u/Harsha0718/");
            }}
              className='socailmediabtn'><SiLeetcode className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
              <iframe
                src="https://lottie.host/embed/a9e7dc58-7e63-4386-863d-c2b57ebbc4ce/wo3DuRSkrA.lottie"
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="Intro Animation"
                allowFullScreen
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home