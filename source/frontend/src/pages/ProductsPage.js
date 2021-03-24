import React from 'react';
import { BWrapper, BFluidContainer } from '../components/Layout/Base';
import Header from '../components/commons/Header/Header';
import Footer from '../components/commons/Footer/Footer';
import Products from '../components/ProductsPage/Products/Products';
import Breadcrumb from '../components/Base/Breadcrumb/Breadcrumb';

function ProductsPage() {
  return (
    <BWrapper>
      <BFluidContainer>
        <Header p={18} />
      </BFluidContainer>
      <BFluidContainer column="true">
        <Breadcrumb />
        <Products />
      </BFluidContainer>
      <BFluidContainer>
        <Footer />
      </BFluidContainer>
    </BWrapper>
  );
}

export default ProductsPage;
