import React, { Component } from 'react';

const Customer = (props) => {

  const { name, address, city, state, postalCode, phone, credit } = props;

  return (
    <div className="customer-container">
      <h3>
        {name}
      </h3>
      <section>
        <p>{address}</p>
        <p>{city} {state} {postalCode}</p>
        <p>{phone}</p>
        <p>{credit}</p>
      </section>
    </div>
      
  )
}
export default Customer;