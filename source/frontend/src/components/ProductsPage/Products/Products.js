import React, { useState } from 'react';
import {
  Wrapper,
  Container,
  ProductList,
  WidgetWrapper,
  ProductListWrapper,
  ToolbarWrapper,
  Icon,
} from './Style';
import Card from '../../Base/Card/Card';

import Widget from '../../Base/Widget/Widget';
import Filter from '../../Base/Filter/Filter';

const WidgetData = [
  {
    id: 1,
    title: 'Category',
    selects: [
      { id: 1, content: 'all' },
      { id: 2, content: 'fiction' },
      { id: 3, content: 'history' },
      { id: 4, content: 'religion' },
      { id: 5, content: 'business' },
      { id: 6, content: 'science' },
    ],
  },
  {
    id: 2,
    title: 'Shop By Language',
    selects: [
      { id: 1, content: 'english' },
      { id: 2, content: 'spanish' },
      { id: 3, content: 'japanese' },
      { id: 4, content: 'korean' },
      { id: 5, content: 'vietnamese' },
      { id: 6, content: 'chinese' },
    ],
  },
];

const renderProducts = (products, ...options) => {
  if (products) {
    return products.map((item) => (
      <Card
        key={item.id}
        xs={6}
        sm={4}
        src={item.imageUrl}
        subTitle={item.author}
        title={item.title}
        text1={`${Math.floor(item.price * item.salePercent)}.00$`}
        text2={`${item.price}$`}
        id={item.id}
      />
    ));
  }
};

function Products({ data }) {
  const [shouldBeShowWidget, setShouldBeShowWidget] = useState(false);

  const handleLeftFilterIconClick = () => {
    setShouldBeShowWidget(!shouldBeShowWidget);
  };
  return (
    <Wrapper>
      <Container p={10} between="true">
        <WidgetWrapper shouldBeShowWidget={shouldBeShowWidget}>
          {WidgetData.map((item) => (
            <Widget key={item.id} title={item.title} selects={item.selects} />
          ))}
        </WidgetWrapper>
        <ProductListWrapper>
          <ToolbarWrapper p={0}>
            <Icon className="bx bx-filter" onClick={handleLeftFilterIconClick} />
            <Filter />
          </ToolbarWrapper>
          <ProductList>{renderProducts(data)}</ProductList>
        </ProductListWrapper>
      </Container>
    </Wrapper>
  );
}

export default Products;
