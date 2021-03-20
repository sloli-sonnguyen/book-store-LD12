import React from 'react';
import { Wrapper, Title, Menu } from './Style';
import { CustomButton } from '../../Buttons/Buttons';
import { BContainer } from '../../Layout/Base';
import Card from '../../Base/Card/Card';

function NewArrival() {
  return (
    <Wrapper>
      <Title>New Arrivals</Title>
      <Menu>
        <CustomButton activeColor="#d14031" color="white" mg={4}>
          All
        </CustomButton>
        <CustomButton
          color="white"
          hoverColor="#d14031"
          textColor="black"
          textHoverColor="white"
          mg={4}
        >
          Card Book
        </CustomButton>
        <CustomButton
          color="white"
          hoverColor="#d14031"
          textColor="black"
          textHoverColor="white"
          mg={4}
        >
          History
        </CustomButton>
        <CustomButton
          color="white"
          hoverColor="#d14031"
          textColor="black"
          textHoverColor="white"
          mg={4}
        >
          Fantancy
        </CustomButton>
        <CustomButton
          color="white"
          hoverColor="#d14031"
          textColor="black"
          textHoverColor="white"
          mg={4}
        >
          Romance
        </CustomButton>
        <CustomButton
          color="white"
          hoverColor="#d14031"
          textColor="black"
          textHoverColor="white"
          mg={4}
        >
          Science
        </CustomButton>
      </Menu>
      <BContainer p={10} between="true" wrap="true">
        <Card
          xs={12}
          sm={6}
          md={3}
          src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-101_grande.jpg?v=1587115881"
          subTitle="DONALD WILLIAM"
          title="Donate A Book"
          text1="$120.00"
          text2="$700.00"
        />
        <Card
          xs={12}
          sm={6}
          md={3}
          src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-16_grande.jpg?v=1587117190"
          subTitle="DONALD WILLIAM"
          title="Donate A Book"
          text1="$120.00"
          text2="$700.00"
        />
        <Card
          xs={12}
          sm={6}
          md={3}
          src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-46_grande.jpg?v=1587118513"
          subTitle="DONALD WILLIAM"
          title="Donate A Book"
          text1="$120.00"
          text2="$700.00"
        />
        <Card
          xs={12}
          sm={6}
          md={3}
          src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-65_grande.jpg?v=1587118346"
          subTitle="DONALD WILLIAM"
          title="Donate A Book"
          text1="$120.00"
          text2="$700.00"
        />
        <Card
          xs={12}
          sm={6}
          md={3}
          src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-4_grande.jpg?v=1587113962"
          subTitle="DONALD WILLIAM"
          title="Donate A Book"
          text1="$120.00"
          text2="$700.00"
        />
        <Card
          xs={12}
          sm={6}
          md={3}
          src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-71_grande.jpg?v=1587117773"
          subTitle="DONALD WILLIAM"
          title="Donate A Book"
          text1="$120.00"
          text2="$700.00"
        />
        <Card
          xs={12}
          sm={6}
          md={3}
          src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-102_grande.jpg?v=1587120877"
          subTitle="DONALD WILLIAM"
          title="Donate A Book"
          text1="$120.00"
          text2="$700.00"
        />
        <Card
          xs={12}
          sm={6}
          md={3}
          src="https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-30_grande.jpg?v=1587116432"
          subTitle="DONALD WILLIAM"
          title="Donate A Book"
          text1="$120.00"
          text2="$700.00"
        />
      </BContainer>
    </Wrapper>
  );
}

export default NewArrival;
