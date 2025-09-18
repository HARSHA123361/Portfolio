import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import { SiC, SiCplusplus } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAngularSimple,
} from "react-icons/di";
import {
  SiPostman,
  SiPostgresql,
  SiSpringboot,
  SiTensorflow,
  SiDotnet,
  SiExpress,
  SiRubyonrails,
  SiRabbitmq,
  SiRedux,
  SiApachespark,
  SiApachekafka,
  SiApacheflink,
  SiApachecassandra,
  SiFirebase,
  SiInfluxdb,
  SiAmazondynamodb,
  SiMysql,
  SiElasticsearch,
  SiLogstash,
  SiKibana,
  SiGrafana,
  SiPrometheus,
  SiJenkins,
  SiNginx,
  SiAmazonaws,
  SiMicrosoftazure,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiTerraform,
  SiHelm,
  SiAnsible,
  SiAwslambda,
  SiKeras,
  SiPytorch,
  SiOpencv,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiLinux,
  SiSelenium,
  SiApachejmeter,
  SiApachemaven,
} from "react-icons/si";
import {
  TbBrandTypescript,
  TbBrandGolang,
  TbBrandNextjs,
  TbBrandRust,
} from "react-icons/tb";
import {
  AiFillHtml5,
  AiOutlineRobot,
} from "react-icons/ai";
import {
  BsFiletypeCss,
} from "react-icons/bs";
import {
} from "react-icons/fa";
import {
  SiScala,
  SiSwift,
  SiGnubash,
} from "react-icons/si";





import { motion } from "framer-motion";


