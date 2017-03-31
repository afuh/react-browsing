import React from 'react';
import Chance from 'chance';

const Contact = () => {
  return (
    <div className="contact-cont">
      <h1>Restaurant name</h1>
      <div className="col">
        <div className="contact col">
          <h3>Reservations</h3>
          <span>(714) 591-7407</span>
          <span>reservations@example.com</span>
        </div>
        <div className="contact col">
          <h3>Adress</h3>
          <span>112 Example road</span>
          <span>10997, Berlin</span>
          <span>Germany</span>
        </div>
      </div>
    </div>
  )
};

export default Contact;
