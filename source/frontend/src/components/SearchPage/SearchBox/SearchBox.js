import React from 'react';
import { Wrapper, Container, Title, SearchWrap, Input, SearchButton } from './Style';

function SearchBox() {
  return (
    <Wrapper>
      <Container p={10}>
        <Title>Your search for &quot;a&quot; revealed the following:</Title>
        <SearchWrap>
          <Input />
          <SearchButton>Submit</SearchButton>
        </SearchWrap>
      </Container>
    </Wrapper>
  );
}

export default SearchBox;
