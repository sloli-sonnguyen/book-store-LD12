import React from 'react';
import { IntroWrapper, IntroContainer, MediumText, BigText, SmallText, IntroButton } from './Style';

function Intro() {
  return (
    <IntroWrapper>
      <IntroContainer p={0} column="true">
        <MediumText>Year end sale</MediumText>
        <BigText>Get 70% off for all design books</BigText>
        <SmallText>
          Donec sodales sagittis magna. SedMaecenas nec odio et ante tincidunt tempus. Donec vitae
          sapien ut libero venenatis faucibus. Nullam quis ante.
        </SmallText>
        <IntroButton>Shop now</IntroButton>
      </IntroContainer>
    </IntroWrapper>
  );
}

export default Intro;
