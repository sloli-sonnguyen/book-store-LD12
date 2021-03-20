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
  ClearDisplay,
} from './Style';

function Widget() {
  const [shouldBeFormatActive, setshouldBeFormatActive] = useState(false);
  const handleClickFormat = () => setshouldBeFormatActive(!shouldBeFormatActive);

  const [shouldBePriceActive, setshouldBePriceActive] = useState(false);
  const handleClickPrice = () => setshouldBePriceActive(!shouldBePriceActive);

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
              <ButtonPrice onClick={handleClickPrice}>
                {shouldBePriceActive ? (
                  <i className="bx bxs-up-arrow" />
                ) : (
                  <i className="bx bxs-down-arrow" />
                )}
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

              <WidgetShopByFormat click={shouldBePriceActive}>
                <ShopByFormat>
                  <ButtonFormat onClick={handleClickFormat}>
                    {shouldBeFormatActive ? (
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
                  <ClearDisplay click={shouldBeFormatActive}>a</ClearDisplay>
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
