import React from 'react';
import { Wrapper, Container } from './Style';
import { Button } from '../../Buttons/Buttons';
import {
  CardWrapper,
  CardSubTitle,
  CardTitle,
  CardText,
  ImageWrap,
  CardImage,
  CenterCardHoverLabel,
  ImageWrapOverLay,
} from '../../Base/Card/Style';

const blogs = [
  {
    id: 0,
    img: 'https://cdn.shopify.com/s/files/1/0359/5979/9852/articles/blog-1.jpg?v=1585546169',
    subTitle: 'Ramamoorthi M',
    title: 'Books changed my ideology',
    text: 'The standard Lorem Ipsum passage, used since the 1500s &quot;Lorem ipsum...',
  },
  {
    id: 1,
    img: 'https://cdn.shopify.com/s/files/1/0359/5979/9852/articles/blog-2.jpg?v=1585546218',
    subTitle: 'Ramamoorthi M',
    title: 'Books changed my ideology',
    text: 'The standard Lorem Ipsum passage, used since the 1500s &quot;Lorem ipsum...',
  },
  {
    id: 2,
    img: 'https://cdn.shopify.com/s/files/1/0359/5979/9852/articles/blog-3.jpg?v=1585546251',
    subTitle: 'Ramamoorthi M',
    title: 'Books changed my ideology',
    text: 'The standard Lorem Ipsum passage, used since the 1500s &quot;Lorem ipsum...',
  },
  {
    id: 3,
    img: 'https://cdn.shopify.com/s/files/1/0359/5979/9852/articles/blog-7.JPG?v=1585981240',
    subTitle: 'Ramamoorthi M',
    title: 'Books changed my ideology',
    text: 'The standard Lorem Ipsum passage, used since the 1500s &quot;Lorem ipsum...',
  },
  {
    id: 4,
    img: 'https://cdn.shopify.com/s/files/1/0359/5979/9852/articles/blog-6.JPG?v=1585981209',
    subTitle: 'Ramamoorthi M',
    title: 'Books changed my ideology',
    text: 'The standard Lorem Ipsum passage, used since the 1500s &quot;Lorem ipsum...',
  },
  {
    id: 5,
    img: 'https://cdn.shopify.com/s/files/1/0359/5979/9852/articles/blog-10.JPG?v=1585981370',
    subTitle: 'Ramamoorthi M',
    title: 'Books changed my ideology',
    text: 'The standard Lorem Ipsum passage, used since the 1500s &quot;Lorem ipsum...',
  },
  {
    id: 6,
    img: 'https://cdn.shopify.com/s/files/1/0359/5979/9852/articles/blog-9.JPG?v=1585981316',
    subTitle: 'Ramamoorthi M',
    title: 'Books changed my ideology',
    text: 'The standard Lorem Ipsum passage, used since the 1500s &quot;Lorem ipsum...',
  },
  {
    id: 7,
    img: 'https://cdn.shopify.com/s/files/1/0359/5979/9852/articles/blog-11.JPG?v=1585981380',
    subTitle: 'Ramamoorthi M',
    title: 'Books changed my ideology',
    text: 'The standard Lorem Ipsum passage, used since the 1500s &quot;Lorem ipsum...',
  },
  {
    id: 8,
    img: 'https://cdn.shopify.com/s/files/1/0359/5979/9852/articles/blog-8.JPG?v=1585981274',
    subTitle: 'Ramamoorthi M',
    title: 'Books changed my ideology',
    text: 'The standard Lorem Ipsum passage, used since the 1500s &quot;Lorem ipsum...',
  },
];

function BlogsGallery() {
  return (
    <Wrapper>
      <Container p={18} between="true">
        {blogs.map((blog) => (
          <CardWrapper xs={12} md={4}>
            <ImageWrap NoneEffect="true">
              <CardImage src={blog.img} />
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
    </Wrapper>
  );
}

export default BlogsGallery;
