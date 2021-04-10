import React from 'react';
import { BWrapper, BFluidContainer } from '../components/Layout/Base';
import Header from '../components/commons/Header/Header';
import Footer from '../components/commons/Footer/Footer';
import MainContent from '../components/BlogDetailPage/MainContent/MainContent';
import Comment from '../components/BlogDetailPage/Comment/Comment';
import Form from '../components/BlogDetailPage/Form/Form';

function BlogDetailPage() {
  return (
    <BWrapper>
      <BFluidContainer>
        <Header p={10} />
      </BFluidContainer>
      <BFluidContainer column="true">
        <MainContent />
        <Comment />
        <Form />
      </BFluidContainer>
      <BFluidContainer>
        <Footer />
      </BFluidContainer>
    </BWrapper>
  );
}

export default BlogDetailPage;
