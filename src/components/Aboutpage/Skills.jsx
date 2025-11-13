import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from "framer-motion";
import {
  FaCode,
  FaCogs,
  FaDatabase,
  FaChartBar,
  FaCloud,
  FaBrain,
  FaLightbulb,
  FaUsers
} from "react-icons/fa";

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <FaCode />,
      skills: ["Java", "Python", "C", "C++", ".NET", "C#", "JavaScript", "TypeScript", "Go", "Rust", "Scala", "Bash", "Swift"]
    },
    {
      title: "Frameworks",
      icon: <FaCogs />,
      skills: ["React.js", "Node.js", "Express.js", "Next.js", "Spring Boot", "Ruby on Rails", "Angular", "RabbitMQ", "Redux", "Apache Spark", "Kafka", "Flink", "HTML", "XML", "CSS", "Selenium", "JMeter", "Linux", "Git", "Postman"]
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      skills: ["MongoDB", "Cassandra", "Firebase", "InfluxDB", "DynamoDB", "MySQL", "PostgreSQL"]
    },
    {
      title: "Monitoring & Logging",
      icon: <FaChartBar />,
      skills: ["Elasticsearch", "Logstash", "Kibana", "Grafana", "Prometheus", "IntelliJ", "Maven", "Jenkins", "Nginx"]
    },
    {
      title: "Cloud Technologies",
      icon: <FaCloud />,
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "GCP", "Terraform", "Helm", "Ansible", "Lambda"]
    },
    {
      title: "AI/ML",
      icon: <FaBrain />,
      skills: ["TensorFlow", "Keras", "PyTorch", "Hugging Face", "OpenCV", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Large Language Models"]
    },
    {
      title: "Development Practices",
      icon: <FaLightbulb />,
      skills: ["SDLC", "Agile", "Scrum", "Kanban", "TDD", "Code Review", "Automation", "Scalability", "Reliability", "Performance Optimization", "Security", "Troubleshooting", "Debugging", "Cross-Functional Collaboration"]
    },
    {
      title: "Soft Skills & Strengths",
      icon: <FaUsers />,
      skills: ["Analytical Thinking", "Problem-Solving", "Innovation", "Attention to Detail", "Communication", "Collaboration", "Customer Focus", "Adaptability", "Continuous Learning", "Stakeholder Management"]
    }
  ];

  return (
    <Container style={{ paddingBottom: '60px' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Row style={{ justifyContent: "center", marginBottom: '3rem' }}>
          <Col xs={12} className="text-center">
            <h2 className='modern-section-title'>Skills & Technologies</h2>
            <p className='modern-section-subtitle'>
              A comprehensive overview of technologies and tools I work with
            </p>
          </Col>
        </Row>
      </motion.div>

      <Row style={{ justifyContent: "center" }}>
        {skillCategories.map((category, categoryIndex) => (
          <Col xs={12} md={6} lg={4} key={categoryIndex} style={{ marginBottom: '2rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                height: '100%',
                transition: 'all 0.3s ease'
              }}
              whileHover={{
                boxShadow: '0 15px 50px rgba(0, 0, 0, 0.12)',
                y: -5
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  fontSize: '2rem',
                  color: '#38bdf8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {category.icon}
                </div>
                <h4 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: '700',
                  fontSize: '1.3rem',
                  margin: 0,
                  color: '#191919'
                }}>
                  {category.title}
                </h4>
              </div>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.05, background: '#0ea5e9' }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'inline-block',
                      padding: '6px 14px',
                      background: '#38bdf8',
                      color: 'white',
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      fontFamily: 'Poppins, sans-serif',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Skills