function Skills() {
  return (
    <Container>
      <Row style={{ justifyContent: "center" }}>
        <h3 className='skillshead' style={{ fontFamily: "aveneir next" }}>Languages</h3>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <DiJava />
            <h5 style={{ color: '#38bdf8' }}>Java</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <DiPython />
            <h5 style={{ color: '#38bdf8' }}>Python</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiC style={{ fontSize: '0.6em' }} />
            <h5 style={{ color: '#38bdf8' }}>C</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiCplusplus style={{ fontSize: '0.6em' }} />
            <h5 style={{ color: '#38bdf8' }}>C++</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiDotnet />
            <h5 style={{ color: '#38bdf8' }}>C#</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <DiJavascript1 />
            <h5 style={{ color: '#38bdf8' }}>JavaScript</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <TbBrandTypescript />
            <h5 style={{ color: '#38bdf8' }}>TypeScript</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <TbBrandGolang />
            <h5 style={{ color: '#38bdf8' }}>Go</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <TbBrandRust />
            <h5 style={{ color: '#38bdf8' }}>Rust</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiScala />
            <h5 style={{ color: '#38bdf8' }}>Scala</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiGnubash />
            <h5 style={{ color: '#38bdf8' }}>Bash</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiSwift />
            <h5 style={{ color: '#38bdf8' }}>Swift</h5>
          </motion.div>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <h3 className='skillshead' style={{ fontFamily: "aveneir next", paddingTop: "60px" }}>Frameworks</h3>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {/* Frameworks */}
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <DiReact />
            <h5 style={{ color: '#38bdf8' }}>React.js</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <DiNodejs />
            <h5 style={{ color: '#38bdf8' }}>Node.js</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiExpress />
            <h5 style={{ color: '#38bdf8' }}>Express.js</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <TbBrandNextjs />
            <h5 style={{ color: '#38bdf8' }}>Next.js</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiSpringboot />
            <h5 style={{ color: '#38bdf8' }}>Spring Boot</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiRubyonrails />
            <h5 style={{ color: '#38bdf8' }}>Ruby on Rails</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <DiAngularSimple />
            <h5 style={{ color: '#38bdf8' }}>Angular</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiRabbitmq />
            <h5 style={{ color: '#38bdf8' }}>RabbitMQ</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiRedux />
            <h5 style={{ color: '#38bdf8' }}>Redux</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiApachespark />
            <h5 style={{ color: '#38bdf8' }}>Apache Spark</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiApachekafka />
            <h5 style={{ color: '#38bdf8' }}>Kafka</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiApacheflink />
            <h5 style={{ color: '#38bdf8' }}>Flink</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <AiFillHtml5 />
            <h5 style={{ color: '#38bdf8' }}>HTML</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <AiFillHtml5 />
            <h5 style={{ color: '#38bdf8' }}>XML</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <BsFiletypeCss />
            <h5 style={{ color: '#38bdf8' }}>CSS</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiSelenium />
            <h5 style={{ color: '#38bdf8' }}>Selenium</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiApachejmeter />
            <h5 style={{ color: '#38bdf8' }}>JMeter</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiLinux />
            <h5 style={{ color: '#38bdf8' }}>Linux</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <DiGit />
            <h5 style={{ color: '#38bdf8' }}>Git</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiPostman />
            <h5 style={{ color: '#38bdf8' }}>Postman</h5>
          </motion.div>
        </Col>
      </Row>

      {/* Databases Section */}
      <Row style={{ justifyContent: "center" }}>
        <h3 className='skillshead' style={{ fontFamily: "aveneir next", paddingTop: "60px" }}>Databases</h3>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <DiMongodb />
            <h5 style={{ color: '#38bdf8' }}>MongoDB</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiApachecassandra />
            <h5 style={{ color: '#38bdf8' }}>Cassandra</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiFirebase />
            <h5 style={{ color: '#38bdf8' }}>Firebase</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiInfluxdb />
            <h5 style={{ color: '#38bdf8' }}>InfluxDB</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiAmazondynamodb />
            <h5 style={{ color: '#38bdf8' }}>DynamoDB</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiMysql />
            <h5 style={{ color: '#38bdf8' }}>MySQL</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiPostgresql />
            <h5 style={{ color: '#38bdf8' }}>PostgreSQL</h5>
          </motion.div>
        </Col>
      </Row>

      {/* Monitoring and Logging Section */}
      <Row style={{ justifyContent: "center" }}>
        <h3 className='skillshead' style={{ fontFamily: "aveneir next", paddingTop: "60px" }}>Monitoring & Logging</h3>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiElasticsearch />
            <h5 style={{ color: '#38bdf8' }}>Elasticsearch</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiLogstash />
            <h5 style={{ color: '#38bdf8' }}>Logstash</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiKibana />
            <h5 style={{ color: '#38bdf8' }}>Kibana</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiGrafana />
            <h5 style={{ color: '#38bdf8' }}>Grafana</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiPrometheus />
            <h5 style={{ color: '#38bdf8' }}>Prometheus</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <div style={{
              fontSize: '1.2em',
              fontWeight: 'bold',
              color: '#38bdf8',
              fontFamily: 'Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '60px',
              letterSpacing: '2px',
              lineHeight: '1',
              marginBottom: '10px',
              marginTop: '35px'
            }}>IJ</div>
            <h5 style={{ color: '#38bdf8' }}>IntelliJ</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiApachemaven />
            <h5 style={{ color: '#38bdf8' }}>Maven</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiJenkins />
            <h5 style={{ color: '#38bdf8' }}>Jenkins</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiNginx />
            <h5 style={{ color: '#38bdf8' }}>Nginx</h5>
          </motion.div>
        </Col>
      </Row>

      {/* Cloud Technologies Section */}
      <Row style={{ justifyContent: "center" }}>
        <h3 className='skillshead' style={{ fontFamily: "aveneir next", paddingTop: "60px" }}>Cloud Technologies</h3>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiAmazonaws />
            <h5 style={{ color: '#38bdf8' }}>AWS</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiMicrosoftazure />
            <h5 style={{ color: '#38bdf8' }}>Azure</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiDocker />
            <h5 style={{ color: '#38bdf8' }}>Docker</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiKubernetes />
            <h5 style={{ color: '#38bdf8' }}>Kubernetes</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiGooglecloud />
            <h5 style={{ color: '#38bdf8' }}>GCP</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiTerraform />
            <h5 style={{ color: '#38bdf8' }}>Terraform</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiHelm />
            <h5 style={{ color: '#38bdf8' }}>Helm</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiAnsible />
            <h5 style={{ color: '#38bdf8' }}>Ansible</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiAwslambda />
            <h5 style={{ color: '#38bdf8' }}>Lambda</h5>
          </motion.div>
        </Col>
      </Row>

      {/* AI/ML Section */}
      <Row style={{ justifyContent: "center" }}>
        <h3 className='skillshead' style={{ fontFamily: "aveneir next", paddingTop: "60px" }}>AI/ML</h3>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiTensorflow />
            <h5 style={{ color: '#38bdf8' }}>TensorFlow</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiKeras />
            <h5 style={{ color: '#38bdf8' }}>Keras</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiPytorch />
            <h5 style={{ color: '#38bdf8' }}>PyTorch</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <DiPython />
            <h5 style={{ color: '#38bdf8' }}>Hugging Face</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiOpencv />
            <h5 style={{ color: '#38bdf8' }}>OpenCV</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiScikitlearn />
            <h5 style={{ color: '#38bdf8' }}>Scikit-learn</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiPandas />
            <h5 style={{ color: '#38bdf8' }}>Pandas</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SiNumpy />
            <h5 style={{ color: '#38bdf8' }}>NumPy</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <DiPython />
            <h5 style={{ color: '#38bdf8' }}>Matplotlib</h5>
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <AiOutlineRobot />
            <h5 style={{ color: '#38bdf8' }}>Large Language Models</h5>
          </motion.div>
        </Col>
      </Row>
    </Container>
  )
}

export default Skills