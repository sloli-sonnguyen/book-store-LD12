import React from 'react';

import { BWrapper, BContainer, BFluidContainer, BRow, BColumn } from '../components/Layout/Base';
import NewArrivals from '../components/HomePage/NewArrivals/NewArrival';
import Header from '../components/commons/Header/Header';
import Footer from '../components/commons/Footer/Footer';
import Intro from '../components/HomePage/Intro/Intro';
import SupportTypes from '../components/HomePage/SupportTypes/SupportTypes';

function HomePage() {
  return (
    <BWrapper>
      <BFluidContainer>
        <Header />
      </BFluidContainer>
      <BFluidContainer column="true">
        <Intro />
        <BContainer p={10} column="true">
          <SupportTypes />
          <NewArrivals />
        </BContainer>
      </BFluidContainer>
      <BFluidContainer>
        <Footer />
      </BFluidContainer>
    </BWrapper>
  );
}

export default HomePage;
