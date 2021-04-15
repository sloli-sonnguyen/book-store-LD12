import React from 'react';
import { BWrapper, BFluidContainer } from '../components/Layout/Base';
import Breadcrumb from '../components/Base/Breadcrumb/Breadcrumb';
import CartTable from '../components/CartPage/CartTable/CartTable';

function CartPage() {
  return (
    <BWrapper>
      <BFluidContainer column="true">
        <Breadcrumb title="Cart" />
        <CartTable />
      </BFluidContainer>
    </BWrapper>
  );
}

export default CartPage;
