import React from 'react';
import { Wrapper, Container, ProductList, WidgetWrapper, ProductListWrapper } from './Style';
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
          <ProductList>xin chao nhe</ProductList>
        </ProductListWrapper>
      </Container>
      <Filter />
    </Wrapper>
  );
}

export default Products;
