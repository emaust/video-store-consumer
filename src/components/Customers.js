import React, { Component } from 'react';
import Customer from './Customer';
// import Library from './components/Library';

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
    <div>
      {customerComponents}
    </div>
  )
}

export default Customers;
