import React from 'react';
import { Wrapper } from './Style';
import Orders from './Orders/Orders';
import CheckoutMain from './CheckoutMain/CheckoutMain';

function Checkout() {
  return (
    <Wrapper>
      <CheckoutMain />
      <Orders />
    </Wrapper>
  );
}

export default Checkout;
