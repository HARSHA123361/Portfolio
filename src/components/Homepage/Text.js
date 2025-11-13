import React from 'react'
import '../../pages/style.css';
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <div className="typewriter-container">
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
  )
}

export default Text