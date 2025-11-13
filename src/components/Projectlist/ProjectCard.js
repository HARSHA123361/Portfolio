import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiFillGithub } from "react-icons/ai";
import { MdHttp } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import { motion } from 'framer-motion';

function ProjectCard(props) {
  const isLottieAnimation = props.imgPath && props.imgPath.includes('lottie.host');

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="project-card-modern">
        {props.number && (
          <div className="project-number">
            {props.number}
          </div>
        )}

        {isLottieAnimation ? (
          <div style={{ height: '220px', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
            <iframe
              src={props.imgPath}
              style={{ width: '100%', height: '100%', border: 'none' }}
              title="Project Animation"
              allowFullScreen
            />
          </div>
        ) : (
          <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ borderRadius: '20px 20px 0 0' }} />
        )}

        <Card.Body style={{ padding: '2rem' }}>
          <Card.Title style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: '1.5rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: '#191919'
          }}>
            {props.title}
          </Card.Title>

          <Card.Text style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: '0.95rem',
            lineHeight: '1.7',
            color: '#666',
            marginBottom: '1.5rem'
          }}>
            {props.description}
          </Card.Text>

          <div style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {props.tags.map((tag, index) => (
              <span key={index} className="project-tag">
                {tag}
              </span>
            ))}
          </div>

          {props.isBlog && !props.paper && (
            <div className="button-container" style={{
              position: 'relative',
              display: 'flex',
              gap: '10px',
              justifyContent: 'center'
            }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="primary"
                  href={props.demoLink}
                  target="_blank"
                  className="demobtn"
                  style={{
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                    border: 'none',
                    borderRadius: '25px',
                    padding: '10px 25px',
                    fontWeight: '600'
                  }}
                >
                  Demo <MdHttp style={{ marginLeft: '5px' }} />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="primary"
                  href={props.ghLink}
                  target="_blank"
                  className="demobtn"
                  style={{
                    background: '#191919',
                    border: 'none',
                    borderRadius: '25px',
                    padding: '10px 25px',
                    fontWeight: '600'
                  }}
                >
                  GitHub <AiFillGithub style={{ marginLeft: '5px' }} />
                </Button>
              </motion.div>
            </div>
          )}

          {props.isBlog && props.paper && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                className="viewbtn"
                style={{
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                  border: 'none',
                  borderRadius: '25px',
                  width: '100%',
                  padding: '12px',
                  fontWeight: '600'
                }}
              >
                Demo <MdHttp style={{ marginLeft: '5px' }} />
              </Button>
            </motion.div>
          )}

          {!props.isBlog && !props.paper && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="viewbtn"
                variant="primary"
                href={props.ghLink}
                target="_blank"
                style={{
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                  border: 'none',
                  borderRadius: '25px',
                  width: '100%',
                  padding: '12px',
                  fontWeight: '600',
                  position: 'relative'
                }}
              >
                View on GitHub <AiFillGithub style={{ marginLeft: '5px' }} />
              </Button>
            </motion.div>
          )}

          {!props.isBlog && props.paper && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="viewbtn"
                variant="primary"
                href={props.paperLink}
                target="_blank"
                style={{
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                  border: 'none',
                  borderRadius: '25px',
                  width: '100%',
                  padding: '12px',
                  fontWeight: '600'
                }}
              >
                Read Publication <FaRegNewspaper style={{ marginLeft: '5px' }} />
              </Button>
            </motion.div>
          )}
        </Card.Body>
      </Card>
    </motion.div>
  );
}
export default ProjectCard;