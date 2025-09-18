import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'

function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={5}>
                        <div className="webimage">
                            <iframe
                                src="https://lottie.host/embed/597cb750-a7ed-49dc-a85b-3704fe202ced/nov0MZPUay.lottie"
                                style={{ width: '100%', height: '100%', border: 'none' }}
                                title="About Animation"
                                allowFullScreen
                            />
                        </div>
                    </Col>
                    <Col md={7} >
                        <h3 className='aboutmetext' style={{ fontFamily: "aveneir next" }}>About Me</h3>
                        <p className='aboutdetails' style={{ fontFamily: "aveneir next" }}>I am a passionate Software Developer pursuing my Master's in Computer Science at the University of Florida, specializing in advanced data structures, distributed systems, and data engineering. I have hands-on experience in full-stack development, cloud technologies, and scalable system design through roles such as Software Engineer Intern at Intersect Healthcare Systems, Graduate Research Assistant at UF, and Software Development Engineer at Dollar Kirana.

                            My projects span healthcare, e-commerce, and research platforms, where I built cloud-native applications with React.js, Node.js, TypeScript, PostgreSQL, Docker, Kubernetes, and Azure/AWS/GCP services. I also contributed to solutions like a Productivity Dashboard, Encrypted Password Manager, and an emotion-based Music Recommendation System.

                            Skilled in Java, Python, C/C++, Go, Rust, and frameworks like React, Next.js, Spring Boot, and Flask, I enjoy solving complex problems, building scalable microservices, and enhancing user experiences. I thrive in collaborative environments and strive to create meaningful impact through innovative, reliable systems.
                        </p>

                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage