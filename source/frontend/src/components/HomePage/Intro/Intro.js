import React from 'react';
import {
  IntroWrapper,
  IntroContainer,
  MediumIntroText,
  BigIntroText,
  SmallIntroText,
  IntroButton,
} from './Style';

function Intro() {
  return (
    <IntroWrapper>
      <IntroContainer p={18} column="true">
        <MediumIntroText>Year end sale</MediumIntroText>
        <BigIntroText>Get 70% off for all design books</BigIntroText>
        <SmallIntroText>
          Donec sodales sagittis magna. SedMaecenas nec odio et ante tincidunt tempus. Donec vitae
          sapien ut libero venenatis faucibus. Nullam quis ante.
        </SmallIntroText>
        <IntroButton as="a" href="/products" target="_blank">
          Shop now
        </IntroButton>
      </IntroContainer>
    </IntroWrapper>
  );
}

export default Intro;
