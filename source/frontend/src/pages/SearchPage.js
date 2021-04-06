import React from 'react';
import { BWrapper, BFluidContainer } from '../components/Layout/Base';
import Header from '../components/commons/Header/Header';
import Footer from '../components/commons/Footer/Footer';
import BreadcrumbContainer from '../containers/BreadcrumbContainer';
import Gallery from '../components/Base/Gallery/Gallery';
import SearchBox from '../components/SearchPage/SearchBox/SearchBox';

function SearchPage() {
  return (
    <BWrapper>
      <BFluidContainer>
        <Header p={10} />
      </BFluidContainer>
      <BFluidContainer column="true">
        <BreadcrumbContainer />
        <SearchBox />
        <Gallery type="products" />
      </BFluidContainer>
      <BFluidContainer>
        <Footer />
      </BFluidContainer>
    </BWrapper>
  );
}

export default SearchPage;
