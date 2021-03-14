import React from 'react';
import { BWrapper, BContainer, BFluidContainer, BRow, BColumn } from '../components/Layout/Base';
import NewArrivals from '../components/HomePage/NewArrivals/NewArrival';
import Header from '../components/commons/Header/Header';
import Footer from '../components/commons/Footer/Footer';

function HomePage() {
  return (
    <BWrapper>
      <BFluidContainer>
        <Header />
      </BFluidContainer>
      <BContainer>
        <BRow>
          <NewArrivals />
        </BRow>
      </BContainer>
      <BFluidContainer>
        <Footer />
      </BFluidContainer>
    </BWrapper>
  );
}

export default HomePage;
