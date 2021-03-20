import React from 'react';
import { Wrapper, Container, Column, Title, Input, Text, SubscribeButton, Form } from './Style';

function Subcribe() {
  return (
    <Wrapper>
      <Container p={10}>
        <Column md={7}>
          <Title>SUBSCRIBE TO OUR NEWS LETTER</Title>
          <Text>
            Enter your email address to receive regular updates, as well as news on upcoming events
            and specific offers.
          </Text>
        </Column>
        <Column md={5}>
          <Form>
            <Input placeholder="Email address" />
            <SubscribeButton>Subscribe</SubscribeButton>
          </Form>
        </Column>
      </Container>
    </Wrapper>
  );
}

export default Subcribe;
