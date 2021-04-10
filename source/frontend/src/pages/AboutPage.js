import React from 'react';

import { BWrapper, BFluidContainer } from '../components/Layout/Base';
import Header from '../components/commons/Header/Header';
import Footer from '../components/commons/Footer/Footer';
import Breadcrumb from '../components/Base/Breadcrumb/Breadcrumb';
import About from '../components/AboutPage/About';

function AboutPage() {
  return (
    <BWrapper>
      <BFluidContainer>
        <Header p={10} />
      </BFluidContainer>
      <BFluidContainer column="true">
        <Breadcrumb title="About" />
        <About />
      </BFluidContainer>
      <BFluidContainer>
        <Footer />
      </BFluidContainer>
    </BWrapper>
  );
}

export default AboutPage;
