import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from "framer-motion";
import {
  FaPalette,
  FaCogs,
  FaDatabase,
  FaCloud,
  FaChartBar,
  FaStar
} from "react-icons/fa";

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <FaPalette />,
      skills: [
        "Java", "Python", "C", "C++", ".NET", "C#", "JavaScript",
        "TypeScript", "Go", "Rust", "Scala", "Bash", "Swift"
      ]
    },
    {
      title: "Frameworks",
      icon: <FaCogs />,
      skills: [
        "React.js", "Node.js", "Express.js", "Next.js", "Spring Boot",
        "Ruby on Rails", "Angular", "RabbitMQ", "Redux", "Apache Spark",
        "Kafka", "Flink", "HTML", "XML", "CSS", "Selenium", "JMeter",
        "Linux", "Git", "Postman"
      ]
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      skills: [
        "MongoDB", "Cassandra", "Firebase", "InfluxDB", "DynamoDB",
        "MySQL", "PostgreSQL"
      ]
    },
    {
      title: "Monitoring & Logging",
      icon: <FaChartBar />,
      skills: [
        "Elasticsearch", "Logstash", "Kibana", "Grafana", "Prometheus",
        "IntelliJ", "Maven", "Jenkins", "Nginx"
      ]
    },
    {
      title: "Cloud Technologies",
      icon: <FaCloud />,
      skills: [
        "AWS", "Azure", "Docker", "Kubernetes", "GCP", "Terraform",
        "Helm", "Ansible", "Lambda"
      ]
    },
    {
      title: "AI/ML",
      icon: <FaStar />,
      skills: [
        "TensorFlow", "Keras", "PyTorch", "Hugging Face", "OpenCV",
        "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Large Language Models"
      ]
    }
  ];

  const accentColors = ["#38bdf8", "#0ea5e9", "#22d3ee", "#60a5fa", "#06b6d4", "#3b82f6"]; // sky-blue variants
  const chipBgColors = [
    "rgba(56, 189, 248, 0.15)",
    "rgba(14, 165, 233, 0.15)",
    "rgba(34, 211, 238, 0.15)",
    "rgba(96, 165, 250, 0.15)",
    "rgba(6, 182, 212, 0.15)",
    "rgba(59, 130, 246, 0.15)"
  ];

  return (
    <Container>
      <Row style={{ justifyContent: "center" }}>
        <h3 className='skillshead' style={{ fontFamily: "aveneir next", marginBottom: "40px" }}>Skills & Expertise</h3>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {skillCategories.map((category, index) => {
          const accent = accentColors[index % accentColors.length];
          const chipBg = chipBgColors[index % chipBgColors.length];
          return (
            <Col xs={12} md={6} lg={4} key={index} style={{ marginBottom: "30px" }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '28px',
                  height: '100%',
                  border: '1px solid #e6eef7',
                  boxShadow: '0 10px 30px rgba(2, 132, 199, 0.08)'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px',
                  color: accent
                }}>
                  <div style={{
                    fontSize: '28px',
                    marginRight: '12px',
                    color: accent
                  }}>
                    {category.icon}
                  </div>
                  <h4 style={{
                    fontFamily: "aveneir next",
                    color: '#0f172a',
                    margin: 0,
                    fontSize: '20px'
                  }}>
                    {category.title}
                  </h4>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.07 }}
                      style={{
                        background: chipBg,
                        color: accent,
                        padding: '8px 14px',
                        borderRadius: '24px',
                        fontSize: '14px',
                        fontFamily: "aveneir next",
                        border: `1px solid ${accent}33`,
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Skills