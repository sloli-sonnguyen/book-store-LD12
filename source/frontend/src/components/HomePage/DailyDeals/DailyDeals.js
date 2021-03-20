import React from 'react';
import { Wrapper, Title } from './Style';
import { BContainer } from '../../Layout/Base';
import Card from '../../Base/Card/Card';

function DailyDeals() {
  return (
    <Wrapper>
      <Title>DAILY DEALS</Title>
      <BContainer p={10} between="true">
        <Card
          xs={12}
          sm={6}
          md={3}
          src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-39_grande.jpg?v=1587119146"
          subTitle="DONALD WILLIAM"
          title="Donate A Book"
          text1="$120.00"
          text2="$700.00"
        />
        <Card
          xs={12}
          sm={6}
          md={3}
          src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-44_grande.jpg?v=1587117561"
          subTitle="DONALD WILLIAM"
          title="Donate A Book"
          text1="$120.00"
          text2="$700.00"
        />
        <Card
          xs={12}
          sm={6}
          md={3}
          src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-34_grande.jpg?v=1587116925"
          subTitle="DONALD WILLIAM"
          title="Donate A Book"
          text1="$120.00"
          text2="$700.00"
        />
        <Card
          xs={12}
          sm={6}
          md={3}
          src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-1_grande.jpg?v=1613036885"
          subTitle="DONALD WILLIAM"
          title="Donate A Book"
          text1="$120.00"
          text2="$700.00"
        />
      </BContainer>
    </Wrapper>
  );
}

export default DailyDeals;
