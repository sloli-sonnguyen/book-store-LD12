import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BWrapper, BFluidContainer } from '../components/Layout/Base';
import Header from '../components/commons/Header/Header';
import Footer from '../components/commons/Footer/Footer';
import Products from '../components/ProductsPage/Products/Products';
import BreadcrumbContainer from '../containers/BreadcrumbContainer';
import { PrimaryLoading } from '../components/Base/Loading/Loading';
import { loadProducts } from '../redux/actions/productsAction';

function ProductsPage() {
  const products = useSelector((state) => state.products);
  const { success } = products;
  const dispatch = useDispatch();

  useEffect(() => {
    const { data } = products;
    if (!data) {
      dispatch(loadProducts());
    }
  }, []);

  return (
    <BWrapper>
      <BFluidContainer>
        <Header p={18} />
      </BFluidContainer>
      {success && (
        <>
          <BFluidContainer column="true">
            <BreadcrumbContainer />
            <Products {...products} />
          </BFluidContainer>
          <BFluidContainer>
            <Footer />
          </BFluidContainer>
        </>
      )}

      {success || <PrimaryLoading type="bubbles" color="#d14031" />}
    </BWrapper>
  );
}

export default ProductsPage;
