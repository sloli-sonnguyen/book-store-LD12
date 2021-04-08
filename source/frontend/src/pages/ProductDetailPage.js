import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { BWrapper, BFluidContainer } from '../components/Layout/Base';
import Header from '../components/commons/Header/Header';
import Footer from '../components/commons/Footer/Footer';
import BreadcrumbContainer from '../containers/BreadcrumbContainer';
import MainContent from '../components/ProductDetailPage/MainContent/MainContent';
import RelatedProducts from '../components/ProductDetailPage/RelatedProducts/RelatedProducts';
import TabsContainer from '../components/ProductDetailPage/TabsContainer/TabsContainer';

function ProductDetailPage() {
  const history = useHistory();
  const productId = history.location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  useEffect(() => {
    const baseUrl = process.env.REACT_APP_BOOKS_API_URL;
    axios.get(`${baseUrl}/${productId}`).then((res) => {
      setProduct(res.data);
    });
    // const findProduct = products.find((item) => item.id === productId);
    // setProduct(findProduct);
  }, []);

  return (
    <BWrapper>
      <BFluidContainer>
        <Header p={18} />
      </BFluidContainer>
      <BFluidContainer column="true">
        <BreadcrumbContainer />
        <MainContent {...product} />
        <TabsContainer {...product} />
        <RelatedProducts {...product} />
      </BFluidContainer>
      <BFluidContainer>
        <Footer />
      </BFluidContainer>
    </BWrapper>
  );
}

export default ProductDetailPage;
