import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Customer from './Customer';



const Customers = ({customers, selectCustomer}) => {
  const customerComponents = customers.map((customer) => {
    return (
      <Customer
        key={customer.id}
        name={customer.name}
        address={customer.address}
        city={customer.city}
        state={customer.state}
        postalCode={customer.postalCode}
        phone={customer.phone}
        credit={customer.credit}
        buttonText="Select Customer for Checkout"
        onButtonClick={ () => selectCustomer(customer.id)}
        />
      )
  })

  return (
    <div align="center">
      {customerComponents}
    </div>
  )
}

export default Customers;
