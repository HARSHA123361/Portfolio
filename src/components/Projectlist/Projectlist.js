import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
// Removed unused local image imports; all projects use Lottie embeds now

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center" }}>
            <h3 className='skillshead' style={{ fontFamily: "aveneir next" }}>Projects</h3>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col xs={12} md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath="https://lottie.host/embed/9c05c2fd-da88-48a1-946d-cc828356f46b/QpQ05SKqz2.lottie"
                isBlog={false}
                paper={false}
                title="AI-Powered Ingredient Substitution System"
                description="Developed a machine learning system for ingredient substitution using NLP embeddings (Word2Vec, BERT), achieving 89% accuracy in predicting replacements. Built data-driven pipelines with Scikit-learn and TensorFlow for model training, integrated Pandas for preprocessing, and optimized performance for real-world recipe datasets."
                ghLink="https://github.com/HARSHA123361/Ingredients-System"
                tags={["Python", "NLP", "Word2Vec", "BERT", "Scikit-learn", "TensorFlow", "Pandas"]}
              />
            </Col>

            <Col xs={12} md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath="https://lottie.host/embed/aeb00e91-84ad-423f-af4b-b99947619dee/QFKBjdXShb.lottie"
                isBlog={false}
                paper={false}
                title="Crypto Dashboard"
                description="Built a responsive cryptocurrency dashboard with real-time prices, multi-API fallback (CoinGecko, CoinPaprika, CoinLore, Coinranking), caching, and retry mechanisms for reliable uptime and accuracy. Designed a resilient frontend with dark/light theming, CORS proxy rotation, progressive loading indicators, and mobile-optimized UI, deployed seamlessly on Vercel and Firebase Hosting."
                ghLink="https://github.com/HARSHA123361/Crypto_DashBoard"
                tags={["Next.js", "React", "Tailwind CSS", "Context API", "CoinGecko API", "Firebase", "Vercel"]}
              />
            </Col>

            <Col xs={12} md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath="https://lottie.host/embed/d824d5e9-3339-4b84-b5c7-89ed865a48c9/ZTrMIr6LLO.lottie"
                isBlog={false}
                paper={false}
                title="Expense Tracker"
                description="Built a cross-platform expense tracker app with budget management, expense logging, and interactive visualizations, achieving 92% accuracy in spending insights. Designed a responsive UI for higher engagement and optimized performance using Redux for efficient state handling, Node.js/Express APIs, and Firebase sync."
                ghLink="https://github.com/HARSHA123361/ExpenseTracker"
                tags={["React Native", "TypeScript", "Redux", "Node.js", "Express", "MongoDB", "Firebase"]}
              />
            </Col>

            <Col xs={12} md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath="https://lottie.host/embed/a81ba3d4-aa2c-49b0-8c33-6826f1d4ff4f/GUVQCbwbs1.lottie"
                isBlog={false}
                paper={false}
                title="Incident Analysis Web App"
                description="Developed a web application that extracts incident data from Norman Police Department PDFs/URLs using PyMuPDF, enriches datasets with geocoding and feature engineering, and visualizes insights through clustering maps, bar charts, and pie charts. Built an interactive Streamlit interface with file upload and URL input, integrated K-Means clustering, Plotly visualizations, and automated test coverage with pytest for data validation and geocoding accuracy."
                ghLink="https://github.com/HARSHA123361/cis6930fa24-project3"
                tags={["Python", "Streamlit", "Pandas", "scikit-learn", "PyMuPDF", "Plotly", "Geopy", "Nominatim API"]}
              />
            </Col>

            <Col xs={12} md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath="https://lottie.host/embed/ecee5953-6e20-45d6-8568-184b59968f65/FVywO2zRyr.lottie"
                isBlog={false}
                paper={false}
                title="Virtual Healthcare Assistant"
                description="Developed a virtual healthcare assistant using NLP models (BERT) to provide instant medical advice and triage support, achieving 92% accuracy in intent classification and symptom mapping. Built custom ML models with TensorFlow to predict potential conditions with 87% precision and implemented a recommendation engine suggesting next steps such as doctor consultations or OTC medication."
                ghLink="https://github.com/HARSHA123361/Virtual-Health-Assiatant"
                tags={["Python", "NLP", "BERT", "TensorFlow", "Scikit-learn"]}
              />
            </Col>

            <Col xs={12} md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath="https://lottie.host/embed/27276806-ec1b-46f7-bd58-c3f64e82ef0a/R5Ky6RMw4p.lottie"
                isBlog={false}
                paper={false}
                title="Online School Management System"
                description="Developed a full-stack school management system enabling schools to add, edit, delete, and manage student records with a relational MySQL backend. Built dynamic web pages with JSP and JavaScript for responsive interactivity, deployed on Apache Tomcat, ensuring efficient data handling and seamless browser-based access."
                ghLink="https://github.com/HARSHA123361/Online_School_Management_System"
                tags={["Java", "JSP", "HTML", "CSS", "JavaScript", "MySQL", "Apache Tomcat"]}
              />
            </Col>

            <Col xs={12} md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath="https://lottie.host/embed/285dafe4-f1a8-4989-9283-a41b562a48e0/Czb8ePy1ub.lottie"
                isBlog={false}
                paper={false}
                title="Music Recommendation using Facial Expressions"
                description="Trained a deep learning model with TensorFlow & Keras using OpenCV, mapping emotions to music playlists. Integrated the model into a Flask web app for real-time facial emotion detection and personalized music recommendations, enhancing accuracy by 92%, reducing latency, and boosting user engagement."
                ghLink="https://github.com/HARSHA123361/Emotion-Detection-using-Facial-Expression"
                tags={["Python", "OpenCV", "TensorFlow", "Keras", "Flask"]}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist