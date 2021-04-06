import React from 'react';
import Header from '../components/commons/Header/Header';
import Footer from '../components/commons/Footer/Footer';
import { BWrapper, BFluidContainer } from '../components/Layout/Base';
import Form from '../components/ContactPage/Form/Form';
import BreadcrumbContainer from '../containers/BreadcrumbContainer';
import Map from '../components/ContactPage/Map/Map';

function ContactPage() {
  return (
    <BWrapper>
      <BFluidContainer>
        <Header p={10} />
      </BFluidContainer>
      <BFluidContainer column="true">
        <BreadcrumbContainer />
        <Map />
        <Form />
      </BFluidContainer>
      <BFluidContainer>
        <Footer />
      </BFluidContainer>
    </BWrapper>
  );
}

export default ContactPage;
