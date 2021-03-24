import React from 'react';
import {
  Wrapper,
  Maps,
  InfoWrapper,
  TypeBlock,
  SmallText,
  BigText,
  Icon,
  IconWrapper,
  Circle,
} from './Style';

function Map() {
  return (
    <Wrapper p={10}>
      <InfoWrapper>
        <TypeBlock>
          <IconWrapper>
            <Circle />
            <Icon className="bx bxs-navigation" />
          </IconWrapper>
          <BigText>Address</BigText>
          <SmallText>62,74th Avenue-galendale NY 11385 , US</SmallText>
        </TypeBlock>
        <TypeBlock>
          <IconWrapper>
            <Circle />
            <Icon className="bx bx-mail-send" />
          </IconWrapper>
          <BigText>Email</BigText>
          <SmallText>Email:contact@example.com</SmallText>
        </TypeBlock>
        <TypeBlock>
          <IconWrapper>
            <Circle />
            <Icon className="bx bxs-phone" />
          </IconWrapper>
          <BigText>Phone</BigText>
          <SmallText>Call:+1800-1234-5678</SmallText>
        </TypeBlock>
        <TypeBlock>
          <IconWrapper>
            <Circle />
            <Icon className="bx bx-time-five" />
          </IconWrapper>
          <BigText>Timing</BigText>
          <SmallText>Available at 10am-8pm</SmallText>
        </TypeBlock>
      </InfoWrapper>
      <Maps
        title="map"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ122rzHasNTERA32pB1sq6VU&key=AIzaSyARaCZLctazKKgYZOMVVRRQjENUmap-9UI"
      />
    </Wrapper>
  );
}

export default Map;
