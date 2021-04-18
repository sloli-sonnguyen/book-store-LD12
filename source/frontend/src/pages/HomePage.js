import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BWrapper, BFluidContainer } from '../components/Layout/Base';
import NewArrivals from '../components/HomePage/NewArrivals/NewArrival';
import Intro from '../components/HomePage/Intro/Intro';
import SupportTypes from '../components/HomePage/SupportTypes/SupportTypes';
import FestivalBanner from '../components/HomePage/FestivalBanner/FestivalBanner';
import DailyDeals from '../components/HomePage/DailyDeals/DailyDeals';
import SpecialBanner from '../components/HomePage/SpecialBanner/SpecialBanner';
import LatestNews from '../components/HomePage/LatestNews/LatestNews';
import Subcribe from '../components/HomePage/Subcribe/Subcribe';
import GiftsBanner from '../components/HomePage/GIftsBanner/GiftsBanner';

import { PrimaryLoading } from '../components/Base/Loading/Loading';
import { loadProducts } from '../redux/actions/productsAction';

function HomePage() {
  const products = useSelector((state) => state.products);
  const { success } = products;
  const dispatch = useDispatch();
  /**
   * dispatch is a function have "action" parameter.
   * structure dispatch function:
   *  function(action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }
        return next(action);
      }
   */
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
          <Intro />
          <SupportTypes />
          <NewArrivals category={products.category} data={products.data} />
          <FestivalBanner />
          <DailyDeals data={products.data} />
          <SpecialBanner />
          <LatestNews />
          <GiftsBanner />
          <Subcribe />
        </BFluidContainer>
      )}
      {success || <PrimaryLoading type="bubbles" color="#d14031" />}
    </BWrapper>
  );
}

export default HomePage;
