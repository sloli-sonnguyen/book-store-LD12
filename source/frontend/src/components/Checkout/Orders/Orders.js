import React from 'react';
import {
  Wrapper,
  Container,
  ProductList,
  ProductWrapper,
  ProductImageWrapper,
  ProductInfoWrapper,
  BookImage,
  TitleText,
  PriceText,
  MoreInfo,
  ImageTextWrapper,
  Badge,
  TotalList,
  TotalItemWrapper,
  TotalTitle,
  TotalWrapper,
  SmallUSD,
  TotalPrice,
} from './Style';

import { productCart } from '../../../FakeData/FakeData';

function Orders() {
  return (
    <Wrapper>
      <Container>
        <ProductList>
          {productCart.map((product) => (
            <ProductWrapper key={product.id}>
              <ImageTextWrapper>
                <ProductImageWrapper>
                  <BookImage src={product.img} alt="book" />
                  <Badge>{product.quantity}</Badge>
                </ProductImageWrapper>
                <ProductInfoWrapper>
                  <TitleText>{product.title}</TitleText>
                  <MoreInfo>
                    {product.type} / {product.language}
                  </MoreInfo>
                </ProductInfoWrapper>
              </ImageTextWrapper>
              <PriceText>${product.price}.00</PriceText>
            </ProductWrapper>
          ))}
        </ProductList>
        <TotalList>
          <TotalItemWrapper>
            <TotalTitle>Subtotal</TotalTitle>
            <PriceText>$920.00</PriceText>
          </TotalItemWrapper>
          <TotalItemWrapper>
            <TotalTitle>Shipping</TotalTitle>
            <PriceText>$20.64</PriceText>
          </TotalItemWrapper>
        </TotalList>
        <TotalWrapper>
          <TotalTitle>Total</TotalTitle>
          <TotalPrice>
            <SmallUSD>USD</SmallUSD>
            $940.00
          </TotalPrice>
        </TotalWrapper>
      </Container>
    </Wrapper>
  );
}

export default Orders;
