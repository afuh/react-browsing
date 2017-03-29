import React from 'react';
import Chance from 'chance';

const Contact = () => {
  return (
    <div>
      <h1>Restaurant name</h1>
        <div>
          <h3>Reservations: </h3>
          <span>{chance.phone()}</span>
          <span>{chance.email({domain: 'example.com'})}</span>
        </div>
        <div>
          <h3>Adress: </h3>
          <span>{chance.address()}</span>
          <span>{chance.city()}</span>
          <span>{chance.country({ full: true })}</span>
        </div>
    </div>
  )
};

export default Contact;
