import React from 'react';
import { Wrapper, Title } from './Style';
import { BContainer } from '../../Layout/Base';
import {
  Card,
  ImageWrap,
  ImageWrapOverLay,
  CardImage,
  CenterCardHoverLabel,
  CardSubTitle,
  CardTitle,
  CardText,
} from '../../Base/Card/Style';

function DailyDeals() {
  return (
    <Wrapper>
      <Title>DAILY DEALS</Title>
      <BContainer p={10} between="true">
        <Card xs={12} sm={6} md={3}>
          <ImageWrap>
            <ImageWrapOverLay />
            <CardImage src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-57_grande.jpg?v=1587119315" />
            <CenterCardHoverLabel>View</CenterCardHoverLabel>
          </ImageWrap>
          <CardSubTitle>DONALD WILLIAM</CardSubTitle>
          <CardTitle>Donate A Book</CardTitle>
          <CardText>$120.00 $700.00</CardText>
        </Card>
        <Card xs={12} sm={6} md={3}>
          <ImageWrap>
            <ImageWrapOverLay />
            <CardImage src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-95_b0b53360-a171-427b-9dc6-0bf965bcfdae_grande.jpg?v=1587120117" />
            <CenterCardHoverLabel>View</CenterCardHoverLabel>
          </ImageWrap>
          <CardSubTitle>DONALD WILLIAM</CardSubTitle>
          <CardTitle>Donate A Book</CardTitle>
          <CardText>$120.00 $700.00</CardText>
        </Card>
        <Card xs={12} sm={6} md={3}>
          <ImageWrap>
            <ImageWrapOverLay />
            <CardImage src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-25_grande.jpg?v=1587117046" />
            <CenterCardHoverLabel>View</CenterCardHoverLabel>
          </ImageWrap>
          <CardSubTitle>DONALD WILLIAM</CardSubTitle>
          <CardTitle>Donate A Book</CardTitle>
          <CardText>$120.00 $700.00</CardText>
        </Card>
        <Card xs={12} sm={6} md={3}>
          <ImageWrap>
            <ImageWrapOverLay />
            <CardImage src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-89_grande.jpg?v=1587115559" />
            <CenterCardHoverLabel>View</CenterCardHoverLabel>
          </ImageWrap>
          <CardSubTitle>DONALD WILLIAM</CardSubTitle>
          <CardTitle>Donate A Book</CardTitle>
          <CardText>$120.00 $700.00</CardText>
        </Card>
      </BContainer>
    </Wrapper>
  );
}

export default DailyDeals;
