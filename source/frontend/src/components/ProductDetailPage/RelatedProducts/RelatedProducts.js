import React from 'react';
import { Wrapper, Container } from './Style';
import Card from '../../Base/Card/Card';
import { books } from '../../../FakeData/FakeData';

const slideBooks = books.slice(0, 4);

function RelatedProducts() {
  return (
    <Wrapper>
      <Container p={18}>
        {slideBooks.map((item) => (
          <Card
            xs={12}
            sm={6}
            md={3}
            src={item.imageUrl}
            subTitle={item.author}
            title={item.title}
            text1={`${item.salePrice}$`}
            text2={`${item.normalPrice}$`}
            id={item.id}
          />
        ))}
      </Container>
    </Wrapper>
  );
}

export default RelatedProducts;
