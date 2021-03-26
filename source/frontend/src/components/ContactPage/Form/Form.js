import React from 'react';
import {
  Wrapper,
  SendUsAMessage,
  HeaderBorder,
  TypeContact,
  NameEmailPhone,
  ContactForMessage,
  ContactForName,
  ContactForEmail,
  ContactForPhone,
  ContactButton,
} from './Style';

function Form() {
  return (
    <Wrapper p={10} column="true">
      <SendUsAMessage>SEND US A MESSAGE</SendUsAMessage>
      <HeaderBorder />
      <TypeContact>
        <NameEmailPhone>
          <ContactForName type="text" placeholder="Name" />
          <ContactForEmail type="text" placeholder="Email" />
          <ContactForPhone type="text" placeholder="Phone" />
        </NameEmailPhone>
        <ContactForMessage type="text" placeholder="Message" />
      </TypeContact>
      <ContactButton>Send</ContactButton>
    </Wrapper>
  );
}

export default Form;
