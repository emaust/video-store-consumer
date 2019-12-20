import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Customer.css'

const Customer = (props) => {

  const { name, address, city, state, postalCode, phone, credit, buttonText, onButtonClick } = props;

  return (
    <div className="card customer-card">
      <section className="card customer-card-header">
        {name}
      </section>
      <section className="customer-card-body">
        <p>{address}</p>
        <p>{city} {state} {postalCode}</p>
        <p>{phone}</p>
        <p>{credit}</p>
      </section>

      <button className="btn btn-primary" onClick={onButtonClick} >
        {buttonText}
      </button>
    </div>
  )
}
export default Customer;
