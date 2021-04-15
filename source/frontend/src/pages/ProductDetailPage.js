import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { BWrapper, BFluidContainer } from '../components/Layout/Base';
import Breadcrumb from '../components/Base/Breadcrumb/Breadcrumb';
import MainContent from '../components/ProductDetailPage/MainContent/MainContent';
import RelatedProducts from '../components/ProductDetailPage/RelatedProducts/RelatedProducts';
import TabsContainer from '../components/ProductDetailPage/TabsContainer/TabsContainer';
import { PrimaryLoading } from '../components/Base/Loading/Loading';

function ProductDetailPage() {
  const history = useHistory();
  const productId = history.location.pathname.split('/')[2];
  const [product, setProduct] = useState(null);
  const [loadProductStatus, setLoadProductStatus] = useState(false);
  useEffect(() => {
    const baseUrl = process.env.REACT_APP_BOOKS_API_URL;
    axios.get(`${baseUrl}/${productId}`).then((res) => {
      setProduct(res.data);
      setLoadProductStatus(true);
    });
    // const findProduct = products.find((item) => item.id === productId);
    // setProduct(findProduct);
  }, []);

  return (
    <BWrapper>
      {loadProductStatus && (
        <BFluidContainer column="true">
          <Breadcrumb title="Product Detail" />
          <MainContent {...product} />
          <TabsContainer {...product} />
          <RelatedProducts {...product} />
        </BFluidContainer>
      )}
      {loadProductStatus || <PrimaryLoading type="bubbles" color="#d14031" />}
    </BWrapper>
  );
}

export default ProductDetailPage;
