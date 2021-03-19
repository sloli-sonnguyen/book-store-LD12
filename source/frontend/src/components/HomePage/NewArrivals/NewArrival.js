import React from 'react';
import { Wrapper, Title, Menu } from './Style';
import { CustomButton } from '../../Buttons/Buttons';
import { BContainer } from '../../Layout/Base';
import {
  Card,
  CardImage,
  CardSubTitle,
  CardText,
  CardTitle,
  Span,
  CenterCardHoverLabel,
  ImageWrap,
  ImageWrapOverLay,
  TopLeftCardLabel,
  TopRightCardLabel,
} from '../../Base/Card/Style';

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
            <ImageWrapOverLay />
            <CardImage src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-101_grande.jpg?v=1587115881" />
            <TopLeftCardLabel>Sale</TopLeftCardLabel>
            <TopRightCardLabel>Save 80%</TopRightCardLabel>
            <CenterCardHoverLabel>View</CenterCardHoverLabel>
          </ImageWrap>
          <CardSubTitle>DONALD WILLIAM</CardSubTitle>
          <CardTitle>Donate A Book</CardTitle>
          <CardText>
            $120.00
            <Span>$700.00</Span>
          </CardText>
        </Card>
        <Card xs={12} sm={6} md={3}>
          <ImageWrap>
            <ImageWrapOverLay />
            <CardImage src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-102_grande.jpg?v=1587120877" />
            <CenterCardHoverLabel>View</CenterCardHoverLabel>
          </ImageWrap>
          <CardSubTitle>DONALD WILLIAM</CardSubTitle>
          <CardTitle>Donate A Book</CardTitle>
          <CardText>$120.00</CardText>
        </Card>
        <Card xs={12} sm={6} md={3}>
          <ImageWrap>
            <ImageWrapOverLay />
            <CardImage src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-44_grande.jpg?v=1587117561" />
            <CenterCardHoverLabel>View</CenterCardHoverLabel>
          </ImageWrap>
          <CardSubTitle>DONALD WILLIAM</CardSubTitle>
          <CardTitle>Donate A Book</CardTitle>
          <CardText>$120.00</CardText>
        </Card>
        <Card xs={12} sm={6} md={3}>
          <ImageWrap>
            <ImageWrapOverLay />
            <CardImage src="http://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-34_grande.jpg?v=1587116925" />
            <CenterCardHoverLabel>View</CenterCardHoverLabel>
          </ImageWrap>
          <CardSubTitle>DONALD WILLIAM</CardSubTitle>
          <CardTitle>Donate A Book</CardTitle>
          <CardText>$120.00</CardText>
        </Card>
        <Card xs={12} sm={6} md={3}>
          <ImageWrap>
            <ImageWrapOverLay />
            <CardImage src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-57_grande.jpg?v=1587119315" />
            <CenterCardHoverLabel>View</CenterCardHoverLabel>
          </ImageWrap>
          <CardSubTitle>DONALD WILLIAM</CardSubTitle>
          <CardTitle>Donate A Book</CardTitle>
          <CardText>$120.00</CardText>
        </Card>
        <Card xs={12} sm={6} md={3}>
          <ImageWrap>
            <ImageWrapOverLay />
            <CardImage src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-95_b0b53360-a171-427b-9dc6-0bf965bcfdae_grande.jpg?v=1587120117" />
            <CenterCardHoverLabel>View</CenterCardHoverLabel>
          </ImageWrap>
          <CardSubTitle>DONALD WILLIAM</CardSubTitle>
          <CardTitle>Donate A Book</CardTitle>
          <CardText>$120.00</CardText>
        </Card>
        <Card xs={12} sm={6} md={3}>
          <ImageWrap>
            <ImageWrapOverLay />
            <CardImage src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-25_grande.jpg?v=1587117046" />
            <CenterCardHoverLabel>View</CenterCardHoverLabel>
          </ImageWrap>
          <CardSubTitle>DONALD WILLIAM</CardSubTitle>
          <CardTitle>Donate A Book</CardTitle>
          <CardText>
            $120.00
            <Span>$200.00</Span>
          </CardText>
        </Card>
        <Card xs={12} sm={6} md={3}>
          <ImageWrap>
            <ImageWrapOverLay />
            <CardImage src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-89_grande.jpg?v=1587115559" />
            <CenterCardHoverLabel>View</CenterCardHoverLabel>
          </ImageWrap>
          <CardSubTitle>DONALD WILLIAM</CardSubTitle>
          <CardTitle>Donate A Book</CardTitle>
          <CardText>
            $120.00
            <Span>$400.00</Span>
          </CardText>
        </Card>
      </BContainer>
    </Wrapper>
  );
}

export default NewArrival;
