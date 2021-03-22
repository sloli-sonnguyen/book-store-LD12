import React from 'react';
import Header from '../components/commons/Header/Header';
import Footer from '../components/commons/Footer/Footer';
import { BWrapper, BFluidContainer } from '../components/Layout/Base';
import Form from '../components/ContactPage/Form/Form';

function ContactPage() {
  return (
    <BWrapper>
      <BFluidContainer>
        <Header />
      </BFluidContainer>
      <BFluidContainer column="true">
        <Form />
      </BFluidContainer>
      <BFluidContainer>
        <Footer />
      </BFluidContainer>
    </BWrapper>
  );
}

export default ContactPage;
