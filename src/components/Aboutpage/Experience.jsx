import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork } from "react-icons/md";
import { Container, Row } from 'react-bootstrap'

const Experience = () => (
    <>
        <Container>
            <Row style={{ justifyContent: "center" }}>
                <h2 className='modern-section-title' style={{ marginBottom: "20px", textAlign: 'center' }}>Experience</h2>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <VerticalTimeline>
                    <style>{`
      .vertical-timeline::before {
        background-color: #38bdf8;
      }
    `}</style>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#38bdf8', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #38bdf8' }}
                        date={<span style={{ color: "black" }}>
                            Aug 2025 - Present
                        </span>}
                        iconStyle={{ background: '#38bdf8', color: '#fff' }}
                        icon={<MdOutlineWork />}
                    >
                        <h3 className="vertical-timeline-element-title" style={{ color: "black", fontFamily: "Poppins, sans-serif", fontWeight: '700' }}>Software Engineer Intern</h3>
                        <h5 className="vertical-timeline-element-subtitle" style={{ color: "black", fontFamily: "Poppins, sans-serif", fontWeight: '600' }}>Intersect Healthcare Systems | Gainesville, FL, USA</h5>
                        <ul>
                            <li style={{ fontFamily: "Poppins, sans-serif" }}>Developed a full-stack healthcare application with React.js and TypeScript, integrating Node.js, Express.js & RESTful APIs to enable secure data exchange, improving real-time patient data access speed by 30% and reducing delays in clinical workflows.</li>
                            <li style={{ fontFamily: "Poppins, sans-serif" }}>Automated quality workflows through CI/CD pipelines in GitHub Actions and test automation with Selenium and JMeter, demonstrating attention to detail and a customer-focused approach that reduced deployment failures by 25%.</li>
                            <li style={{ fontFamily: "Poppins, sans-serif" }}>Deployed Azure services using Docker, Kubernetes, and Cosmos DB, resulting in higher scalability and a 35% drop in downtime.</li>
                            <li style={{ fontFamily: "Poppins, sans-serif" }}>Collaborated with cross-functional teams and stakeholders, applying Kanban-based project tracking, strong communication, and collaboration to enhance reliability and maintain scalability.</li>
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#38bdf8', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #38bdf8' }}
                        date={<span style={{ color: "black" }}>
                            July 2025 - Present
                        </span>}
                        iconStyle={{ background: '#38bdf8', color: '#fff' }}
                        icon={<MdOutlineWork />}
                    >
                        <h3 className="vertical-timeline-element-title" style={{ color: "black", fontFamily: "Poppins, sans-serif", fontWeight: '700' }}>Graduate Research Assistant</h3>
                        <h5 className="vertical-timeline-element-subtitle" style={{ color: "black", fontFamily: "Poppins, sans-serif", fontWeight: '600' }}>University of Florida | Gainesville, FL, USA</h5>
                        <ul>
                            <li style={{ fontFamily: "Poppins, sans-serif" }}>Enhanced a data-processing pipeline analyzing medical brain-slice imaging data using spaCy, Regex, and DocSift, improving extraction accuracy by 47% through analytical thinking and innovation.</li>
                            <li style={{ fontFamily: "Poppins, sans-serif" }}>Integrated the pipeline into a Flask-RESTful framework with asynchronous tasks and LLM-based retrieval using Hugging Face and BERT, showcasing adaptability and technical depth to reduce latency by 38%.</li>
                            <li style={{ fontFamily: "Poppins, sans-serif" }}>Developed deep-learning models (TensorFlow, Keras, PyTorch) for tissue classification, combining ML and vision tools (scikit-learn, OpenCV) while maintaining continuous learning and code quality via Docker-based CI/CD automation.</li>
                            <li style={{ fontFamily: "Poppins, sans-serif" }}>Created executive-ready presentations summarizing metrics, pipeline progress, and improvements, demonstrating clear communication and coordination in collaborative research environments.</li>
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#38bdf8', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #38bdf8' }}
                        date={<span style={{ color: "black" }}>
                            Jan 2023 - May 2024
                        </span>}
                        iconStyle={{ background: '#38bdf8', color: '#fff' }}
                        icon={<MdOutlineWork />}
                    >
                        <h3 className="vertical-timeline-element-title" style={{ color: "black", fontFamily: "Poppins, sans-serif", fontWeight: '700' }}>Software Development Engineer</h3>
                        <h5 className="vertical-timeline-element-subtitle" style={{ color: "black", fontFamily: "Poppins, sans-serif", fontWeight: '600' }}>Dollar Kirana | Kurnool, India</h5>
                        <ul>
                            <li style={{ fontFamily: "Poppins, sans-serif" }}>Built a SaaS-based cloud-native e-commerce and fintech-ready platform using React.js, Node.js, and PostgreSQL within a Service-Oriented Architecture (SOA) model, enabling secure payment processing, and improving scalability by 55%.</li>
                            <li style={{ fontFamily: "Poppins, sans-serif" }}>Integrated Kafka and RabbitMQ asynchronous messaging to handle cart updates and order events with zero data loss, maintaining high throughput, reliability, and strong customer focus even during peak traffic conditions.</li>
                            <li style={{ fontFamily: "Poppins, sans-serif" }}>Streamlined sales and inventory reporting pipelines using Python and Cassandra, applying analytical thinking and attention to detail to enhance forecasting accuracy by 40%.</li>
                            <li style={{ fontFamily: "Poppins, sans-serif" }}>Optimized microservices deployment and monitoring via Docker, Kubernetes, Grafana, and Prometheus, demonstrating strong problem-solving that ensured consistent low-latency (&lt;200 ms) API responses and faster feature rollouts.</li>
                        </ul>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </Row>
        </Container>



    </>
);

export default Experience;