import React, { Component } from 'react';
import Library from './components/Library';

const Customers = ({customers, returnCustomer}) => {
  const customerComponents = customers.map((customer) => {
    return (
      <Customer
        name={customer.name}
        address={customer.address}
        city={customer.city}
        state={customer.state}
        postalCode={customer.postalCode}
        phone={customer.phone}
        credit={customer.credit}
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