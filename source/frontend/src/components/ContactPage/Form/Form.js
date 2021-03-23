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
    <div>
      <Wrapper>
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
    </div>
  );
}

export default Form;
