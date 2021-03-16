import React from 'react';
import { Wrapper, Title, Menu } from './Style';
import { CustomButton } from '../../Buttons/Buttons';
import { BColumn, BContainer, BRow } from '../../Layout/Base';
import { BCard } from '../../Base/Card/Style';

function NewArrival() {
  return (
    <Wrapper>
      <Title>New Arrivals</Title>
      <Menu>
        <CustomButton activeColor="#d14031" color="white" mg={4}>
          All
        </CustomButton>
        <CustomButton
          color="white"
          hoverColor="#d14031"
          textColor="black"
          textHoverColor="white"
          mg={4}
        >
          Card Book
        </CustomButton>
        <CustomButton
          color="white"
          hoverColor="#d14031"
          textColor="black"
          textHoverColor="white"
          mg={4}
        >
          History
        </CustomButton>
        <CustomButton
          color="white"
          hoverColor="#d14031"
          textColor="black"
          textHoverColor="white"
          mg={4}
        >
          Fantancy
        </CustomButton>
        <CustomButton
          color="white"
          hoverColor="#d14031"
          textColor="black"
          textHoverColor="white"
          mg={4}
        >
          Romance
        </CustomButton>
        <CustomButton
          color="white"
          hoverColor="#d14031"
          textColor="black"
          textHoverColor="white"
          mg={4}
        >
          Science
        </CustomButton>
      </Menu>
      <BContainer p={10} between="true" wrap="true">
        <BCard xs={12} sm={6} md={3}>
          Xin chao
        </BCard>
        <BCard xs={12} sm={6} md={3}>
          Xin chao
        </BCard>
        <BCard xs={12} sm={6} md={3}>
          Xin chao
        </BCard>
        <BCard xs={12} sm={6} md={3}>
          Xin chao
        </BCard>
      </BContainer>
    </Wrapper>
  );
}

export default NewArrival;
