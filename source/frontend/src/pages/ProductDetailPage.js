import React from 'react';
import { BWrapper, BFluidContainer } from '../components/Layout/Base';
import Header from '../components/commons/Header/Header';
import Footer from '../components/commons/Footer/Footer';
import BreadcrumbContainer from '../containers/BreadcrumbContainer';
import MainContent from '../components/ProductDetailPage/MainContent/MainContent';
import RelatedProducts from '../components/ProductDetailPage/RelatedProducts/RelatedProducts';
import TabsContainer from '../components/ProductDetailPage/TabsContainer/TabsContainer';

function ProductDetailPage() {
  return (
    <BWrapper>
      <BFluidContainer>
        <Header p={18} />
      </BFluidContainer>
      <BFluidContainer column="true">
        <BreadcrumbContainer />
        <MainContent />
        <TabsContainer />
        <RelatedProducts />
      </BFluidContainer>
      <BFluidContainer>
        <Footer />
      </BFluidContainer>
    </BWrapper>
  );
}

export default ProductDetailPage;
