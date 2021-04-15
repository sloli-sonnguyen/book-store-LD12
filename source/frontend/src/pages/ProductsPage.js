import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BWrapper, BFluidContainer } from '../components/Layout/Base';
import Products from '../components/ProductsPage/Products/Products';
import Breadcrumb from '../components/Base/Breadcrumb/Breadcrumb';
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
      {success && (
        <BFluidContainer column="true">
          <Breadcrumb title="Products" />
          <Products {...products} />
        </BFluidContainer>
      )}
      {success || <PrimaryLoading type="bubbles" color="#d14031" />}
    </BWrapper>
  );
}

export default ProductsPage;
