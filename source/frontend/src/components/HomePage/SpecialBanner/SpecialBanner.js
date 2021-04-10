import React from 'react';
import { Wrapper, ContentWrap, Content, Title, SubTitle, Text } from './Style';
import { CustomButton } from '../../Buttons/Buttons';

function SpecialBanner() {
  return (
    <Wrapper>
      <ContentWrap p={10}>
        <Content>
          <SubTitle>Special Offers</SubTitle>
          <Title>30% Discount on books Learn Language</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Text>
          <CustomButton color="black" hoverColor="#d14031" as="a" href="/products" target="_blank">
            Shop Now
          </CustomButton>
        </Content>
      </ContentWrap>
    </Wrapper>
  );
}

export default SpecialBanner;
