import React, { useState } from 'react';
import {
  Wrapper,
  Container,
  ProductCategory,
  ProductItem,
  Category,
  WidgetShopByPrice,
  ShopByPrice,
  WidgetContentPrice,
  ProductPrice,
  ButtonPrice,
  WidgetContentFormat,
  WidgetContainer,
  WidgetShopByFormat,
  ShopByFormat,
  ButtonFormat,
} from './Style';

function Widget() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Wrapper>
      <Container>
        <Category>Category</Category>
        <ProductCategory>
          <ProductItem>History</ProductItem>
          <ProductItem>Fiction</ProductItem>
          <ProductItem>Business</ProductItem>
          <ProductItem>Crime</ProductItem>
          <ProductItem>Architechture</ProductItem>
          <ProductItem>Poetry</ProductItem>
        </ProductCategory>
        <WidgetContainer>
          <WidgetShopByPrice>
            <h1>Container</h1>
            <ShopByPrice>
              <ButtonPrice onClick={handleClick}>
                {click ? <i className="bx bxs-up-arrow" /> : <i className="bx bxs-down-arrow" />}
              </ButtonPrice>
              Shop By Price
            </ShopByPrice>
            <WidgetContentPrice>
              {/* WidgetContentPrice sẽ bọc tất cả của WidgetContentFormat */}
              <ProductPrice>$100 - $200</ProductPrice>
              <ProductPrice>$200 - $300</ProductPrice>
              <ProductPrice>$300 - $400</ProductPrice>
              <ProductPrice>$400 - $500</ProductPrice>
              <ProductPrice>$500 - $700</ProductPrice>

              <WidgetShopByFormat click={click}>
                <ShopByFormat>
                  <ButtonFormat onClick={handleClick}>
                    {click ? (
                      <i className="bx bxs-up-arrow" />
                    ) : (
                      <i className="bx bxs-down-arrow" />
                    )}
                  </ButtonFormat>
                  Shop By Format
                </ShopByFormat>

                <WidgetContentFormat>
                  <ProductPrice>Paperback</ProductPrice>
                  <ProductPrice>Hardcover</ProductPrice>
                  <ProductPrice>Kindle Edition</ProductPrice>
                  <ProductPrice>Large Print</ProductPrice>
                  <ProductPrice>Audible Audiobook</ProductPrice>
                </WidgetContentFormat>
              </WidgetShopByFormat>
            </WidgetContentPrice>
          </WidgetShopByPrice>
        </WidgetContainer>
      </Container>
    </Wrapper>
  );
}

export default Widget;
