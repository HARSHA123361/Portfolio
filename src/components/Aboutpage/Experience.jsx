import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork } from "react-icons/md";
import { Container, Row } from 'react-bootstrap'
import { motion } from "framer-motion";

const Experience = () => (
    <>
        <Container>
            <Row style={{ justifyContent: "center" }}>
                <h3 className='skillshead' style={{ fontFamily: "aveneir next", marginBottom: "20px" }}>Experience</h3>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    style={{ width: '100%' }}
                >
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
                            <h3 className="vertical-timeline-element-title" style={{ color: "black", fontFamily: "aveneir next" }}>Software Engineer Intern</h3>
                            <h5 className="vertical-timeline-element-subtitle" style={{ color: "black", fontFamily: "aveneir next" }}>Intersect Healthcare Systems</h5>
                            <ul>
                                <li style={{ fontFamily: "aveneir next" }}>Developed a full-stack healthcare application with React.js and TypeScript, integrating Node.js, Express.js, and RESTful APIs to enable secure data exchange. Augmented real-time patient data access speed by 30%, reducing delays in clinical workflows.</li>
                                <li style={{ fontFamily: "aveneir next" }}>Automated quality workflows by setting up CI/CD pipelines in GitHub Actions, managing version control in GitHub, & applying test automation with Selenium and JMeter. Cut deployment failures by 25% and shortened release cycles by 40%.</li>
                                <li style={{ fontFamily: "aveneir next" }}>Deployed Azure services with Docker, Kubernetes, and Cosmos DB, boosting scalability and cutting downtime by 35%.</li>
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
                            <h3 className="vertical-timeline-element-title" style={{ color: "black", fontFamily: "aveneir next" }}>Graduate Research Assistant</h3>
                            <h5 className="vertical-timeline-element-subtitle" style={{ color: "black", fontFamily: "aveneir next" }}>University of Florida</h5>
                            <ul>
                                <li style={{ fontFamily: "aveneir next" }}>Enhanced a data-processing pipeline to analyze medical brain-slice imaging data, using spaCy, Regex, and a custom module (DocSift) for cleaning, tagging, and structuring metadata, improving extraction accuracy by 47%.</li>
                                <li style={{ fontFamily: "aveneir next" }}>Integrated the pipeline into a Flask-RESTful framework with asynchronous tasks for preprocessing, feature extraction, and summarization, while building LLM-based retrieval using Hugging Face Transformers and BERT, reducing latency by 38%.</li>
                                <li style={{ fontFamily: "aveneir next" }}>Built and compared deep learning models with TensorFlow, Keras, and PyTorch for tissue classification and pattern recognition; combined them with scikit-learn, OpenCV, Pandas, NumPy, and Matplotlib for hybrid ML-vision analysis, automated via GitHub Actions and Docker for CI/CD and reproducible experiments.</li>
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
                            <h3 className="vertical-timeline-element-title" style={{ color: "black", fontFamily: "aveneir next" }}>Software Development Engineer</h3>
                            <h5 className="vertical-timeline-element-subtitle" style={{ color: "black", fontFamily: "aveneir next" }}>Dollar Kirana</h5>
                            <ul>
                                <li style={{ fontFamily: "aveneir next" }}>Built a cloud-native e-commerce platform using React.js, Node.js, & PostgreSQL, enabling smooth product browsing, secure checkout, which reduced page load times by 55% and significantly strengthened scalability as customer traffic steadily increased.</li>
                                <li style={{ fontFamily: "aveneir next" }}>Implemented asynchronous messaging with RabbitMQ to process cart updates and order events, ensuring zero data loss, maintaining high throughput, and delivering consistent system performance even during sustained peak conditions.</li>
                                <li style={{ fontFamily: "aveneir next" }}>Streamlined sales and inventory reporting pipelines with Python and the distributed database Cassandra, replacing slow manual workflows, improving efficiency by 40%, minimizing human error, & enabling faster, more reliable, accurate demand forecasting.</li>
                                <li style={{ fontFamily: "aveneir next" }}>Orchestrated microservices with Docker and Kubernetes, optimizing deployments, improving scalability, enhancing fault tolerance, and consistently achieving sub-200ms API responses with faster release cycles that significantly improved the checkout experience.</li>
                                <li style={{ fontFamily: "aveneir next" }}>Monitored infrastructure and services using Grafana, Prometheus, and ELK stack, fine-tuning configurations to optimize system performance and reduce downtime, while ensuring the platform remained stable, secure, and cost-efficient during growth.</li>
                            </ul>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </motion.div>
            </Row>
        </Container>



    </>
);

export default Experience;