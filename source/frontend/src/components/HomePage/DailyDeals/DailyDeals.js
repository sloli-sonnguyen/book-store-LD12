import React from 'react';
import { Wrapper, Title } from './Style';
import { BContainer } from '../../Layout/Base';
import Card from '../../Base/Card/Card';

const renderProducts = (products) => {
  if (products) {
    return products
      .slice(0, 4)
      .map((item) => (
        <Card
          key={item.id}
          xs={12}
          sm={6}
          md={3}
          src={item.imageUrl}
          subTitle={item.author}
          title={item.title}
          text1={`${Math.floor(item.price * item.salePercent)}.00$`}
          text2={`${item.price}$`}
          id={item.id}
        />
      ));
  }
};

function DailyDeals({ data }) {
  return (
    <Wrapper>
      <Title>DAILY DEALS</Title>
      <BContainer p={10} between="true">
        {renderProducts(data)}
      </BContainer>
    </Wrapper>
  );
}

export default DailyDeals;
