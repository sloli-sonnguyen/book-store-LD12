import React from 'react';
import { BWrapper, BFluidContainer } from '../components/Layout/Base';
import Checkout from '../components/Checkout/Checkout';

function CheckoutPage() {
  return (
    <BWrapper>
      <BFluidContainer>
        <Checkout />
      </BFluidContainer>
    </BWrapper>
  );
}

export default CheckoutPage;
