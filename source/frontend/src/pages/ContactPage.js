import React from 'react';
import { BWrapper, BFluidContainer } from '../components/Layout/Base';
import Form from '../components/ContactPage/Form/Form';
import Breadcrumb from '../components/Base/Breadcrumb/Breadcrumb';
import Map from '../components/ContactPage/Map/Map';

function ContactPage() {
  return (
    <BWrapper>
      <BFluidContainer column="true">
        <Breadcrumb title="Contact" />
        <Map />
        <Form />
      </BFluidContainer>
    </BWrapper>
  );
}

export default ContactPage;
