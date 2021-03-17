import React from 'react';

import { BWrapper, BFluidContainer } from '../components/Layout/Base';
import NewArrivals from '../components/HomePage/NewArrivals/NewArrival';
import Header from '../components/commons/Header/Header';
import Footer from '../components/commons/Footer/Footer';
import Intro from '../components/HomePage/Intro/Intro';
import SupportTypes from '../components/HomePage/SupportTypes/SupportTypes';
import FestivalBanner from '../components/HomePage/FestivalBanner/FestivalBanner';
import DailyDeals from '../components/HomePage/DailyDeals/DailyDeals';

function HomePage() {
  return (
    <BWrapper>
      <BFluidContainer>
        <Header />
      </BFluidContainer>
      <BFluidContainer column="true">
        <Intro />
        <SupportTypes />
        <NewArrivals />
        <FestivalBanner />
        <DailyDeals />
      </BFluidContainer>
      <BFluidContainer>
        <Footer />
      </BFluidContainer>
    </BWrapper>
  );
}

export default HomePage;
