import React from 'react';
import { BWrapper, BFluidContainer } from '../components/Layout/Base';
import Breadcrumb from '../components/Base/Breadcrumb/Breadcrumb';
import Gallery from '../components/Base/Gallery/Gallery';
import SearchBox from '../components/SearchPage/SearchBox/SearchBox';

function SearchPage() {
  return (
    <BWrapper>
      <BFluidContainer column="true">
        <Breadcrumb title="Search" />
        <SearchBox />
        <Gallery type="products" />
      </BFluidContainer>
    </BWrapper>
  );
}

export default SearchPage;
