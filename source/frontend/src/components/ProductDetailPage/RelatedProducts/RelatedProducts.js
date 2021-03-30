import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Wrapper, Container, SlideButton, Title } from './Style';
import Card from '../../Base/Card/Card';
import { books } from '../../../FakeData/FakeData';

const slideBooks = books;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 },
];

const myArrow = () => <SlideButton>button</SlideButton>;
function RelatedProducts() {
  return (
    <Wrapper>
      <Container p={18}>
        <Title>Related Products</Title>
        <Carousel
          breakPoints={breakPoints}
          renderArrow={myArrow}
          enableAutoPlay
          autoPlaySpeed={1500}
        >
          {slideBooks.map((item) => (
            <Card
              key={item.id}
              xs={12}
              src={item.imageUrl}
              subTitle={item.author}
              title={item.title}
              text1={`${item.salePrice}$`}
              text2={`${item.normalPrice}$`}
              id={item.id}
            />
          ))}
        </Carousel>
      </Container>
    </Wrapper>
  );
}

export default RelatedProducts;
