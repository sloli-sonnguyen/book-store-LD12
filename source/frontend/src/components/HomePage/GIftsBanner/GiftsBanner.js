import React from 'react';
import { Wrapper, Content, Title, Text } from './Style';
import { Button } from '../../Buttons/Buttons';

function GiftsBanner() {
  return (
    <Wrapper>
      <Content>
        <Title>Wonderful Gifts</Title>
        <Text>Give your family and friends a book</Text>
        <Button>Show Now</Button>
      </Content>
    </Wrapper>
  );
}

export default GiftsBanner;
