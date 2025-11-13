import React from 'react';
import { Alert } from 'react-bootstrap';
import { Row } from 'react-bootstrap'
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);

  return (
    <>
      {showSuccessMessage && (
        <Alert variant="success" onClose={() => setShowSuccessMessage(false)} dismissible>
          Message sent successfully!
        </Alert>
      )}
      <div id="contact" className="contact-area section-padding">
        <div className="container">
          <motion.div
            className="section-title text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='modern-section-title'>Get in Touch</h2>
            <p className='modern-section-subtitle' style={{ maxWidth: '700px', margin: '0 auto' }}>
              I'm always open to hearing about exciting new opportunities in the software engineering field.
              If you're interested in working with a driven and knowledgeable developer, don't hesitate to get in touch.
            </p>
          </motion.div>
          <Row>
            <motion.div
              className="col-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="contact-info-row">
                <motion.div
                  className="single_address"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <i className="fa fa-map-marker"></i>
                  <h4 style={{ fontFamily: "Poppins, sans-serif", fontWeight: '600' }}>Address</h4>
                  <p style={{ fontFamily: "Poppins, sans-serif" }}>United States of America</p>
                </motion.div>
                <motion.div
                  className="single_address"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <i className="fa fa-phone"></i>
                  <h4 style={{ fontFamily: "Poppins, sans-serif", fontWeight: '600' }}>Call me on</h4>
                  <p style={{ fontFamily: "Poppins, sans-serif" }}>(+1) 352 246 5909</p>
                </motion.div>
                <motion.div
                  className="single_address"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <i className="fa fa-envelope"></i>
                  <h4 style={{ fontFamily: "Poppins, sans-serif", fontWeight: '600' }}>Send your message</h4>
                  <p style={{ fontFamily: "Poppins, sans-serif" }}>saiharshasomisetty12@gmail.com</p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="col-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', marginTop: '2rem' }}>
                <motion.a
                  className="btn btn-contact-bg"
                  href="mailto:saiharshasomisetty12@gmail.com"
                  onClick={() => setShowSuccessMessage(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.1rem',
                    padding: '16px 50px'
                  }}
                >
                  Email Me →
                </motion.a>
              </div>
            </motion.div>
          </Row>
        </div>
      </div>
      <div className="container p-4"></div>

      <motion.div
        className="text-center p-3"
        style={{
          backgroundColor: "rgba(56, 189, 248, 0.1)",
          fontFamily: "Poppins, sans-serif",
          borderTop: '2px solid rgba(56, 189, 248, 0.2)',
          fontSize: '0.95rem',
          color: '#666'
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Thank you for visiting! ✨
      </motion.div>


    </>
  );
};

export default ContactForm;
