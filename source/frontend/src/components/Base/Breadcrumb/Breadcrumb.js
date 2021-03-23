import React from 'react';
import { Wrapper, Container, Title, SubTitle } from './Style';

function Breadcrumb(props) {
  const { title, subTitle } = props;
  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </Container>
    </Wrapper>
  );
}

export default Breadcrumb;
