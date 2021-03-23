import React from 'react';
import {
  Wrapper,
  Container,
  ProductList,
  WidgetWrapper,
  ProductListWrapper,
  ToolbarWrapper,
} from './Style';
import Card from '../../Base/Card/Card';

import Widget from '../../Base/Widget/Widget';
import Filter from '../../Base/Filter/Filter';

function Products() {
  return (
    <Wrapper>
      <Container p={10} between="true">
        <WidgetWrapper>
          <Widget />
        </WidgetWrapper>
        <ProductListWrapper>
          <ToolbarWrapper>
            <h1>DisplaySelect</h1>
            <Filter />
          </ToolbarWrapper>
          <ProductList>
            <Card
              xs={6}
              sm={4}
              src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-46_grande.jpg?v=1587118513"
              subTitle="DONALD WILLIAM"
              title="Donate A Book"
              text1="$120.00"
              text2="$700.00"
            />
            <Card
              xs={6}
              sm={4}
              src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-104_grande.jpg?v=1587120877"
              subTitle="DONALD WILLIAM"
              title="Donate A Book"
              text1="$120.00"
              text2="$700.00"
            />
            <Card
              xs={6}
              sm={4}
              src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-67_grande.jpg?v=1587117773"
              subTitle="DONALD WILLIAM"
              title="Donate A Book"
              text1="$120.00"
              text2="$700.00"
            />
            <Card
              xs={6}
              sm={4}
              src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-46_grande.jpg?v=1587118513"
              subTitle="DONALD WILLIAM"
              title="Donate A Book"
              text1="$120.00"
              text2="$700.00"
            />
            <Card
              xs={6}
              sm={4}
              src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-104_grande.jpg?v=1587120877"
              subTitle="DONALD WILLIAM"
              title="Donate A Book"
              text1="$120.00"
              text2="$700.00"
            />
            <Card
              xs={6}
              sm={4}
              src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-67_grande.jpg?v=1587117773"
              subTitle="DONALD WILLIAM"
              title="Donate A Book"
              text1="$120.00"
              text2="$700.00"
            />
            <Card
              xs={6}
              sm={4}
              src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-46_grande.jpg?v=1587118513"
              subTitle="DONALD WILLIAM"
              title="Donate A Book"
              text1="$120.00"
              text2="$700.00"
            />
            <Card
              xs={6}
              sm={4}
              src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-104_grande.jpg?v=1587120877"
              subTitle="DONALD WILLIAM"
              title="Donate A Book"
              text1="$120.00"
              text2="$700.00"
            />
            <Card
              xs={6}
              sm={4}
              src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-67_grande.jpg?v=1587117773"
              subTitle="DONALD WILLIAM"
              title="Donate A Book"
              text1="$120.00"
              text2="$700.00"
            />
          </ProductList>
        </ProductListWrapper>
      </Container>
    </Wrapper>
  );
}

export default Products;
