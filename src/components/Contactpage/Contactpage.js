import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap';
import ContactForm from './ContactForm';

function Contactpage() {
  return (
    <div className='contactbackground'>
      <Container>
        {/* <p className='contactpara'> I’m currently searching for opportunities for a front-end developer role. <br /> If there is any vacancy my inbox is always open. Whether <br /> you have any further questions or just want to say hi, <br /> I’ll try my best to get back to you!</p>
        <button
          className='contactbtn'
          onClick={() => {
            window.open("https://wa.me/+918156811884");
          }}
        >Say Hello</button> */}
        <ContactForm/>
        
      </Container>
    </div>
  )
}

export default Contactpage