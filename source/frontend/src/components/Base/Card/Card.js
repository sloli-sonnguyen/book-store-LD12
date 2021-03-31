import React from 'react';
import {
  CardWrapper,
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
} from './Style';

function Card(props) {
  const { id, src, subTitle, title, text1, text2, ...restProps } = props;
  return (
    <CardWrapper {...restProps}>
      <ImageWrap>
        <ImageWrapOverLay />
        <CardImage src={src} />
        <TopLeftCardLabel>Sale</TopLeftCardLabel>
        <TopRightCardLabel>Save 80%</TopRightCardLabel>
        <CenterCardHoverLabel as="a" href={`/products/${id}`}>
          View
        </CenterCardHoverLabel>
      </ImageWrap>
      <CardSubTitle>{subTitle}</CardSubTitle>
      <CardTitle>{title}</CardTitle>
      <CardText>
        {text1}
        <Span>{text2}</Span>
      </CardText>
    </CardWrapper>
  );
}

export default Card;
