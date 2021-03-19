import React from 'react';
import { Wrapper, Container, Column } from './Style';
import Widget from '../../Base/Widget/Widget';
import Filter from '../../Base/Filter/Filter';

function Products() {
  return (
    <Wrapper>
      <Container p={10} wrap="true" between="true">
        <Column>
          <Widget />
        </Column>
        <Column>Products here</Column>
      </Container>
      <Filter />
    </Wrapper>
  );
}

export default Products;
