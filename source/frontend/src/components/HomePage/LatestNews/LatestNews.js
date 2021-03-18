import React from 'react';
import { Wrapper, Container, Title } from './Style';
import { Button } from '../../Buttons/Buttons';
import {
  Card,
  CardSubTitle,
  CardTitle,
  CardText,
  ImageWrap,
  CardImage,
  CenterCardHoverLabel,
  ImageWrapOverLay,
} from '../../Base/Card/Style';

function LatestNews() {
  return (
    <Wrapper>
      <Title>LATEST NEWS</Title>
      <Container p={18} between="true" wrap="true">
        <Card xs={12} md={4}>
          <ImageWrap NoneEffect="true">
            <CardImage src="https://cdn.shopify.com/s/files/1/0359/5979/9852/articles/blog-1.jpg?v=1585546169" />
            <ImageWrapOverLay />
            <CenterCardHoverLabel>View</CenterCardHoverLabel>
          </ImageWrap>
          <CardSubTitle>Ramamoorthi M</CardSubTitle>
          <CardTitle>Books changed my ideology</CardTitle>
          <CardText>
            The standard Lorem Ipsum passage, used since the 1500s &quot;Lorem ipsum...
          </CardText>
          <Button>Show Now</Button>
        </Card>
        <Card xs={12} md={4}>
          <ImageWrap NoneEffect="true">
            <CardImage src="https://cdn.shopify.com/s/files/1/0359/5979/9852/articles/blog-2.jpg?v=1585546218" />
            <ImageWrapOverLay />
            <CenterCardHoverLabel>View</CenterCardHoverLabel>
          </ImageWrap>
          <CardSubTitle>Ramamoorthi M</CardSubTitle>
          <CardTitle>Books changed my ideology</CardTitle>
          <CardText>
            The standard Lorem Ipsum passage, used since the 1500s &quot;Lorem ipsum...
          </CardText>
          <Button>Show Now</Button>
        </Card>
        <Card xs={12} md={4}>
          <ImageWrap NoneEffect="true">
            <CardImage src="https://cdn.shopify.com/s/files/1/0359/5979/9852/articles/blog-3.jpg?v=1585546251" />
            <ImageWrapOverLay />
            <CenterCardHoverLabel>View</CenterCardHoverLabel>
          </ImageWrap>
          <CardSubTitle>Ramamoorthi M</CardSubTitle>
          <CardTitle>Books changed my ideology</CardTitle>
          <CardText>
            The standard Lorem Ipsum passage, used since the 1500s &quot;Lorem ipsum...
          </CardText>
          <Button>Show Now</Button>
        </Card>
      </Container>
    </Wrapper>
  );
}

export default LatestNews;
