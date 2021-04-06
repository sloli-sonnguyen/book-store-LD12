import React from 'react';
import Header from '../components/commons/Header/Header';
import Footer from '../components/commons/Footer/Footer';
import { BWrapper, BFluidContainer } from '../components/Layout/Base';
import BreadcrumbContainer from '../containers/BreadcrumbContainer';
import CartTable from '../components/CartPage/CartTable/CartTable';

function CartPage() {
  return (
    <BWrapper>
      <BFluidContainer>
        <Header p={10} />
      </BFluidContainer>
      <BFluidContainer column="true">
        <BreadcrumbContainer />
        <CartTable />
      </BFluidContainer>
      <BFluidContainer>
        <Footer />
      </BFluidContainer>
    </BWrapper>
  );
}

export default CartPage;
