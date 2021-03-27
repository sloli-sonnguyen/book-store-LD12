import React from 'react';
import { BWrapper, BFluidContainer } from '../components/Layout/Base';
import Header from '../components/commons/Header/Header';
import Footer from '../components/commons/Footer/Footer';
import Breadcrumb from '../components/Base/Breadcrumb/Breadcrumb';
import BlogDetail from '../components/BlogDetailPage/BlogDetail';

function BlogDetailPage() {
  return (
    <BWrapper>
      <BFluidContainer>
        <Header p={10} />
      </BFluidContainer>
      <BFluidContainer column="true">
        <Breadcrumb
          title="Best writers of 19th century"
          subTitle="Home - News - Best writers of 19th century"
        />
        <BlogDetail />
      </BFluidContainer>
      <BFluidContainer>
        <Footer />
      </BFluidContainer>
    </BWrapper>
  );
}

export default BlogDetailPage;
