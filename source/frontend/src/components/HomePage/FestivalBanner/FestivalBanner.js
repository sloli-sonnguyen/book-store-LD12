import React from 'react';
import { Wrapper, Title, SubTitle, Text } from './Style';
import { Button } from '../../Buttons/Buttons';

function FestivalBanner() {
  return (
    <Wrapper>
      <SubTitle>Shop wide range of collections</SubTitle>
      <Title>BOOK FESTIVAL</Title>
      <Text>ALL BOOKS ARE FLAT 50% OFF</Text>
      <Button>Shop Now</Button>
    </Wrapper>
  );
}

export default FestivalBanner;
