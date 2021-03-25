import React from 'react';
import {
  Wrapper,
  Container,
  ProductList,
  WidgetWrapper,
  ProductListWrapper,
  ToolbarWrapper,
  DisplaySelect,
  GridSelect,
  ListSelect,
} from './Style';
import Card from '../../Base/Card/Card';

import Widget from '../../Base/Widget/Widget';
import Filter from '../../Base/Filter/Filter';

const WidgetData = [
  {
    id: 1,
    title: 'Category',
    selects: [
      { id: 1, content: 'History' },
      { id: 2, content: 'Fiction' },
      { id: 3, content: 'Business' },
      { id: 4, content: 'Literature' },
      { id: 5, content: 'Religion' },
      { id: 6, content: 'Stories' },
    ],
  },
  {
    id: 2,
    title: 'Shop By Language',
    selects: [
      { id: 1, content: 'English' },
      { id: 2, content: 'Spanish' },
      { id: 3, content: 'Japanese' },
      { id: 4, content: 'Korean' },
      { id: 5, content: 'Vietnamese' },
      { id: 6, content: 'Italia' },
    ],
  },
];

function Products() {
  return (
    <Wrapper>
      <Container p={10} between="true">
        <WidgetWrapper>
          {WidgetData.map((item) => (
            <Widget key={item.id} title={item.title} selects={item.selects} />
          ))}
        </WidgetWrapper>
        <ProductListWrapper>
          <ToolbarWrapper p={0}>
            <DisplaySelect>
              <GridSelect className="bx bxs-grid-alt" />
              <ListSelect className="bx bx-list-ul" />
            </DisplaySelect>
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
