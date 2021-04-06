import React, { useState } from 'react';
import {
  Wrapper,
  Container,
  Logo,
  Footer,
  LogoContainer,
  OrdersContainer,
  OrdersSummaryTitleWrapper,
  OrdersSummaryWrapper,
  Icon,
  Dropdown,
} from './Style';

import {
  ProductWrapper,
  ProductList,
  ImageTextWrapper,
  ProductImageWrapper,
  BookImage,
  Badge,
  ProductInfoWrapper,
  TitleText,
  MoreInfo,
  PriceText,
  TotalItemWrapper,
  TotalTitle,
  TotalList,
  TotalWrapper,
  TotalPrice,
  SmallUSD,
} from '../Orders/Style';

import Information from './Information/Information';
import Shipping from './Shipping/Shipping';
import Payment from './Payment/Payment';

import { productCart } from '../../../FakeData/FakeData';

function CheckoutMain() {
  const [shouldOrders, setShouldOrders] = useState(false);
  const [currentMain, setCurrentMain] = useState(2);
  const handleClick = () => {
    setShouldOrders(!shouldOrders);
  };

  const quantity = productCart.length;
  const calcHeight = () => {
    const height = 12 + quantity * 6;
    return height;
  };

  return (
    <Wrapper>
      <LogoContainer>
        <Logo src="https://cdn.shopify.com/s/files/1/0359/5979/9852/t/2/assets/logo.png?3626" />
      </LogoContainer>
      <OrdersContainer onClick={handleClick}>
        <OrdersSummaryWrapper>
          <OrdersSummaryTitleWrapper>
            <Icon className="bx bxs-cart" />
            Show order summary
            {shouldOrders ? (
              <Icon className="bx bx-chevron-down" />
            ) : (
              <Icon className="bx bx-chevron-up" />
            )}
          </OrdersSummaryTitleWrapper>
          <TotalPrice>$940.00</TotalPrice>
        </OrdersSummaryWrapper>
        <Dropdown height={calcHeight()} shouldOrders={shouldOrders}>
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
        </Dropdown>
      </OrdersContainer>
      <Container>
        {currentMain === 0 && <Information />}
        {currentMain === 1 && <Shipping />}
        {currentMain === 2 && <Payment />}
        <Footer>All rights reserved Bookly-theme</Footer>
      </Container>
    </Wrapper>
  );
}

export default CheckoutMain;
