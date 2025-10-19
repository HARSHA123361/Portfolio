import React from 'react';
import { Alert } from 'react-bootstrap';
import { Row } from 'react-bootstrap'

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
          <div className="section-title text-center">
            <h1 style={{ fontFamily: "aveneir next" }}>Get in Touch</h1>
            <p style={{ fontFamily: "aveneir next !important" }}>I'm always open to hearing about exciting new opportunities in the software engineering field. If you're interested in working with a driven and knowledgeable developer, don't hesitate to get in touch.</p>
          </div>
          <Row>
            <div className="col-12">
              <div className="contact-info-row">
                <div className="single_address">
                  <i className="fa fa-map-marker"></i>
                  <h4 style={{ fontFamily: "aveneir next" }}>Address</h4>
                  <p style={{ fontFamily: "aveneir next" }}>Gainesville, FL</p>
                </div>
                <div className="single_address">
                  <i className="fa fa-phone"></i>
                  <h4 style={{ fontFamily: "aveneir next" }}>Call me on</h4>
                  <p style={{ fontFamily: "aveneir next" }}>(+1) 352 246 5909</p>
                </div>
                <div className="single_address">
                  <i className="fa fa-envelope"></i>
                  <h4 style={{ fontFamily: "aveneir next" }}>Send your message</h4>
                  <p style={{ fontFamily: "aveneir next" }}>saiharshasomisetty12@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <a className="btn btn-contact-bg" href="mailto:saiharshasomisetty12@gmail.com" onClick={() => setShowSuccessMessage(true)}>Email Me</a>
              </div>
            </div>
          </Row>
        </div>
      </div>
      <span></span>
      <span></span>
      <span></span>
      <div className="container p-4"></div>

      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", fontFamily: "aveneir next" }}>
        Thank You for visiting.
      </div>


    </>
  );
};

export default ContactForm;
