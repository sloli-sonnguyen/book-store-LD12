import React from 'react';

import { BWrapper, BFluidContainer } from '../components/Layout/Base';
import Breadcrumb from '../components/Base/Breadcrumb/Breadcrumb';
import About from '../components/AboutPage/About';

function AboutPage() {
  return (
    <BWrapper>
      <BFluidContainer column="true">
        <Breadcrumb title="About" />
        <About />
      </BFluidContainer>
    </BWrapper>
  );
}

export default AboutPage;
