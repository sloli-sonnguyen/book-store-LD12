import React from 'react';
import { Wrapper, Container, PaginationWrapper } from './Style';
import { Button } from '../../Buttons/Buttons';
import Pagination from '../Pagination/Pagination';
import Card from '../Card/Card';
import {
  CardWrapper,
  CardSubTitle,
  CardTitle,
  CardText,
  ImageWrap,
  CardImage,
  CenterCardHoverLabel,
  ImageWrapOverLay,
} from '../Card/Style';

import { blogs, books } from '../../../FakeData/FakeData';

function Gallery({ type }) {
  if (type === 'blogs') {
    return (
      <Wrapper>
        <Container p={18} between="true">
          {blogs.map((blog) => (
            <CardWrapper xs={12} md={4} key={blog.id}>
              <ImageWrap NoneEffect="true">
                <CardImage src={blog.imageUrl} />
                <ImageWrapOverLay />
                <CenterCardHoverLabel>View</CenterCardHoverLabel>
              </ImageWrap>
              <CardSubTitle>{blog.subTitle}</CardSubTitle>
              <CardTitle>{blog.title}</CardTitle>
              <CardText>{blog.text}</CardText>
              <Button>Read More</Button>
            </CardWrapper>
          ))}
        </Container>
        <PaginationWrapper>
          <Pagination />
        </PaginationWrapper>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Container p={10} between="true">
        {books.map((item) => (
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
      <PaginationWrapper>
        <Pagination />
      </PaginationWrapper>
    </Wrapper>
  );
}

export default Gallery;
