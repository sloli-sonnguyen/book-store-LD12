import React from 'react';
import { BWrapper, BFluidContainer } from '../components/Layout/Base';
import Breadcrumb from '../components/Base/Breadcrumb/Breadcrumb';
import Gallery from '../components/Base/Gallery/Gallery';

function BlogsPage() {
  return (
    <BWrapper>
      <BFluidContainer column="true">
        <Breadcrumb title="Blogs" />
        <Gallery type="blogs" />
      </BFluidContainer>
    </BWrapper>
  );
}

export default BlogsPage;
