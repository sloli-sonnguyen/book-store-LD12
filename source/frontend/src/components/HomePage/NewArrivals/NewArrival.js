import React from 'react';
import { Wrapper, Title, Menu } from './Style';
import { CustomButton } from '../../Buttons/Buttons';
import { BContainer } from '../../Layout/Base';
import { Card, CardImage, ImageWrap, ImageWrapOverLay } from '../../Base/Card/Style';

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
        <Card xs={12} sm={6} md={3}>
          <ImageWrap>
            <CardImage src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-101_grande.jpg?v=1587115881" />
            <ImageWrapOverLay />
          </ImageWrap>
        </Card>
        <Card xs={12} sm={6} md={3}>
          <ImageWrap>
            <CardImage src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-102_grande.jpg?v=1587120877" />
          </ImageWrap>
        </Card>
        <Card xs={12} sm={6} md={3}>
          <ImageWrap>
            <CardImage src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-44_grande.jpg?v=1587117561" />
          </ImageWrap>
        </Card>
        <Card xs={12} sm={6} md={3}>
          <ImageWrap>
            <CardImage src="http://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-34_grande.jpg?v=1587116925" />
          </ImageWrap>
        </Card>
      </BContainer>
    </Wrapper>
  );
}

export default NewArrival;
