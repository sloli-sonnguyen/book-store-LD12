import React from 'react';
import { BWrapper, BFluidContainer } from '../components/Layout/Base';
import Header from '../components/commons/Header/Header';
import Footer from '../components/commons/Footer/Footer';
import Breadcrumb from '../components/Base/Breadcrumb/Breadcrumb';
import BlogsGallery from '../components/BlogsPage/BlogsGallery/BlogsGallery';

function BlogsPage() {
  return (
    <BWrapper>
      <BFluidContainer>
        <Header p={18} />
      </BFluidContainer>
      <BFluidContainer column="true">
        <Breadcrumb title="Blogs" />
        <BlogsGallery />
      </BFluidContainer>
      <BFluidContainer>
        <Footer />
      </BFluidContainer>
    </BWrapper>
  );
}

export default BlogsPage;
