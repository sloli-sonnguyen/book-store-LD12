import React from 'react';
import { Wrapper } from './Style';
import Form from './Form/Form';
import Comment from './Comment/Comment';

function BlogDetail() {
  return (
    <Wrapper>
      Main Content
      <Comment />
      <Form />
    </Wrapper>
  );
}

export default BlogDetail;
